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

  const editContent = (listindex,todoindex, content) =>{
    // if (content){
    //   let newLists = [...lists]
    //   newLists[listindex].todos[todoindex].names = content
    //   setLists(newLists)
    // }
  }
  const editDebug= () => { 
    console.log(showEdit.value) 
  }
  // END OF EDITING FUNCTION
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
              />
      ))}
      {showEdit.show && 
        <Edit showEdit={showEdit}
              setShowEdit={setShowEdit} 
              editContent={editContent} />}
      
    </Row>
    <NewList addlist={addlist}></NewList>
    <button onClick={editDebug}>TTTTTTTTTTTTTTTTTTTT</button>
  </Container>

 </span>
  );


}

export default Dragtodo