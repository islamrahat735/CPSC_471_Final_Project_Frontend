import React from 'react'
import { useState, useEffect } from 'react'
import {useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { Cancel } from '@material-ui/icons';

export default function EmergencyContacts() {

  const childID = useSelector((state) => state.childID);
  const [contact, setContact] = useState([]);

  const [newStatus, setNewStatus] = useState(false);

  useEffect(() => {
    fetchInfo();
    setNewStatus(false);
  }, [newStatus])


  async function fetchInfo()
  {
    console.log(childID)
    const response = await fetch(`http://localhost:3001/api/childEmergencyContact/child/${childID}`);
    const rep = await response.json();
    console.log(rep);
    setContact(rep);
    console.log(contact);
  }

  function deleteContactRow(pno, childID)
  {
    fetch(`http://localhost:3001/api/childEmergencyContact/specific/${pno}/${childID}`,{
      method:'DELETE'
    })
    .then(() => setNewStatus(true));
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
          <td style={{width:20}}><Button variant="danger" onClick = {() => deleteContactRow(contact.Pno, childID)}><Cancel /></Button>{' '}</td>
          </tr>
        )}
        </tbody>
      </Table>
    </div>
  )
}