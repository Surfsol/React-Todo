import React from 'react';

//add new item to shopping list 
//form will manage its own state, dont pass in props 
class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: ''
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value  //e.target.name is same as task, line 9
    });
  };

  //since onSubmit add e.preventDefault()
  submitTask = e => {
    e.preventDefault();
    this.props.addTask(this.state.task);
  };
//create a form to submit a new task
  render() {
    return (
      <form onSubmit={this.submitTask}>
        <input
          type="text"
          value={this.state.task}
          name="task"
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;