import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './Astyles/FieldTripCreator.css'
export default function FieldTripCreator() {
    return (
        <div>
            <div >
            <h1 className = "FieldHeading">
            Add Field Trip
            </h1> 
            </div>
            <div className = "FieldForm">
             <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Location</Form.Label>
                     <Form.Control type="email" placeholder="Enter Location" />
                    </Form.Group>
                </Row>
                <Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Date</Form.Label>
                     <Form.Control type="email" placeholder="Enter Date" />
                    </Form.Group>
                </Row>
              </Form>
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
