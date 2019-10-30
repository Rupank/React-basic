import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            newItem :"",
            list : []
        }
    }

    addItem(value){
        if(value!=""){
            const newItem = {
                id:Date.now(),
                value:value,
                isDone:false
            };
            const list = [...this.state.list];
            list.push(newItem);
            this.setState({
                list,
                newItem:""
            });
        }
    }

    deleteItem(id){
        const list = [...this.state.list];
        const updatedList = list.filter(item=>item.id!==id);
        this.setState({list:updatedList});
    }

    updateInput(input){
        this.setState({newItem:input});
    }

    render(){
       return (
           <div>
               <img src={logo} width="100" height='100' className='logo'/>
               <h1 className="app-title"> TO Do App</h1>
               <div className="container">
                    Add an item...
                    <br/>
                    <input 
                        type="text"
                        name="" 
                        className="input-text"
                        placeholder="Write something here"
                        required
                        value={this.state.newItem}
                        onChange={e=>this.updateInput(e.target.value)}
                        />
                    <button 
                    className="add-button"
                    onClick={()=>this.addItem(this.state.newItem)}
                    disabled = {!this.state.newItem.length}
                    > Submit</button>
                    <div className="list">
                        <ul>
                            {this.state.list.map(item=>{
                                return (
                                    <li key={item.id}>
                                        <input
                                        type="checkbox" 
                                        name="isDone"
                                        checked = {item.isDone}
                                        onChange = {()=>{}}
                                        />
                                        {item.value}
                                        <button className="button" 
                                        onClick = {()=>this.deleteItem(item.id)}> 
                                        Delete </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
               </div>
           </div>
       )
    }
}
