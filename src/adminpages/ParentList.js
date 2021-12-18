import React from 'react'
import Table from 'react-bootstrap/Table'
import './Astyles/parentlist.css'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {useHistory} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Cancel } from '@material-ui/icons';


export default function ParentList() {
    const history = useHistory();
    const [parentList,setParentList] = useState([]);
    const [newStatus, setNewStatus] = useState(false);

    function enrollParent(){   
        history.push("/Admin/ParentEnroll")
    }

    useEffect(() => {
        fetchInfo();
    },[])

    async function fetchInfo()
    {
        const respose = await fetch(`http://localhost:3001/api/parent/all/`);
        const rep = await respose.json();
        setParentList(rep);
    }

    function createParent()
    {
        history.push('/CreateParent')
    }

    return (
        <div style = {{marginTop:30}}>
            <div  className = "plistheader">
                <h1>List of Parents</h1>
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
                    <th>Phone #</th>
                    <th>Address</th>
                    </tr>
                </thead>
                <tbody style = {{textAlign:'center'}}>
                    {parentList.map((parent) =>
                    <tr key={parent.Username}>
                        <td>{parent.Fname}</td>
                        <td>{parent.Lname}</td>
                        <td>{parent.P_Id}</td>
                        <td>{parent.Phone_num}</td>
                        <td>{parent.Address}</td>
                    </tr>
                    )}
                </tbody>
                </Table>
            </div>
            <Row style={{marginLeft:280, marginTop:100}}>
            <Button variant="primary" size="lg" onClick = {() => createParent()}>
                Create Parent
            </Button>
            </Row>  
        </div>
    )
}
