import React from 'react'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {useHistory} from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import './Astyles/Programs.css'
export default function Programs() {
    const history = useHistory();

    function enrollProgram(){   
        history.push("/Admin/ProgramCreation")
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
                    <th style ={{textAlign:'center'}}></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td style ={{textAlign:'center'}}>Math</td>
                    <td style ={{textAlign:'center'}}><Button variant="primary" size="sm">Edit </Button></td>
                    </tr>
                    <tr>
                    <td style ={{textAlign:'center'}}>Science</td>
                    <td style ={{textAlign:'center'}}><Button variant="primary" size="sm">Edit </Button></td>
                    </tr>
                    <tr>
                    <td style ={{textAlign:'center'}}>Social Studies</td>
                    <td style ={{textAlign:'center'}}><Button variant="primary" size="sm">Edit </Button></td>
                    </tr>
                    <tr>
                    <td style ={{textAlign:'center'}}>English</td>
                    <td style ={{textAlign:'center'}}><Button variant="primary" size="sm">Edit </Button></td>
                    </tr>
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
                    <div className = "removeProgramBtn">
                        <Row>
                            <Button variant="secondary" size="lg">
                                Remove Program
                            </Button>
                        </Row>
                    </div>
        </div>
        </div>
    )
}
