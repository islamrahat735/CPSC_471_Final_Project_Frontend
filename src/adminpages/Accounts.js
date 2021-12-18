import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import {useHistory} from 'react-router-dom'
import {useEffect, useState} from 'react'
import { Cancel } from '@material-ui/icons';
import './Astyles/employeelist.css'
import Row from 'react-bootstrap/Row'


export default function Accounts() {
    const history = useHistory();
    const [accountList,setAccountList] = useState([]);
    const [newStatus,setNewStatus] = useState(false);

    useEffect(()=> {
        fetchInfo();
        setNewStatus(false);
    }, [newStatus])

    async function fetchInfo()
    {
        const response= await fetch(`http://localhost:3001/api/account/`);
        const rep= await response.json();
        setAccountList(rep);
    }

    function deleteAccount(email)
    {
        fetch(`http://localhost:3001/api/account/${email}`,{
            method:'DELETE'
        })
        .then(() => setNewStatus(true));
        
    }

    function createAccountPage()
    {
        history.push('/AccountCreation');
    }
    return (
        <div>
            <div  className = "emheader">
                <h1>List of Accounts</h1>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div>
                <Table striped bordered hover variant="primary">
                <thead>
                    <tr>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Access</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {accountList.map((account) =>
                    <tr key = {account.Username}>
                        <td>{account.Username}</td>
                        <td>{account.Password}</td>
                        <td>{account.Access}</td>
                        <td  style={{width:20}}><Button variant="danger" onClick = {() => deleteAccount(account.Username)}><Cancel /></Button>{' '}</td>
                    </tr>
                    )}

                </tbody>
                </Table>
            </div>
            <Row>
            <Button style = {{marginLeft:190, marginTop:50}}variant="primary" size="lg" onClick ={()=>createAccountPage()}> Create Account </Button>
            </Row>
        </div>
    )
}
