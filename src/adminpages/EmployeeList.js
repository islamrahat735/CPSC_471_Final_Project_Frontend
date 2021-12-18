import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {useHistory} from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Astyles/employeelist.css'
import { Cancel } from '@material-ui/icons';

export default function EmployeeList() {
    const history = useHistory();
    const [teacherList,setTeacherList] = useState([]);
    const [newStatus, setNewStatus] = useState(false);
    function enrollTeacher(){   
        history.push("/Admin/EmployeeAdd")
    }

    useEffect(()=> {
        fetchInfo();
        setNewStatus(false);
    }, [newStatus])

    async function fetchInfo()
    {
        const response = await fetch(`http://localhost:3001/api/teacher/full`);
        const rep = await response.json();
        setTeacherList(rep);
    }

    function deleteTeacher(eid)
    {
        fetch(`http://localhost:3001/api/employee/${eid}`, {
            method:'DELETE'
        })
        .then(() => setNewStatus(true))
        .catch((error) => {
            console.log("Hi")
            console.error('Error:', error)
          })
    }

    return (
        <div>
            <div  className = "emheader">
                <h1>List of Teachers</h1>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div>
                <Table striped bordered hover variant="primary">
                <thead>
                    <tr>
                    <th>Employee ID</th>
                    <th>Username</th>
                    <th>Fname</th>
                    <th>Lname</th>
                    <th>Phone #</th>
                    <th>Address</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {teacherList.map((teacher) => 
                    <tr>
                        <td>{teacher.E_Id}</td>
                        <td>{teacher.Username}</td>
                        <td>{teacher.Fname}</td>
                        <td>{teacher.Lname}</td>
                        <td>{teacher.Phone_num}</td>
                        <td>{teacher.Address}</td>
                        <td><Button variant="danger" onClick={()=>deleteTeacher(teacher.E_Id)}><Cancel /></Button>{' '}</td>
                    </tr>
                    )}  
                </tbody>
                </Table>
            </div>
                    <div className = "addEmpBtn">
                        <Row>
                            <Button variant="primary" size="lg" onClick = {enrollTeacher}>
                                Create Teacher
                            </Button>
                        </Row>
                    </div>
        </div>
    )
}
