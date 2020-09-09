import React, { Component } from 'react';
import "./Todo.css";
class Todo extends Component{
    state={
        isEditing:false,
        task:this.props.task
    }
    handleRemove=()=>{
        this.props.removeTodo(this.props.id);
    }
    toggleForm=()=>{
        this.setState({isEditing: !this.state.isEditing})
    }
    handleUpdate=(evt)=>{
        evt.preventDefault();
        this.props.updateTodo(this.props.id,this.state.task)
        this.setState({isEditing:false})
    }
    handleChange=(evt)=>{
        this.setState({
            [evt.target.name]:evt.target.value
        })
    }
    handleToggle=(evt)=>{
        this.props.toggleTodo(this.props.id)
    }
    render(){
        let result;
        if(this.state.isEditing){
           result=(
            <div className="Todo">
            <form className="Todo-edit-form" onSubmit={this.handleUpdate}>
                <input type="text" name="task" onChange={this.handleChange} value={this.state.task}></input>
                <button>Save!</button>
            </form>
            </div>
           ) 
        }
        else{
               result=( <div className="Todo">
                    <li onClick={this.handleToggle}
                     className={this.props.completed && "Todo-task completed"}>{this.props.task}</li>
                   <div className="Todo-buttons">
                   <button onClick={this.toggleForm}><i class="fas fa-pen"></i></button>
                    <button onClick={this.handleRemove}><i class="fas fa-trash"></i></button>
                   </div>
                </div>)
        }
        return result;
         
    }
}

export default Todo;