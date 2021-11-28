import React from 'react';
import './styles/attendance.css';
import * as ReactBootStrap from "react-bootstrap";
const Attendance=()=>{
    const students=[
      {Class:"", Date:"", attendance:""},
      {Class:"", Date:"", attendance:""},
      {Class:"", Date:"", attendance:""},
      {Class:"", Date:"", attendance:""},
      {Class:"", Date:"", attendance:""},
      {Class:"", Date:"", attendance:""},
      {Class:"", Date:"", attendance:""},
      {Class:"", Date:"", attendance:""},
      {Class:"", Date:"", attendance:""},
      {Class:"", Date:"", attendance:""},
      {Class:"", Date:"", attendance:""},
      {Class:"", Date:"", attendance:""},
      {Class:"", Date:"", attendance:""},
      {Class:"", Date:"", attendance:""},
      {Class:"", Date:"", attendance:""},
      {Class:"", Date:"", attendance:""},
      {Class:"", Date:"", attendance:""},
      {Class:"", Date:"", attendance:""},
      
    ]
    const renderStudent=(students,index)=>{
      return(
        <tr key={index}> 
        <td>{students.Class}</td>
        <td>{students.Date}</td>
        <td>{students.attendance}</td>
        </tr>
      )
    }
  return (
        <div className="Attendance">
        <ReactBootStrap.Table striped bordered hover>
  <thead>
    <tr>
      <th>Class</th>
      <th>Date</th>
      <th>Attendance</th>
    </tr>
  </thead>
  <tbody>
  {students.map(renderStudent)}
      
  </tbody>
</ReactBootStrap.Table>
        </div>
    );
}

export default Attendance;