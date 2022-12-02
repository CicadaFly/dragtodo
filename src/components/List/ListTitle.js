import React, { useState } from "react";
import classes from "../../styles/app.module.scss";


const ListTitle = ({listId, title, editListTitle}) => {
  const [fTitle, setFTitle] = useState("teting")
  const titleEditHandler = (props)=>{
    const afterD = props.target.value
    setFTitle(afterD)
  }
  return (
    <>
    <div className={classes.title}>{title}</div>
    <div className={classes.title}>
      <input type="text" 
             value={fTitle}
             placeholder="Title name" 
             onChange={titleEditHandler}>
      </input>
    </div>
    </>
  )
};

export default ListTitle