import React from 'react'
import './Astyles/ProgramCreation.css'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
export default function ProgramCreation() {
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
      <Form.Control type="email" placeholder="Enter Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Age Group</Form.Label>
      <Form.Control  placeholder="Example: 6-8" />
    </Form.Group>
  </Row>
  <br></br>
  <br></br>
  <Row>
  <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Class Name 1</Form.Label>
      <Form.Control type="email" placeholder="Enter Class" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Class Name 2</Form.Label>
      <Form.Control type="email" placeholder="Enter Class" />
    </Form.Group>
  </Row>
  <br></br>
  <br></br>
  <Row>
  <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Class Name 3</Form.Label>
      <Form.Control type="email" placeholder="Enter Class" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Class Name 4</Form.Label>
      <Form.Control type="email" placeholder="Enter Class" />
    </Form.Group>
  </Row>
  <br></br>
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
