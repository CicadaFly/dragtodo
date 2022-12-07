import React, { useState } from "react";
import classes from "../../styles/app.module.scss";


const ListTitle = ({listId, title, editListTitle}) => {

  const titleEditHandler = (props)=>{
    if (props.target.value.trim()) {
      editListTitle(listId, props.target.value.trim());
    } else {
      props.target.value = title;
    }
  }
 

  return (
    <>
    <div className={classes.title}>
      <input type="text" 
             id={listId}
             value={title}
             placeholder="Title name" 
             onChange={titleEditHandler} >
      </input>
    </div>
    </>
  )
};

export default ListTitle