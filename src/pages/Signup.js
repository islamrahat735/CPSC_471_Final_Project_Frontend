import { StylesContext } from '@material-ui/styles';
import React, { Component } from 'react'
import LoginPageDisplay from './LoginPageDisplay';
import "./styles/Signup.css";
import Clients from "../clients.json"
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Dashboard from './Dashboard';
export class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            status: ''
        };
        this.loginCheck = this.loginCheck.bind(this);
    }

    

    render() {
        let output = <LoginPageDisplay loginCheckHandler = {this.loginCheck}/>
        if(this.state.status === "true")
        {
            output = <Dashboard />
        }
        return (
            <div>
            {output};
            </div>
        )
    }

    loginCheck() {
    const name = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3001/', true);
    xhr.onload = function() {
        //console.log("hello!");
        if(this.status === 200)
        {
            const response = this.responseText;
            console.log(response);
            
        }
    }
    xhr.send();

    {Clients.map(client => {
        console.log(this.state.status);
        if(client.email === name && client.password === pass)
        {
            this.setState({status: 'true'});
            console.log("Worked!");
        }

    })}
    if(this.state.status === "")
    {
        alert("You have entered an invalid email or password");
    }
    }
}

export default Signup
