import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {useHistory} from 'react-router-dom'
import './Astyles/employeelist.css'
export default function EmployeeList() {
    const history = useHistory();
    function enrollParent(){   
        history.push("/Admin/EmployeeAdd")
    }

    return (
        <div>
            <div  className = "emheader">
                <h1>List of Employees</h1>
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
                    <th>Role</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Mike</td>
                    <td>Ross</td>
                    <td>239101</td>
                    <td>Teacher</td>
                    <td style ={{textAlign:'center'}}><Button variant="primary" size="sm">Edit </Button></td>
                    </tr>
                </tbody>
                </Table>
            </div>
                    <div className = "addEmpBtn">
                        <Row>
                            <Button variant="primary" size="lg" onClick = {enrollParent}>
                                Add Employee
                            </Button>
                        </Row>
                    </div>
                    <div className = "removeEmpBtn">
                        <Row>
                            <Button variant="secondary" size="lg">
                                Remove Employee
                            </Button>
                        </Row>
                    </div>
        </div>
    )
}
