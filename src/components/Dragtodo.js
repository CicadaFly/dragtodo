import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './Navbarr';
import List from './List'
import {Container, Row } from "react-bootstrap";
import Edit from "./Edit";
import classes from "../styles/app.module.scss"


const Dragtodo = () => {
  const dummyData = [
    {
      title: "Title1",
      todos: [
        {names: "todo1",
        finish: false},
        {names: "todo2",
        finish: false}
      ]
    },
    {
      title: "Title2",
      todos: [
        {names: "todo1",
        finish: false},
        {names: "todo20",
        finish: true}
      ]
    }
  ]

  const editStateInit = {
    show: false,
    dimensions: { top: 0, left: 0, width: 0 },
    value: "",
    listId: -1,
    todoId: -1,
  }

  const [lists, setLists] = useState(dummyData)
  const [showEdit, setShowEdit] = useState(editStateInit)

  const addNewToDo=(listindex, newtodo)=>{
    let newList = [...lists]
    newList[listindex].todos.push({names: newtodo, finish: false}) //listindex用來辨識新增目標
    setLists(newList)
  }

  return (
<span>
 <Navbarr className={classes.navbar}></Navbarr>
 <Container fluid="sm" className={`${classes.board} p-1`}>
    <Row className="m-0">
      {lists.map((list, index)=>(
        <List key={index} {...list} listId={index} addToDo={addNewToDo} setShowEdit={setShowEdit}/>
      ))}
      {showEdit.show && <Edit showEdit={showEdit} setShowEdit={setShowEdit}/>}
    </Row>
    
  </Container>

 </span>
  );


}

export default Dragtodo