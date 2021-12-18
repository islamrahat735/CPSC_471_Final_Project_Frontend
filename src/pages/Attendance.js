import React from 'react';
import './styles/attendance.css';
import {useSelector} from 'react-redux'
import {Table,Row,Col} from 'react-bootstrap'
import {useState,useEffect} from 'react'
function Attendance()
{
  const childID = useSelector((state) => state.childID);
  const [attendanceList,setAttendanceList] = useState([]);

  useEffect(()=> {
    fetchInfo();
  },[])


  async function fetchInfo()
  {
    const attendanceResponse = await fetch(`http://localhost:3001/api/childAttendsClass/${childID}`);
    const attendanceRep = await attendanceResponse.json();
    setAttendanceList(attendanceRep);
  }


  return (
    <div>
      <h1 style = {{marginLeft:500, marginTop:50}}>Attendance</h1>
      <div style = {{marginTop:50}}>
      <Table striped bordered hover variant="primary" style = {{borderColor:'black'}}>
        <thead>
          <tr>
          <th>Class Name</th>
          <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {attendanceList.map((item) =>
          <tr key={item.C_Id}>
            <td>{item.Class_name}</td>
            <td>{item.Date}</td>
          </tr>
          )}
        </tbody>
      </Table>
      </div>
    </div>
  )
}

export default Attendance;