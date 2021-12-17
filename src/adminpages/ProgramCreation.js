import React from 'react'
import './Astyles/ProgramCreation.css'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {useHistory} from 'react-router-dom'
export default function ProgramCreation() {
  var pname = '';
  var pfees = '';
  var page = '';
  const history = useHistory();

  function saveName(val)
  {
    pname = val.target.value;
  }

  function saveFees(val)
  {
    pfees = val.target.value;
  }


  function saveAge(val)
  {
    page = val.target.value;
  }

  function addProgram()
  {
    let newProgramInfo = {
      name:pname,
      fees:pfees,
      ageGroup:page
    }

    fetch(`http://localhost:3001/api/program/`, {
      method:'POST',
      headers: {"Content-Type": "application/json"},
      body:JSON.stringify(newProgramInfo)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })

    history.push('/AdminDashboard')
  }

    return (
        <div>
            <div>
            <h1 className = "ProgramHeading">
            Create Program
            </h1> 
            </div>
    <div className = "ProgramForm">
            <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Program Name</Form.Label>
      <Form.Control type="email" placeholder="Enter Name" onChange = {saveName}/>
    </Form.Group>
  </Row>
  <br></br>
  <br></br>
  <Row>
    
  <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Fees</Form.Label>
      <Form.Control  placeholder="Enter Fees" onChange={saveFees}/>
    </Form.Group>

  <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Age Group</Form.Label>
      <Form.Control type="email" placeholder="Age Group" onChange={saveAge}/>
    </Form.Group>
  </Row>
  <br></br>
  <br></br>
  <div className="d-grid gap-2">
  <Button variant="primary" size="lg" onClick ={addProgram}>
    Submit
  </Button>
    </div>
  </div>

        </div>
    )
}
