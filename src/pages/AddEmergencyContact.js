import React from 'react'
import {Row,Col,Form, Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
export default function AddEmergencyContact() {
    var Name = '';
    var Pno = '';
    var relation = '';
    const history = useHistory();
    const childID = useSelector((state) => state.childID);

    function createEmergContact()
    {
        let contact = 
        {
            Pno: Pno,
            Name: Name
        }
        fetch(`http://localhost:3001/api/emergencyContact`, {
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(contact)
        })
        .then(response => response.json())
        .then(data => {
            let finalContact = 
            {
                Pno: Pno,
                chId:childID,
                relation:relation
            }
            fetch(`http://localhost:3001/api/childEmergencyContact/`, {
                method:'POST',
                headers: {"Content-Type": "application/json"},
                body:JSON.stringify(finalContact)
            })
        })

        history.push('/Dashboard')
    }

    function saveName(val)
    {
        Name = val.target.value;
    }

    function savePno(val)
    {
        Pno = val.target.value;
    }

    function saveRelation(val)
    {
        relation = val.target.value;
    }

    return (
        <div>
            <div style={{marginLeft:730, marginTop:100}}>
            <h1>Create Emergency Contact</h1>
            </div>
            <div style={{marginLeft:300,marginRight:300, marginTop:150}}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="email" placeholder="Enter Full Name" onChange = {saveName}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control  placeholder="Enter Phone Number" onChange = {savePno}/>
                </Form.Group>
            </Row>
            <Row>   
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Relationship To Child</Form.Label>
                <Form.Control  placeholder="Enter Relation" onChange = {saveRelation}/>
                </Form.Group>
            </Row>
            </div>
            <Row style = {{marginLeft:300, marginTop:50, marginRight:300}}>
                <Button onClick = {()=> createEmergContact()}>
                    Create Contact
                </Button>
            </Row>
        </div>
    )
}
