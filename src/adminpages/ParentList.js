import React from 'react'
import Table from 'react-bootstrap/Table'
import './Astyles/parentlist.css'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {useHistory} from 'react-router-dom'
export default function ParentList() {
    const history = useHistory();
    function enrollParent(){   
        history.push("/Admin/ParentEnroll")
    }

    return (
        <div>
            <div  className = "plistheader">
                <h1>List of Parents</h1>
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
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Stuart</td>
                    <td>Little</td>
                    <td>123456</td>
                    <td style ={{textAlign:'center'}}><Button variant="primary" size="sm">Edit </Button></td>
                    </tr>
                    <tr>
                    <td>Jane</td>
                    <td>Doe</td>
                    <td>234567</td>
                    <td style ={{textAlign:'center'}}><Button variant="primary" size="sm">Edit </Button></td>
                    </tr>
                    <tr>
                    <td>Timmy</td>
                    <td>Turner</td>
                    <td>345678</td>
                    <td style ={{textAlign:'center'}}><Button variant="primary" size="sm">Edit </Button></td>
                    </tr>
                    <tr>
                    <td>Bart</td>
                    <td>Simpson</td>
                    <td>456789</td>
                    <td style ={{textAlign:'center'}}><Button variant="primary" size="sm">Edit </Button></td>
                    </tr>
                </tbody>
                </Table>
            </div>
                    <div className = "addParentBtn">
                        <Row>
                            <Button variant="primary" size="lg" onClick = {enrollParent}>
                                Add Parent
                            </Button>
                        </Row>
                    </div>
                    <div className = "removeParentBtn">
                        <Row>
                            <Button variant="secondary" size="lg">
                                Remove Parent
                            </Button>
                        </Row>
                    </div>
        </div>
    )
}
