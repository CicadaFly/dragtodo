import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import classes from "../styles/app.module.scss"


const Todo = ({name, setShowEdit})=>{
  const targetRef = useRef(null)
  const [editIsShow, setEditIsShow] = useState(false)
  const showEditHandler = ()=> { setEditIsShow(!editIsShow) }
  const offEditHandler = ()=> { setEditIsShow(!editIsShow) }
  const clickEditHandler = (event) => {
    event.preventDefault()
    const { top, left, width } = targetRef.current.getBoundingClientRect();
          setShowEdit({
          show: true,  
          dimensions: { 
            top: top,
            left: left,
            width: width,
          },
          value: name 
        });
  }
  return(
    <div className= {`${classes.todo} my-1 p-1 rounded`}
          onMouseEnter={showEditHandler}
          onMouseLeave={offEditHandler}
          ref = {targetRef}>
      {name}
      {editIsShow && (
        <Button variant='success' className='m-1' size='sm' onClick={clickEditHandler}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </Button> )
      }     
    </div>
  )
}



export default Todo