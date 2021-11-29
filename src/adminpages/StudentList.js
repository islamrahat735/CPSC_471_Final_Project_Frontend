import React from 'react'
import Table from 'react-bootstrap/Table'
import './Astyles/childlist.css'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {useHistory} from 'react-router-dom'
export default function StudentList() {
    const history = useHistory();

    function enrollChild(){   
        history.push("/Admin/ChildEnroll")
    }

    return (
        <div>
             <div>
            <div  className = "clistheader">
                <h1>List of Students</h1>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div>
                <Table striped bordered hover variant="primary">
                <thead>
                    <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>ID</th>
                    <th>Program</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Frank</td>
                    <td>Little</td>
                    <td>111111</td>
                    <td>Math</td>
                    <td style ={{textAlign:'center'}}><Button variant="primary" size="sm">Edit </Button></td>
                    </tr>
                    <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>222222</td>
                    <td>English</td>
                    <td style ={{textAlign:'center'}}><Button variant="primary" size="sm">Edit </Button></td>
                    </tr>
                    <tr>
                    <td>Clarke</td>
                    <td>Turner</td>
                    <td>333333</td>
                    <td>Social Studies</td>
                    <td style ={{textAlign:'center'}}><Button variant="primary" size="sm">Edit </Button></td>
                    </tr>
                    <tr>
                    <td>Maggie</td>
                    <td>Simpson</td>
                    <td>444444</td>
                    <td>Science</td>
                    <td style ={{textAlign:'center'}}><Button variant="primary" size="sm">Edit </Button></td>
                    </tr>
                </tbody>
                </Table>
            </div>
                    <div className = "addChildtBtn">
                        <Row>
                            <Button variant="primary" size="lg" onClick = {enrollChild}>
                                Add Child
                            </Button>
                        </Row>
                    </div>
                    <div className = "removeChildBtn">
                        <Row>
                            <Button variant="secondary" size="lg">
                                Remove Child
                            </Button>
                        </Row>
                    </div>
        </div>
        </div>
    )
}
