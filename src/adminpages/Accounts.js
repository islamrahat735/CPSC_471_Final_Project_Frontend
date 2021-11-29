import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {useHistory} from 'react-router-dom'
import './Astyles/employeelist.css'

export default function Accounts() {
    const history = useHistory();
    function enrollParent(){   
        history.push("/Admin/EmployeeAdd")
    }

    return (
        <div>
            <div  className = "emheader">
                <h1>List of Accounts</h1>
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
                    <th>Access</th>
                    <th>Password</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Mike</td>
                    <td>Ross</td>
                    <td>239101</td>
                    <td>Teacher</td>
                    <td>abcdefg</td>
                    <td style ={{textAlign:'center'}}><Button variant="primary" size="sm">Edit </Button></td>
                    </tr>
                    <tr>
                    <td>Jill</td>
                    <td>Johnson</td>
                    <td>785276</td>
                    <td>Admin</td>
                    <td>gfdrt4da</td>
                    <td style ={{textAlign:'center'}}><Button variant="primary" size="sm">Edit </Button></td>
                    </tr>
                    <tr>
                    <td>Jane</td>
                    <td>Doe</td>
                    <td>234567</td>
                    <td>Parent</td>
                    <td>343ffh3sd</td>
                    <td style ={{textAlign:'center'}}><Button variant="primary" size="sm">Edit </Button></td>
                    </tr>
                </tbody>
                </Table>
            </div>
        </div>
    )
}
