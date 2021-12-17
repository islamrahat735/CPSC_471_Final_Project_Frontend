import React from 'react'
import Button from 'react-bootstrap/Button'
import {useHistory} from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import './Astyles/Programs.css'
import { useEffect, useState } from 'react'
import { Cancel } from '@material-ui/icons';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Programs() {
    const history = useHistory();
    const [programList, setProgramList] = useState([]);
    const [newStatus,setNewStatus] = useState(false);

    var Pname = '';
    var PFees = '';
    var PAge = '';

    function enrollProgram(){   
        history.push("/Admin/ProgramCreation")
    }

    useEffect(() => {
        fetchPrograms();
        setNewStatus(false);
    },[newStatus])

    async function fetchPrograms()
    {
        const programRespose = await fetch(`http://localhost:3001/api/program/`);
        const progRep = await programRespose.json();
        setProgramList(progRep);
    }

    function deleteProgram(name)
    {
        fetch(`http://localhost:3001/api/program/${name}`, {
            method:'DELETE'
        })
        .then(() => setNewStatus(true))
        .catch((error) => {
            console.error('Error:', error)
          })
    }

    function updateProgram()
    {
        let updatedInfo = 
        {
            name:Pname,
            fees:PFees,
            ageGroup:PAge
        }
        console.log(updatedInfo)
        fetch('http://localhost:3001/api/program/', {
            method:'PUT',
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(updatedInfo)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        setNewStatus(true);
    }

    function saveName(val)
    {
        Pname = val.target.value;
    }

    function saveFees(val)
    {
        PFees = val.target.value;
    }

    function saveAge(val)
    {
        PAge = val.target.value;
    }

    return (
        <div>
             <div>
            <div  className = "Proglistheader">
                <h1>List of Programs</h1>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div>
                <Table striped bordered hover variant="primary">
                <thead>
                    <tr>
                    <th style ={{textAlign:'center'}}>Program Names</th>
                    <th style ={{textAlign:'center'}}>Fees</th> 
                    <th style ={{textAlign:'center'}}>Age Group</th>
                    <th style ={{textAlign:'center'}}>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {programList.map((program) => 
                    <tr key = {program.Name} style = {{textAlign:'center'}}>
                        <td>{program.Name}</td>
                        <td>{program.Fees}</td>
                        <td>{program.Age_Group}</td>
                        <td style = {{width:20}}><Button variant="danger" onClick = {()=> deleteProgram(program.Name)}><Cancel /></Button>{' '}</td>
                    </tr>
                    )}
                </tbody>
                </Table>
            </div>
                    <div className = "addProgramtBtn">
                        <Row>
                            <Button variant="primary" size="lg" onClick = {enrollProgram}>
                                Add Program
                            </Button>
                        </Row>
                    </div>

                    <div>
                        <h1  style={{marginTop:70, marginLeft:460}}>Update Programs</h1>
                        <Form style = {{marginLeft:300, marginTop:30}}>
                        <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Program Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter Program Name" onChange={saveName}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Fees</Form.Label>
                        <Form.Control type="email" placeholder="Enter Fees" onChange={saveFees}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Age Group</Form.Label>
                        <Form.Control type="email" placeholder="Enter Age Group" onChange={saveAge}/>
                        </Form.Group>
                        </Row>
                        </Form>
                        <div className = "updateProgramBtn">
                        <Row>
                            <Button variant="primary" size="lg" onClick = {updateProgram}>
                                Update Program
                            </Button>
                        </Row>
                        </div>

                    </div>
        </div>
        </div>
    )
}
