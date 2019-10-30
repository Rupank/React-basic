import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';
class LifeCycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'Rupank'
        }
        console.log('LifeCycleA constructor');
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedStateFromProps');
        return null;
    }

    componentDidMount(){
        console.log('LifeCycleA componentDidMount');
    }

    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate');
        return true;
    }
    
    getSnapshotBeforeUpdate(){
        console.log('LifeCycleA getSnapshotBeforeUpdate');
        return null;

    }
    changeState = ()=>{
        this.setState({
            name:'RupankUpdated'
        })
    }

    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate');
    }
    render() {
        console.log('LifeCycleA render');
        return (
            <div>
                <div>LifeCycleA</div>
                <button onClick={this.changeState}> Change State</button>
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA
