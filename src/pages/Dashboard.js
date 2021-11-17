import React, {Component} from "react";
import Sidebar from "./Sidebar.js";
import Topbar from "./Topbar.js";
import "./styles/dashboard.css";
import Overview from "./Overview.js";
import Fees from "./Fees.js";
export class Dashboard extends Component{
    constructor(props) {
        super(props)

        this.state = {
            type: ''
        };

        this.visibleOverview = this.visibleOverview.bind(this);
        this.visibleFees = this.visibleFees.bind(this);
    }

    visibleOverview() 
    {
        this.setState({type: 'Overview'});
    }

    visibleFees() 
    {
        this.setState({type: 'Fees'}); 
    }

    render() {
    let output = '';
    if(this.state.type === "Overview")
    {
        output = <Overview />
        this.state.type = '';
    }
    if(this.state.type === "Fees")
    {
        output = <Fees />
        this.state.type = '';
    }
    return (
    <div >
    <Topbar/>
    <div className = "container">
    <Sidebar visibleHandleOver = {this.visibleOverview} visibleHandleFee = {this.visibleFees}/>
    
    <div className="others">{output}</div>
    </div>
    </div>
    )
    }
}


export default Dashboard;