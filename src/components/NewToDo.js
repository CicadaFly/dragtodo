import React, { useState, useRef, useEffect } from "react";
import { Form } from "react-bootstrap";

const NewToDo = (props) => {
  const focusNew = useRef(null)

  useEffect(() => {
    focusNew.current.focus();
  }, []);

  const [inputHeight, setInputHeight] = useState(75)
  const textbox = { height: `${inputHeight}px` ,resize:"none"}
  const autoSize =()=>{
    setInputHeight(focusNew.current.scrollHeight+2);
  }
  const addNewToDoHandler=(event)=>{
    if (event.target.value.trim()) {
      props.addToDo(props.listId, event.target.value)
    }
    event.target.value = ""
    props.blur();
  }

return (
  <Form>
    <Form.Control as="textarea" 
                  ref={focusNew} 
                  style={textbox}
                  onBlur={addNewToDoHandler}
                  onKeyDown={(e)=>{
                    if (e.key === "Enter") {addNewToDoHandler()}
                  }}
                  onInput={autoSize}
                  >
                  </Form.Control>
  </Form>
)
}

export default NewToDo