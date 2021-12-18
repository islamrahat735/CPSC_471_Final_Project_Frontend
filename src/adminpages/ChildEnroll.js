import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './Astyles/ChildInfo.css'
import {useState} from 'react'
import {useHistory} from 'react-router-dom'

export default function ChildEnroll() {
  var Fname = '';
  var Lname = '';
  var PID = '';
  var DOB = '';
  var program = '';
  var address = '';
  const [mrObj,setmr] = useState([]);
  const history = useHistory();

  function saveFname(val)
  {
    Fname = val.target.value;
    //console.log(Fname);
  }

  function saveLname(val)
  {
    Lname = val.target.value;
    //console.log(Lname);
  }

  function savePID(val)
  {
    PID = val.target.value;
    //console.log(PID);
  }

  function saveDOB(val)
  {
    DOB = val.target.value;
    //console.log(DOB);
  }

  function saveProgram(val)
  {
    program = val.target.value;
    //console.log(program);
  }

  function saveAddress(val)
  {
    address = val.target.value;
  }

  function addChild()
  {

    let newRecord = 
    {
      covidStatus: "negative"
    }

    fetch(`http://localhost:3001/api/medicalRecord`, {
      method:'POST',
      headers: {"Content-Type": "application/json"},
      body:JSON.stringify(newRecord)
    })
    .then(response => response.json())
    .then(data => {
      let newChildInfo = {
        pid: PID,
        prog: program,
        address: address,
        fName: Fname,
        lName: Lname,
        status: "active",
        dob: DOB,
        mrid: data[0].MR_Id
      }

      
    fetch(`http://localhost:3001/api/child/`, {
      method:'POST',
      headers: {"Content-Type": "application/json"},
      body:JSON.stringify(newChildInfo)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    })
      console.log(mrObj);
    })
    .catch((error) => {
      console.error('Error:', error);
    })

    console.log(mrObj);

  }

  function redirectToAdminDashboard()
  {
    history.push('/AdminDashboard')
  }

    return (
        <div>
            <div className = "ChildHeading">
                <h1>Child Enrollment</h1>
            </div>
            <div className = "ChildForm">
            <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="email" placeholder="Enter First Name" onChange={saveFname}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Last Name</Form.Label>
      <Form.Control  placeholder="Enter Last Name" onChange={saveLname}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Parent ID</Form.Label>
      <Form.Control  placeholder="Enter Parent ID" onChange={savePID}/>
    </Form.Group>
  </Row>

  <Row>
  <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Date Of Birth</Form.Label>
      <Form.Control  placeholder="YYYY-MM-DD" onChange={saveDOB}/>
    </Form.Group>
  <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Program</Form.Label>
      <Form.Control type="email" placeholder="Enter First Name" onChange={saveProgram}/>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Address</Form.Label>
      <Form.Control type="email" placeholder="Enter Address" onChange={saveAddress}/>
    </Form.Group>
  </Row>
  </Form>
  <br></br>
  <div className="d-grid gap-2">
  <Button variant="primary" size="lg" onClick = {()=> addChild()}>
    Submit
  </Button>
    </div>
    <br></br><br></br><br></br>
    <div style={{textAlign:'center'}}>
    <Button variant="primary" size="lg" onClick = {() => redirectToAdminDashboard()}>
      Go Back
    </Button>
    </div>
  </div>
    </div>
    )
}
