import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Todo = ({name})=>{
  return(
    <div className="todo my-1 p-1 rounded">{name}</div>
  )
}

// const Todo = (props) =>{
//   return(
//     <div className="todo my-1 p-1 rounded"> {props.name} </div>
//   )
// };

export default Todo