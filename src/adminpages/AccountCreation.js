import React from 'react'
import { Form } from 'react-bootstrap'
import {Row, Col} from 'react-bootstrap'
import './Astyles/Accountcreation.css'
import { Button } from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
export default function AccountCreation() {
    var name = '';
    var pass = '';
    var access = '';
    const history = useHistory();
    
    function registerAccount()
    {
        let accInfo = {
            username:name,
            password:pass,
            access:access
        }
        console.log(accInfo);
        fetch(`http://localhost:3001/api/account/`, {
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(accInfo)
        })
        .then(response => response.json())
        .then(data => {
        console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
          })

          history.push('/AdminDashboard');
    }

    function saveName(val)
    {
        name = val.target.value;
    }
    function savePass(val)
    {
        pass = val.target.value;
    }
    function saveAccess(val)
    {
        access = val.target.value;
    }
    return (
        <div>
            <div  className = "AccTitle">
            <h1>Account Creation</h1>
            </div>
            <div className="accountForm">
            <Form>
                <Row className = "mb3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control placeholder="Enter Username" onChange = {saveName}/>
                    </Form.Group>
                </Row>
                <Row className = "mb3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Password</Form.Label>
                        <Form.Control placeholder="Enter Password" onChange = {savePass}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Access</Form.Label>
                        <Form.Control placeholder="Enter Access Level" onChange = {saveAccess}/>
                    </Form.Group>
                </Row>
            </Form>
            <Row>
            <Button style = {{marginLeft:0, marginTop:50}}variant="primary" size="lg" onClick = {()=> registerAccount()}> Create Account </Button>
            </Row>
            </div>
        </div>
    )
}
