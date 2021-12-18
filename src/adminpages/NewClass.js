import React from 'react'
import { Form } from 'react-bootstrap'
import {Row, Col} from 'react-bootstrap';
import {Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
export default function NewClass() {
    var className = '';
    var progName = '';
    var startTime = '';
    var endTime = '';
    var tid = '';
    const history = useHistory();

    function saveClassName(val)
    {
        className = val.target.value;
    }

    function saveProgName(val)
    {
        progName = val.target.value;
    }

    function saveStartTime(val)
    {
        startTime = val.target.value;
    }

    function saveEndTime(val)
    {
        endTime = val.target.value;
    }

    function saveTid(val)
    {
        tid = val.target.value;
    }

    function addNewClass()
    {
        let classInfo = {
            progName:progName,
            className: className,
            startTime:startTime,
            endTime:endTime,
            tid:tid
        }
        fetch(`http://localhost:3001/api/class/`, {
            method:'POST',
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(classInfo)
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          })

          history.push('/AdminDashboard')
    }

    return (
        <div>
            <div style = {{paddingTop:50, textAlign:'center'}}>
                <h1>Class Creation</h1>
            </div>
            <div style={{marginLeft:50,marginRight:100,alignItems:'center',marginTop:100,paddingLeft:200,paddingRight:200,paddingTop:50}}>
                <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Class Name</Form.Label>
                            <Form.Control type="email" placeholder="Enter Class Name" onChange={saveClassName}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Program Name</Form.Label>
                            <Form.Control type="email" placeholder="Enter Program Name" onChange={saveProgName}/>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Start Time</Form.Label>
                            <Form.Control type="email" placeholder="Enter Start Time" onChange={saveStartTime}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>End Time</Form.Label>
                            <Form.Control type="email" placeholder="Enter End Time" onChange={saveEndTime}/>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Teacher ID</Form.Label>
                            <Form.Control type="email" placeholder="Enter Teacher ID" onChange={saveTid}/>
                        </Form.Group>
                    </Row>
                </Form>
            </div>
            <div style={{textAlign:'center', marginLeft:262, marginRight:309, marginTop:50}}>
                <Row>
                <Button variant="primary" size="lg" onClick = {() => addNewClass()}>
                    Submit
                </Button>
                </Row>
            </div>

        </div>
    )
}
