import React, { Component} from 'react'
import Todo from "./Todo";
import NewTodo from './NewTodo';
import "./Todolist.css";
class Todolist extends Component{
    state={todos:[]}
    
    create=(NewTodos)=>{
        this.setState({
            todos: [...this.state.todos,NewTodos]
        })
    }
    remove=(id)=>{
        this.setState({
            todos:this.state.todos.filter(t=> t.id !== id)
        })
    }
    update=(id,updatedTask)=>{
        const upadtedTodos=this.state.todos.map(todo=>{
            if(todo.id === id){
                return{...todo,task:updatedTask};
            }
            return todo;
        });
        this.setState({todos:upadtedTodos});
    }
    toggleCompletion=(id)=>{
        const upadtedTodos=this.state.todos.map(todo=>{
            if(todo.id === id){
                return{...todo,completed:!todo.completed};
            }
            return todo;
        });
        this.setState({todos:upadtedTodos});
    }

    render(){
        return(
            <div className="Todolist">
                <h1>TodoList!<span>Whatever It Takes!</span></h1>
                <NewTodo createTodo={this.create}></NewTodo>
                {this.state.todos.map(todo => {
                    return(
                        <div>
                           <Todo key={todo.id} 
                           id={todo.id} 
                           task={todo.task} 
                           completed={todo.completed}
                           updateTodo={this.update} 
                           removeTodo={this.remove}
                           toggleTodo={this.toggleCompletion}></Todo> 
                        </div>
                    ); 
                })}
            </div>
        );
    }
}

export default Todolist;