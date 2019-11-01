import React, { Component, Fragment } from 'react'
import debounce from 'lodash.debounce'
import axios from 'axios'

const MAX_ALLOWED_ITEMS = 100;
class Scroller extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            error: '',
            completed: false,
            isLoading: false
        }
        window.onscroll = debounce(() => {
            const { error, completed, isLoading } = this.state;
            if (error || completed || isLoading) {
                return;
            }
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                this.loadUsers();
            }
        }, 100);
    }

    componentWillMount() {
        this.loadUsers();
    }

    loadUsers = () => {
        this.setState({ isLoading: true }, () => {
            axios.get('https://randomuser.me/api/?results=10')
                .then(res => {
                    // console.log(res.data.results);
                    const newUsers = res.data.results.map(user => ({
                        email: user.email,
                        name: Object.values(user.name).join(' '),
                        photo: user.picture.medium,
                        username: user.login.username,
                        uuid: user.login.uuid
                    }))
                    this.setState({
                        isLoading: false,
                        posts: [...this.state.posts, ...newUsers],
                    }, () => {
                        this.setState({
                            ...this.state,
                            completed: (this.state.posts.length >= MAX_ALLOWED_ITEMS)
                        })
                    })
                })
                .catch(err => {
                    this.setState({
                        error: err.message,
                        isLoading: false
                    })
                })
        })
    }



    render() {
        const { error, posts, completed, isLoading } = this.state
        return (
            <div>
                <h1>Infinite Users!</h1>
                <p>Scroll down to load more content</p>
                {
                    posts.map(user => (
                        // console.log(user)
                        <Fragment key={user.username}>
                            <hr />
                            <div key={user.username}>
                                <div style={{ display: 'flex' }}>
                                    {/* <div> */}
                                    <img alt={user.username} src={user.photo} style={{
                                        borderRadius: '50%',
                                        height: 72,
                                        marginRight: 20,
                                        width: 72,
                                    }} />
                                    <div>
                                        <h2 style={{ marginTop: 0 }}>
                                            @{user.username}
                                        </h2>
                                        <p>Name: {user.name}</p>
                                        <p>Email: {user.email}</p>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    ))
                }
                <hr />
                {error && <div style={{ color: '#900' }}>
                    {error}
                </div>}
                {isLoading &&
                    <div>Loading ...</div>}
                {completed &&
                    <div>You did it. You reached the end of the list</div>
                }
            </div>
        )
    }
}

export default Scroller
