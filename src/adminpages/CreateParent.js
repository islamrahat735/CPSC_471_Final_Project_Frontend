import React from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

export default function CreateParent() {
    var fname = '';
    var lname = '';
    var address = '';
    var phone = '';
    var fees = 0;
    var username = '';
    const history = useHistory();

    function savefname(val)
    {
        fname = val.target.value;
    }

    function savelname(val)
    {
        lname = val.target.value;
    }

    function saveaddress(val)
    {
        address = val.target.value;
    }

    function savephone(val)
    {
        phone = val.target.value;
    }

    function saveusername(val)
    {
        username = val.target.value;
    }

    function createParent()
    {
        let parentInfo = 
        {
            address:address,
            fname:fname,
            lname:lname,
            phone:phone,
            fees:fees,
            username:username
        }

        fetch(`http://localhost:3001/api/parent`, {
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(parentInfo)
        })
        .then(response => response.json())

        history.push('/AdminDashboard')
    }

    return (
        <div>
            <div style={{marginLeft:800, marginTop:100}}>
            <h1>Create Parent</h1>
            </div>
            <div style={{marginLeft:300,marginRight:300, marginTop:150}}>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="email" placeholder="Enter First Name" onChange={savefname}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control  placeholder="Enter Last Name" onChange={savelname}/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Address</Form.Label>
                <Form.Control  placeholder="Enter Address" onChange={saveaddress}/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Phone #</Form.Label>
                <Form.Control  placeholder="Enter Phone #" onChange={savephone}/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control  placeholder="Enter Username" onChange={saveusername}/>
                </Form.Group>
            </Row>
            </div>
            <Row style = {{marginLeft:300, marginTop:50, marginRight:300}}>
                <Button onClick = {()=> createParent()}>
                    Create Parent
                </Button>
            </Row>
        </div>
    )
}
