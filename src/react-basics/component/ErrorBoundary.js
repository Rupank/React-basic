import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasEror: false
        }
    }


    static getDerivedStateFromError(error) {
        return {
            hasEror: true
        }
    }

    componentDidCatch(error, info) {
        console.log(error);
        console.log(info);
    }
    render() {
        if (this.state.hasEror) {
            return <h1>Something Went Wrong</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary
