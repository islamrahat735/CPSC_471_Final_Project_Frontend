import React, {Component, useState} from "react";
import Sidebar from "./Sidebar.js";
import Topbar from "./Topbar.js";
import "./styles/dashboard.css";
import Overview from "./Overview.js";
import Fees from "./Fees.js";
import Attendance from "./Attendance.js";
import Updates from "./Updates.js";
import { useDispatch, useSelector } from 'react-redux';

export default function Dashboard() {
    const username = useSelector((state) => state.username);
    console.log(username);
    const [page,setPage] = useState('');
    let output = 'Testing';
    function visibleOverview() 
    {
        console.log("Here")
        setPage({page: 'Overview'});
        console.log(page);
        output = <Overview />
    }

    function visibleFees() 
    {
        this.setPage({page: 'Fees'}); 
    }

    function visibleAttendance()
    {
        this.setPage({page: 'Attendance'}); 
    }

    function visibleUpdate()
    {
        this.setPage({page: 'Updates'});
    }
    return (
    <div >
    <Topbar/>
    <div className = "container">
    <Sidebar visibleHandleOver = {visibleOverview}/>
    <div className = "others">
        <Overview />
    </div>
    </div>
    </div>
    )
}