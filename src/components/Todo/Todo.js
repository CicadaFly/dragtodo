import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCheckSquare, faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons'
import classes from "../../styles/app.module.scss"
import { ItemTypes } from '../../ReactDnD/Itemtype'; 
import { useDrag, useDrop } from 'react-dnd';


const Todo = ({listId, todoId, name, finish, setShowEdit, editFinish, moveTodo})=>{
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.TODO,
    item: {olistId: listId, otodoId: todoId},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  const [, drop] = useDrop(() => ({
    accept: ItemTypes.TODO,
    hover: () => {
      
    },
    drop: (item) => {
      const {olistId, otodoId} = item;
      const elistId = listId;
      const etodoId = todoId;
        if (olistId === elistId) {
          if (otodoId === etodoId) { return }}
      moveTodo(elistId,etodoId,olistId,otodoId)
    },

  }))
  const targetRef = useRef(null)
  const [editIsShow, setEditIsShow] = useState(false)
  const showEditHandler = ()=> { setEditIsShow(true) }
  const offEditHandler = ()=> { setEditIsShow(false) }
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
          listId: listId,
          todoId: todoId,
          value: name
        }
        )
  }

  const finishCheck = (event)=>{
    event.preventDefault()
          setShowEdit({
          listId: listId,
          todoId: todoId,
          })
          let finishE = !finish
          editFinish(listId, todoId, finishE)
  }

  const finishYet = (
    !finish ? 
    (<Button className='m-1' size='sm' title="Target finshed!" onClick={finishCheck}>
    <FontAwesomeIcon icon={faCheckSquare} />
      </Button>) :
    (<Button className='m-1' size='sm' title="Target isn't finished yet" onClick={finishCheck}>
    <FontAwesomeIcon icon={faArrowRotateLeft} />
      </Button>
    )
  )
  drag(drop(targetRef))

  const testhand = () => { console.log(listId, todoId)}
  return(
  
    <div className= {`${isDragging ? classes.tododrag : classes.todo} my-1 p-1 rounded text-wrap `}
          onMouseEnter={showEditHandler}
          onMouseLeave={offEditHandler}
          ref = {targetRef} >
      { !finish ? <>{name}</> : <s>{name}</s>}
      {editIsShow && (<>
        <Button variant='success' className='m-1' size='sm' title="Edit" onClick={clickEditHandler}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </Button> 
         {finishYet} </>
        )
      }
    </div>
  
  )
}



export default Todo

