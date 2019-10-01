import React from 'react';

//renders list on screen
//make div, that can be clicked in to toggleItem by id.
// <p>displays items on screen
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