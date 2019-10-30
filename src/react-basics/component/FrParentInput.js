import React, { Component } from 'react'
import FrInput from './FrInput'

class FrParentInput extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }
    clickHandler = () => {
        this.inputRef.current.focus();
    }
    render() {
        return (
            <div>
                <FrInput typ="text" ref={this.inputRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default FrParentInput
