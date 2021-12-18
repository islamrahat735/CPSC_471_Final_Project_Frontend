import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {useHistory} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Cancel } from '@material-ui/icons';
import { ClassNames } from '@emotion/react'
export default function Classes() {
    const [classList,setClassList] = useState([]);
    const [newStatus, setNewStatus] = useState(false);
    const history = useHistory();

    useEffect(()=> {
        fetchInfo();
        setNewStatus(false);
    },[newStatus])


    function deleteClass(cid)
    {
        fetch(`http://localhost:3001/api/class/${cid}`, {
            method:'DELETE'
        })
        .then(() => setNewStatus(true)) 
        .catch((error) => {
            console.log("Hi")
            console.error('Error:', error)
          })
    }

    async function fetchInfo()
    {
        const response = await fetch(`http://localhost:3001/api/class/`);
        const rep = await response.json();
        setClassList(rep);
    }
    
    function addClass()
    {
        history.push('/CreateClass');
    }
    return (
        <div>
            <div>
                <h1 style = {{marginLeft:540, marginTop:30}}>List of Classes</h1>
            </div>

        <div>
            <Table striped bordered hover variant="primary" style={{borderColor:'black'}}>
                <thead>
                    <tr>
                    <th>Class ID</th>
                    <th>Class Name</th>
                    <th>Program Name</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Teacher ID</th>
                    <th style={{width:20}}>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {classList.map((course)=>
                <tr>
                    <td>{course.C_Id}</td>
                    <td>{course.Class_name}</td>
                    <td>{course.Prog_name}</td> 
                    <td>{course.startTime}</td>
                    <td>{course.endTime}</td>
                    <td>{course.T_Id}</td>
                    <td><Button variant="danger" onClick={()=>deleteClass(course.C_Id)}><Cancel /></Button>{' '}</td>
                </tr>
                )}
                </tbody>
            </Table>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
                <div style={{marginLeft:350}}>       
                <Row >
                    <Button variant="primary" size="lg" onClick = {addClass}>
                        Create Class
                    </Button>
                </Row>   
                </div>
        </div>
    )
}
