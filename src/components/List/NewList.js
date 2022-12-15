import { Button, Form } from 'react-bootstrap';
import React, {useEffect, useRef, useState} from "react";
import classes from "../../styles/app.module.scss";

const NewList = ({addlist}) => {
  const [showAddNewList, setShowAddNewList] = useState(false)
  const [listName, setListName] = useState("")
  const [validInput, setValidInput] = useState(true)
  const editRef = useRef(null)
  const setValue = (event) => {
  setListName(event.target.value)
  }

  const showAddHandler = () => {setShowAddNewList(true)}
  const hideAddHandler = () => {setShowAddNewList(false); setValidInput(true)}

  const addingHandler = (event) => {
    event.preventDefault()
    if (listName){
    addlist(listName); 
    setListName("");
    hideAddHandler();
    setValidInput(true)
    ;
  }
    else{
    setValidInput(false)
    } 
  }
  useEffect(()=>{
    if (showAddNewList && editRef.current) {
      editRef.current.focus()
    }
  },[showAddNewList])

  if (showAddNewList) {
    return(
      <div className={`${classes.list} p-2 m-1 rounded`}>
        <Form onSubmit={addingHandler}>
          <Form.Control
            as="textarea"
            value={listName}
            placeholder="Name the new list"
            ref={editRef}
            onChange={setValue}
            onBlur={hideAddHandler}
          />
          <Button
            type="submit"
            className="mt-2"
            onMouseDown={(event)=>{event.preventDefault()}}
          >
            Save
          </Button>
          {!validInput && <p style={{color:"red"}}>Can't be blank!</p>}
        </Form>
        </div>
    )
  }
  else {
    return(
        <Button 
        onClick={showAddHandler} 
        size= "sm"
        width = "30%"
        >Add new one</Button>
    )
  }
};

export default NewList;