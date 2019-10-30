import React, { Component } from 'react'

export class Counter extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    incrementCounter() {

        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log(this.state.count);
        // });
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }


    incrementFive() {
        this.incrementCounter();
        this.incrementCounter();
        this.incrementCounter();
        this.incrementCounter();
        this.incrementCounter();
    }
    render() {
        return (
            <div>
                Count - {this.state.count}
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
