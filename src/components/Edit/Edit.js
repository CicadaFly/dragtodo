import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import classes from "../../styles/app.module.scss"

const Edit =({showEdit, setShowEdit})=> {
  const editRef = useRef(null)

// Debug
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


//Debug End
  const editClickHandler = () => {
    setShowEdit({
      ...showEdit,
      show:false
    })
  }

  return (


    <Form className={classes["edit-form"]} onClick={editClickHandler}>
      <div style={position}>
        <div className={classes["edit-textarea"]}>
        <Form.Control 
          style={textareaSize}
          rows="3" 
          as="textarea" 
          ref={editRef} 
          onClick={ (event) => {event.stopPropagation()} }/>
        </div>
      </div>
    </Form>
      
  );
};

export default Edit