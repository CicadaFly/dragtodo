import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarr from './Navbarr';
import List from './List'
import {Container, Row } from "react-bootstrap";


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
  const [lists, setLists] = useState(dummyData)
  return (
<span>
 <Navbarr></Navbarr>
 <Container fluid="sm" className="board p-1">
    <Row className="m-0">
      {lists.map((list, index)=>(
        <List key={index} {...list} />
      ))}
    </Row>
    
  </Container>

 </span>
  );


}

export default Dragtodo