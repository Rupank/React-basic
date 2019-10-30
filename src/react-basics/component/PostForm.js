import React, { Component } from 'react'
import Axios from 'axios';

export class PostForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHandler = (e) => {
        console.log(e.target);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        console.log(this.state);
        e.preventDefault();
        Axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    render() {
        const { userId, title, body } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="userId" value={userId} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <input type="text" name="title" value={title} onChange={this.changeHandler}></input>
                    </div>
                    <div>
                        <input type="text" name="body" value={body} onChange={this.changeHandler}></input>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
