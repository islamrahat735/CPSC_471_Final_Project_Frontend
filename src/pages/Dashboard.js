import React, {Component} from "react";
import Sidebar from "./Sidebar.js";
import Topbar from "./Topbar.js";
import "./styles/dashboard.css";
import Overview from "./Overview.js";
import Fees from "./Fees.js";
import Attendance from "./Attendance.js";
import Updates from "./Updates.js";
export class Dashboard extends Component{
    constructor(props) {
        super(props)

        this.state = {
            type: ''
        };

        this.visibleOverview = this.visibleOverview.bind(this);
        this.visibleFees = this.visibleFees.bind(this);
        this.visibleAttendance = this.visibleAttendance.bind(this);
        this.visibleUpdate = this.visibleUpdate.bind(this);
    }
    visibleOverview() 
    {
        this.setState({type: 'Overview'});
    }

    visibleFees() 
    {
        this.setState({type: 'Fees'}); 
    }

    visibleAttendance()
    {
        this.setState({type: 'Attendance'}); 
    }

    visibleUpdate()
    {
        this.setState({type: 'Updates'});
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
    if(this.state.type === "Attendance")
    {
        output = <Attendance />
        this.state.type = '';
    }
    if(this.state.type === "Updates")
    {
        output = <Updates />
        this.state.type = '';
    }
    return (
    <div >
    <Topbar/>
    <div className = "container">
    <Sidebar visibleHandleOver = {this.visibleOverview} visibleHandleFee = {this.visibleFees} visibleHandleAttendance = {this.visibleAttendance} visibleHandleUpdate = {this.visibleUpdate}/>
    
    <div className="others">{output}</div>
    </div>
    </div>
    )
    }
}


export default Dashboard;