import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import classes from "../../styles/app.module.scss"

const Edit =({showEdit, setShowEdit,editContent})=> {
  const editRef = useRef(null)
  const [todoContent, setTodoContent] = useState("")

// position
  const { top, left, width } = showEdit.dimensions
  const position = {
    position: "relative",
    margin: 0,
    top,
    left,
  };
  const textareaSize = {
    width,
    height: "84px",
  };

//position End
  const editClickHandler = () => {
    setShowEdit({
      ...showEdit,
      show:false
    })
  }

  const editCheckHandler = () =>{
    if(todoContent.trim()){
      setShowEdit({
        ...showEdit,
        value: todoContent
      })
      editContent(showEdit.listId, showEdit.todoId, showEdit.value)
    }
    console.log(showEdit.listId,todoContent)
  }

  return (


    <Form className={classes["edit-form"]} onClick={editClickHandler} >
      <div style={position}>
        <div className={classes["edit-textarea"]}>
        <Form.Control 
          style={textareaSize}
          defaultValue={showEdit.value}
          onChange={(e)=>{setTodoContent(e.target.value);console.log(e.target.value)}}
          rows="3" 
          as="textarea" 
          ref={editRef} 
          onClick={ (event) => {event.stopPropagation()} }/>
        </div>
        <Button type="submit"
                className="mt-2"
                onMouseDown={(event)=>{event.preventDefault()}}
                onClick={editCheckHandler}>
          Save
        </Button>
      </div>
    </Form>
      
  );
};

export default Edit