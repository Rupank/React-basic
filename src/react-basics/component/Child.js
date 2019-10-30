import React from 'react';
import './style.css'
function ChildComponent(props) {
    return (
        <div>
            <h1 className = "Rupank"> Rupank</h1>
            <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent;