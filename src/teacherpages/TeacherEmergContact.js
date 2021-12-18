import React from 'react'
import { useState, useEffect } from 'react'
import {useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { Cancel } from '@material-ui/icons';
import {useHistory} from 'react-router-dom'

export default function TeacherEmergContact() {

    const teacherID = useSelector((state)=>state.teacherID);
    const [contact, setContact] = useState([]);
    const history = useHistory();
    const [newStatus, setNewStatus] = useState(false);

    useEffect(() => {
        fetchInfo();
        setNewStatus(false);
      }, [newStatus])

    async function fetchInfo()
    {
    //console.log(teacherID)
    const response = await fetch(`http://localhost:3001/api/employeeEmergencyContact/employee/${teacherID}`);
    const rep = await response.json();
    //console.log(rep);
    setContact(rep);
    //console.log(contact);
    }

    function deleteContactRow(pno, teacher)
    {
      fetch(`http://localhost:3001/api/employeeEmergencyContact/specific/${pno}/${teacher}`,{
        method:'DELETE'
      })
      .then(() => setNewStatus(true));
    }

    function addContact()
    {
        history.push('/CreateTeacherContact');
    }

    return (
        <div style = {{marginTop:30}}>
            <Table striped bordered style = {{borderColor:'black'}}>
                <thead style = {{textAlign:'center'}}>
                <tr>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Relation</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody style = {{textAlign:'center'}}>
                {contact.map((contact) =>
                <tr key = {contact.Pno}>
                <td>{contact.Name}</td>
                <td>{contact.Pno}</td>
                <td>{contact.Relation}</td>
                <td style={{width:20}}><Button variant="danger" onClick = {() => deleteContactRow(contact.Pno, teacherID)}><Cancel /></Button>{' '}</td>
                </tr>
                )}
                </tbody>
            </Table>
            
            <div style={{marginTop:50,marginLeft:500}}>
            <Button size='lg' onClick={() => addContact()}>Add Emergency Contact</Button>
            </div>
        </div>
    )
}
