import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './Astyles/EmployeeAccInfo.css'
export default function EmployeeEnroll() {
    return (
        <div>
            <h1 className = "empHeading">Employee Account Registration</h1>
            <div className = "employeeForm">
        <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="email" placeholder="Enter First Name" />
        </Form.Group>
    
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control  placeholder="Enter Last Name" />
        </Form.Group>
    
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control  placeholder="Username" />
        </Form.Group>
      </Row>
        <Row>
      <Form.Group as = {Col}className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>
    
      <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
            </Row>
    
        <br></br>
        <div className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Submit
      </Button>
        </div>
    </Form>
            </div>
            </div>
        )
}
