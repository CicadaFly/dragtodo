import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './Todo';
import NewToDo from './NewToDo';
import { Button, Card } from 'react-bootstrap';
import classes from "../styles/app.module.scss"


const List = ({title, todos, addToDo, listId, setShowEdit}) =>{
const [showNew, setShowNew] = useState(false)
const showNewHandler = () =>{setShowNew(!showNew)}

return(
<Card className={`p-2 m-1 rounded-lg ${classes.list}`} style={{ width: '18rem' }}>
    <div className={classes.title}>{title}</div>
        {todos.map((todo, index) => (
        <Todo key={index} name={todo.names} setShowEdit={setShowEdit}/>
      ))}
      {showNew ? (
        <>
        <NewToDo blur={showNewHandler}
                 listId={listId}
                 addToDo={addToDo}/>
        <Button variant="success" onClick={showNewHandler}>Close</Button>
        </>
      ) :  (
        <div className={`${classes.footer} pt-2 d-flex`}>
          <Button className="py-1 flex-grow-1 text-left" onClick={showNewHandler}>Add new</Button>
        </div>
        )}
</Card>
);
};


export default List