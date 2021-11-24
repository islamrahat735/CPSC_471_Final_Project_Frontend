import React from 'react';
import './styles/attendance.css';
import * as ReactBootStrap from "react-bootstrap";
const Attendance=()=>{
    const students=[
      {child:"Asma", age:"20", class:"471"},
      {child:"Aninda", age:"?", class:"471"},
      {child:"Rahat", age:"?", class:"471"},
      {child:"Haniya", age:"19", class:"471"},
      {child:"Alhajj", age:"50+", class:"471"},
    ]
    const renderStudent=(students,index)=>{
      return(
        <tr key={index}> 
        <td>{students.child}</td>
        <td>{students.age}</td>
        <td>{students.class}</td>
        </tr>
      )
    }
  return (
        <div className="Attendance">
        <ReactBootStrap.Table striped bordered hover>
  <thead>
    <tr>
      <th>Child</th>
      <th>Age</th>
      <th>Class</th>
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