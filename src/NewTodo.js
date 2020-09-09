import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './NewTodoForm.css'
class NewTodo extends Component{
  
    state={task:""}
    handleChange=(evt)=>{
        this.setState({
            [evt.target.name]:evt.target.value
        })

    }
    handleSubmit=(evt)=>{
        evt.preventDefault();
        this.props.createTodo({...this.state,id: uuidv4(), completed:false })
        this.setState({task:""})
    }
    render(){
        return(
            <form className="NewTodoForm" onSubmit={this.handleSubmit}>
                <label htmlFor="task">New Todo:</label>
                <input type="text" placeholder="Add Task" id="task" name="task" value={this.state.task} onChange={this.handleChange}></input>
                <button>Add New Todo</button>
            </form>
        );
    }
}

export default NewTodo;