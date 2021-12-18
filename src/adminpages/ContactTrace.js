import React from 'react'
import {Form,Row,Col,Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import {Table} from 'react-bootstrap'
import {useState} from 'react'
import { Cancel } from '@material-ui/icons';
import {CheckBox} from '@material-ui/icons';
import { useEffect } from 'react'

export default function ContactTrace() {
    var chID = '';
    var date = '';
    var cid = '';
    const history = useHistory();
    const [info,setInfo] = useState([]);
    const [newStatus,setNewStatus] = useState(false);

    useEffect(() => {
        setNewStatus(false);
    }, [info])

    function saveChID(val)
    {
        chID = val.target.value;
    }

    function saveDate(val)
    {
        date = val.target.value;
    }

    function savecid(val)
    {
        cid = val.target.value;
    }

    async function makeTrace()
    {
        let traceInfo = 
        {
            date:date,
            cid:cid
        }
        console.log(traceInfo);
        const response = await fetch(`http://localhost:3001/api/childAttendsClass/contactTrace/${cid}/${date}`);
        const rep = await response.json();
        setInfo(rep);
        console.log(rep)

    }

    function setIsolation(mrid)
    {
        let medInfo = 
        {
            mrid:mrid,
            covidStatus:"isolation"
        }

        console.log(medInfo);
        fetch(`http://localhost:3001/api/medicalRecord/`, {
            method:'PUT',
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(medInfo)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        // const test = info.map((info) => {
        //     if(info.MR_Id != mrid)
        //     {
        //         return info;
        //     }
        // })
        // console.log(test);
        let infoLength = info.length;
        let tempArr = [];
        for(var i = 0; i < infoLength;i++)
        {
            if(info[i].MR_Id !== mrid)
            {
                tempArr.push(info[i]);
            }
        }

        setInfo(tempArr);
        
    }

    return (
        <div>
            <h1 style={{marginLeft:500, marginTop:50}}>Contact Tracing</h1>
            <div style={{marginLeft:400, marginTop:50}}>
            <Form>
             <Row className="mb-3">

                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Date</Form.Label>
                <Form.Control  placeholder="Enter Date" onChange = {saveDate}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Class ID</Form.Label>
                <Form.Control  placeholder="Enter Class ID" onChange = {savecid}/>
                </Form.Group>
             </Row>
            </Form>
            </div>
            <Button style = {{marginLeft:580, marginTop:50}}variant="primary" size = "lg" onClick = {()=> makeTrace()}>Submit Request</Button>
            <div style={{marginTop:30}}>
            <Table striped bordered hover variant="primary">
                <thead>
                    <tr>
                    <th>Child ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th style = {{width:20}}>Set to Isolation</th>
                    </tr>
                </thead>
                <tbody>
                    {info.map((info) =>
                    <tr key = {info}>
                        <td>{info.Child_Id}</td>
                        <td>{info.Fname}</td>
                        <td>{info.Lname}</td>
                        <td style = {{textAlign:'center'}}><Button variant="primary" onClick = {()=> setIsolation(info.MR_Id)}><CheckBox /></Button>{' '}</td>
                    </tr>
                    )}
                </tbody>
            </Table>
            </div>
        </div>
    )
}
