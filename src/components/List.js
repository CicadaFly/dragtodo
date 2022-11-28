import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './Todo';
import NewToDo from './NewToDo';
import { Button, Card } from 'react-bootstrap';


const List = ({title, todos}) =>{
const [showNew, setShowNew] = useState(false)
const showNewHandler = () =>{setShowNew(!showNew)}

return(
<Card className="list p-2 m-1 rounded-lg" style={{ width: '18rem' }}>
    <div className="title">{title}</div>
        {todos.map((todo, index) => (
        <Todo key={index} name={todo.names} />
      ))}
      {showNew ? (
        <>
        <NewToDo blur={showNewHandler}/>
        <Button variant="success" onClick={showNewHandler}>Close</Button>
        </>
      ) :  (
        <div className='footer pt-2 d-flex'>
          <Button className="py-1 flex-grow-1 text-left" onClick={showNewHandler}>Add new</Button>
        </div>
        )}
</Card>
);
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