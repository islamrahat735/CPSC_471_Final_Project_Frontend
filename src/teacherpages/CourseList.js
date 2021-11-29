import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Table from 'react-bootstrap/Table'

export default function CourseList() {
    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Classes
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item> Math </Dropdown.Item>
                    <Dropdown.Item> Science </Dropdown.Item>
                    <Dropdown.Item> English </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <h4>You Chose: Math</h4>

            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>

                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Larry</td>
                        <td>Bird</td>
                    </tr>
                </tbody>
            </Table>

        </div>

        
        
    )
}
