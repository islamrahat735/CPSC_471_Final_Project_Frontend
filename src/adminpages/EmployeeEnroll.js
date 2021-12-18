import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './Astyles/EmployeeAccInfo.css'
export default function EmployeeEnroll() {
  var fname = '';
  var lname = '';
  var phone = '';
  var address = '';
  var user = '';

  
  function saveFname(val)
  {
    fname = val.target.value;
  }

  function saveLname(val)
  {
    lname = val.target.value;
  }

  function savePhone(val)
  {
    phone = val.target.value;
  }

  function saveAddress(val)
  {
    address = val.target.value;
  }

  function saveUser(val)
  {
    user = val.target.value;
  }

  function createTeacher(user)
  {
    let employeeInfo = {
      Address: address,
      Fname: fname,
      Lname: lname,
      Phone_num: phone, 
      MR_Id:null
    }
    console.log(employeeInfo);
    fetch(`http://localhost:3001/api/employee/`, { //make employee
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body:JSON.stringify(employeeInfo)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let teacherInfo = {
          E_Id: data[0].E_Id,
          Username: user
        }
        console.log(teacherInfo);
        fetch(`http://localhost:3001/api/teacher/`, { //make teacher
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify(teacherInfo)
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        })
      })
      .catch((error) => {
        console.error('Error:', error);
      })


  }

    return (
        <div>
            <h1 className = "empHeading">Teacher Account Registration</h1>
            <div className = "employeeForm">
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
          <Form.Label>Phone #</Form.Label>
          <Form.Control  placeholder="Username" onChange={savePhone}/>
        </Form.Group>
      </Row>
        <Row>
      <Form.Group as = {Col}className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" onChange={saveAddress}/>
      </Form.Group>
      <Form.Group as = {Col}className="mb-3" controlId="formGridAddress1">
        <Form.Label>Username</Form.Label>
        <Form.Control placeholder="Username" onChange={saveUser}/>
      </Form.Group>
            </Row>
        <br></br>
        <div className="d-grid gap-2">
      <Button variant="primary" size="lg" onClick={() => createTeacher(user)}>
        Submit
      </Button>
        </div>
    </Form>
            </div>
            </div>
        )
}
