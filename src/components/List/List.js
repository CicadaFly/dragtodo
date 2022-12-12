import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from '../Todo/Todo';
import NewToDo from '../Todo/NewToDo';
import { Button, Card } from 'react-bootstrap';
import classes from "../../styles/app.module.scss"
import ListTitle from './ListTitle';


const List = ({title, todos, addToDo, listId, setShowEdit, editListTitle, editFinish}) =>{
const [showNew, setShowNew] = useState(false)
const showNewHandler = () =>{setShowNew(!showNew)}

return(
<Card className={`p-2 m-1 rounded-lg ${classes.list}`} style={{ width: '18rem' }}>
    <ListTitle listId={listId} title={title} editListTitle={editListTitle}/>
        {todos.map((todo, index) => (
        <Todo key={index} 
              listId={listId}
              todoId={index} 
              name={todo.names}
              finish={todo.finish} 
              setShowEdit={setShowEdit}
              editFinish={editFinish}
              />
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