import React from 'react';


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

const styles = {}
class App extends React.Component { //1.declare class and extend React.Component
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  //step 2, add constructor and state
  constructor(){
    super();
    this.state={
      list,
      newTask:"",
      id:""
    };
  }
  
  //insert a value, add value to object, concat object to array

 onAddItem =event=>{
  console.log(`onAddItem`,this.state.newTask)
  const newObj={task:this.state.newTask, id: 10*Math.random(), completed: false}
  console.log(`new object`, newObj)
  this.setState({list: this.state.list.concat(newObj)})
   }
 
  //onClearList resets list to an empty array
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

  //need to get object, and change completed
  onCompleted = event=>{
    console.log(`oncompleted`,event.target);
    
  }

  toggleItem = id => {
    console.log(`id`, id)
  }

  onResetList = ()=>{
    this.setState({list})
  }

 

  //change newTask, when enter text in field
  onChangeValue = event => {
    console.log(event.target.value);
    //save on state, message
    this.setState({newTask: event.target.value});
    this.setState({id: Math.random()})
  };

/*
  handleInputChange1 = event => {
    console.log(event.target.value);
    //save on state, message
    this.setState(event.target.value), ()=> console.log(this.state.count)  //add second function
  }
  */

  //step 3, render UI and return JSX
  render() {
    return( <div>
      <ul>
        {this.state.list.map(e=>(
          <li key={e.id} onMouseEnter={this.toggleItem}>{e.task}</li>
      ))}
      </ul>
      <input type='text' placeholder='to do' onChange={this.onChangeValue}/> 
      <button type='button' onClick={this.onAddItem}>Add</button>
      <button type='button' onClick={this.onClearList}>Clear Completed</button>
      <button type='button' onClick={this.onResetList}>Reset</button>
      <button type='button' onClick={()=>this.onCompleted}></button>
    </div>
    )
  }
}

export default App;