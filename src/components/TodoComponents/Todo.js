import React from 'react';

//renders list on screen
const Todo = props => {
    console.log(`todo props`,props)
    console.log(`todo props.item.task`,props.item.task)
  return (
    <div onClick={()=> props.toggleItem(props.item.id)} >
      <p>{props.item.task}</p> 
    </div>
  );
};

export default Todo;