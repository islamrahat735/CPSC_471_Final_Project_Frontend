import React from 'react'
import Table from 'react-bootstrap/Table'
import './Astyles/childlist.css'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {useHistory} from 'react-router-dom'
import { Cancel } from '@material-ui/icons';
import { childIDAC } from '../state/index';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useEffect, useState } from 'react'

export default function StudentList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [childList, setChildList] = useState([]);
    const [newStatus, setNewStatus] = useState(false);
    const childID = useSelector((state) => state.childID);
    const {saveChildID} = bindActionCreators(childIDAC, dispatch);

    function enrollChild(){   
        history.push("/Admin/ChildEnroll")
    }

    useEffect(() => {
        fetchInfo();
    },[newStatus])

    async function fetchInfo()
    {
        const respose = await fetch(`http://localhost:3001/api/child/`);
        const rep = await respose.json();
        setChildList(rep);
    }

    function deleteChild(id)
    {
        fetch(`http://localhost:3001/api/child/${id}`, {
            method:'DELETE'
        })
        .then(() => setNewStatus(true))
        .catch((error) => {
            console.log("Hi")
            console.error('Error:', error)
          })
    }

    function displayMoreInfo(id)
    {
        saveChildID(id);
        history.push('/moreInfo')
    }

    return (
        <div style = {{marginTop:30}}>
             <div>
            <div  className = "clistheader">
                <h1>List of Students</h1>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div>
                <Table striped bordered hover variant="primary" style = {{borderColor:'black'}}>
                <thead style = {{textAlign:'center'}}>
                    <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>ID</th>
                    <th>Program</th>
                    <th>Remove</th>
                    <th>More Info</th>
                    </tr>
                </thead>
                <tbody style = {{textAlign:'center'}}>
                    {childList.map((child) =>
                    <tr key = {child.Child_Id}>
                        <td>{child.Fname}</td>
                        <td>{child.Lname}</td>
                        <td>{child.Child_Id}</td>
                        <td>{child.Prog_name}</td>
                        <td style = {{width:20}}><Button variant="danger" onClick = {() => deleteChild(child.Child_Id)}><Cancel /></Button>{' '}</td>
                        <td style = {{width:20}}><Button variant="primary" onClick = {() => displayMoreInfo(child.Child_Id)}>Info</Button>{' '}</td>
                    </tr>
                    )}
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
        </div>
        </div>
    )
}
