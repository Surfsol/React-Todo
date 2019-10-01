import React from 'react'
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import Todo from './Todo'


const TodoList = props => {
console.log(`list`, props) //brings in todoList and toggleItem
//below e = each object, e.id = id 
    return (
        <div>
            {props.todoList.map(e=>(
            <Todo key={e.id} item={e} toggleItem={props.toggleItem}/>
            ))}
            <button onClick={props.completedTask}>
            Clear Task
            </button>
        </div>

    )

}

export default TodoList;