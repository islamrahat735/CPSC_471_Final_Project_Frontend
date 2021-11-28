import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './Astyles/ChildInfo.css'
export default function ChildEnroll() {
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
      <Form.Control type="email" placeholder="Enter First Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Last Name</Form.Label>
      <Form.Control  placeholder="Enter Last Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Parent ID</Form.Label>
      <Form.Control  placeholder="Enter Parent ID" />
    </Form.Group>
  </Row>

  <Row>
  <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Date Of Birth</Form.Label>
      <Form.Control  placeholder="DD/MM/YY" />
    </Form.Group>
  <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Program</Form.Label>
      <Form.Control type="email" placeholder="Enter First Name" />
    </Form.Group>
  </Row>
  </Form>
  <br></br>
  <div className="d-grid gap-2">
  <Button variant="primary" size="lg">
    Submit
  </Button>
    </div>
  </div>
    </div>
    )
}
