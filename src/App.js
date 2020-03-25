import React,{Component}from 'react'
  

  class TodoList extends Component{
    constructor(){
      super();
      this.state={
        todos: [],
        currentTodo: ","
      };
    }
    //this where our methodes will go
    handleChange =(event) =>{
      console.log(event.target.value);
    }
    additem=(event) =>{
      event.preventDefault();
      console.log("the add item method executed");
    };




    render(){
      return(
        <div className='container'>
          <form onSubmit={this.additem}>
            <label htmlFor="taskName">Task Name:</label>
            <input onChange={this.handleChange} name="taskNmae " type="text"placeholder="Add todo here"></input>
            <button type="submit">Add Task</button>
          </form>
          <ul>
            {/*map through*/ }
          </ul>
          </div>
      );
    }
  }
 
 
 
 
 
 
 
 


export default TodoList;
