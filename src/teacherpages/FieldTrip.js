import React from 'react'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {useHistory} from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import './Tstyles/fieldtriplist.css'

export default function FieldTrip() {
    return (
        <div>
            <div  className = "fieldheader">
                <h1>List of Field Trips</h1>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div>
                <Table striped bordered hover variant="primary">
                <thead>
                    <tr>
                    <th>Location</th>
                    <th>Date</th>
                    <th style ={{textAlign:'center'}}></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Zoo</td>
                    <td>2022-01-25</td>
                    <td style ={{textAlign:'center'}}><Button variant="primary" size="sm">Edit </Button></td>
                    </tr>
                    <tr>
                    <td>Museum</td>
                    <td>2022-02-14</td>
                    <td style ={{textAlign:'center'}}><Button variant="primary" size="sm">Edit </Button></td>
                    </tr>
                    <tr>
                    <td>Game Room</td>
                    <td>2022-03-01</td>
                    <td style ={{textAlign:'center'}}><Button variant="primary" size="sm">Edit </Button></td>
                    </tr>
                </tbody>
                </Table>
            </div>
                    <div className = "addFieldBtn">
                        <Row>
                            <Button variant="primary" size="lg" onClick = {()=>{ }}>
                                Add Field Trip
                            </Button>
                        </Row>
                    </div>
                    <div className = "removeFieldBtn">
                        <Row>
                            <Button variant="secondary" size="lg">
                                Remove Field Trip
                            </Button>
                        </Row>
                    </div>
        </div>
    )
}
