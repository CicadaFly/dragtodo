import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './Navbarr';
import List from './List/List'
import {Container, Row } from "react-bootstrap";
import Edit from "./Edit/Edit";
import classes from "../styles/app.module.scss"
import NewList from "./List/NewList";


const Dragtodo = () => {
  const dummyData = [
    {
      title: "Title1",
      todos: [
        {names: "todo1",
        finish: false},
        {names: "todo2",
        finish: false},
        {names: "todo3",
        finish: false},
        {names: "todo4",
        finish: true}
      ]
    },
    {
      title: "Title2",
      todos: [
        {names: "todo30",
        finish: false},
        {names: "todo40",
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
  // ADDING FUNCTION
  const addNewToDo=(listindex, newtodo)=>{
    let newList = [...lists]
    newList[listindex].todos.push({names: newtodo, finish: false}) //listindex用來辨識新增目標
    setLists(newList)
  }

  const addlist=(newListTitle)=>{
    let newList = [...lists]
    newList.push({title: newListTitle, todos: []})
    setLists(newList)
  }
  // END OF ADDING FUNCTION

  // EDITING FUNCTION
  const editListTitle = (listindex, title) =>{
    if (title){
    let newLists = [...lists]
    newLists[listindex].title = title
    setLists(newLists)
    }
  }

  const editContent = (listId, todoId, content) =>{
    if (content){
      let newLists = [...lists]
      newLists[listId].todos[todoId].names = content
      setLists(newLists)
      setShowEdit(editStateInit)
    }
  }

  const editFinish = (listId, todoId, finish) =>{
      let newLists = [...lists]
      newLists[listId].todos[todoId].finish = finish
      setLists(newLists)
      setShowEdit(editStateInit)
    }
  

  // END OF EDITING FUNCTION

  // MOVING FUNCTION
    const moveTodo = (elistid, etodoid, olistid, otodoid) =>{
      let newList = [...lists]
      const targetTodo = newList[olistid].todos[otodoid]     
      if (olistid === elistid) {
        if (otodoid > etodoid)
          {otodoid = otodoid+1}
        if (otodoid < etodoid)
          {etodoid = etodoid+1}}
      newList[elistid].todos.splice(etodoid,0,targetTodo)
      newList[olistid].todos.splice(otodoid,1)
      console.log(targetTodo,elistid,etodoid)
      setLists(newList)
    }
  // END OF MOVING FUNCTION
  return (
<span>
 <Navbarr className={classes.navbar}></Navbarr>
 <Container fluid="sm" className={`${classes.board} p-1`}>
    <Row className="m-0">
      {lists.map((list, index)=>(
        <List key={index} 
              {...list} 
              listId={index} 
              addToDo={addNewToDo} 
              setShowEdit={setShowEdit}
              editListTitle={editListTitle}
              editFinish={editFinish}
              moveTodo={moveTodo}
              />
      ))}
      {showEdit.show && 
        <Edit showEdit={showEdit}
              setShowEdit={setShowEdit} 
              editContent={editContent} />}
      
    </Row>
    <NewList addlist={addlist}></NewList>
  </Container>

 </span>
  );


}

export default Dragtodo