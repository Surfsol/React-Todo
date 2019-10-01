import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm';


const list = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },

  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]


class App extends React.Component { //1.declare class and extend React.Component
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  //step 2, add constructor and state
  constructor(){
    super();
    this.state={
      todoList: list,
      newTask:"",
      id:""
    };
  }
  
 //passed to TodoList.js, then to Todo.js
  toggleItem = id => {
    console.log(`toggle`,id);
    // Update groceries on our state object
    // use this.setState
    // loop through the arr
    // find which element we clicked update the "pruchased" property
    this.setState({
      todoList: this.state.todoList.map(item => {
        if (item.id === id) {
          return {
            ...item,
            // Same as:
            // name: item.name,
            // id: item.id,
            // purchased: item.purchased,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

//creates new array, filters out 
// passed as props to TodoList
  completedTask = () => {
    this.setState({
      todoList: this.state.todoList.filter(item => !item.completed)
    });
  };

  //used at bottom of screen
  onResetList = ()=>{
    this.setState({
      todoList: []})
  }


  //onClearList resets list to an empty array
  /*
  onClearList = ()=>{
    this.state.list.map((e, index)=>{
      console.log(`clear`, e)
      console.log(`clear`, index)
      var done = e.completed
      var task = e.task
      if (done === true){
        this.setState(this.state.list.splice(index,1))
      }
    })
  }
*/
  //create brand new array
  // is on TodoForm
  // first creates object containing task, id, completed
  //brings down todoList and adds new object, newTask
  // resets state, which will re-render 
  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Math.random()*10,
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTask]
    });
  };



  //step 3, render UI and return JSX
  render() {
    return( 
    <div>
      <ul>
      <TodoForm addTask={this.addTask}/>
      <TodoList
      todoList={this.state.todoList}
      toggleItem={this.toggleItem}
      completedTask={this.completedTask}
      />

      </ul>
       
      
     
      <button type='button' onClick={this.onResetList}>Reset</button>
      
    </div>
    )
  }
}

export default App;