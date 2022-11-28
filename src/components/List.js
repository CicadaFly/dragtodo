import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './Todo';


const List = ({title, todos}) =>{

return(
<div className="list p-2 m-1 rounded-lg">
    <div className="title">{title}</div>
        {todos.map((todo, index) => (
        <Todo key={index} name={todo.names} />
      ))}
</div>
)
};

// const List = (props) =>{
//   const title = props.title
//   const todos = props.todos
//   return(
//   <div className="list p-2 m-1 rounded-lg">
//       <div className="title">{title}</div>
//           {todos.map((todo, index) => (
//           <Todo key={index} name= {todo.name} />
//         ))}
//   </div>
//   )
//   };
export default List