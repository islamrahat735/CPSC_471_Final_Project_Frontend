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
    const [isToggleOver,setIsToggleOver] = useState(false);
    const [isToggleFees,setIsToggleFees] = useState(false);
    const [isToggleAttendance,setIsToggleAttendance] = useState(false);
    const [isToggleUpdates,setIsToggleUpdates] = useState(false);
    const childID = useSelector((state) => state.childID);

    let output = 'Testing';
    function visibleOverview() 
    {
        setIsToggleUpdates(false);
        setIsToggleAttendance(false);
        setIsToggleFees(false);
        setIsToggleOver(true);
 
    }

    function visibleFees() 
    {
      setIsToggleUpdates(false);
      setIsToggleAttendance(false);
      setIsToggleOver(false);
      setIsToggleFees(true);

    }

    function visibleAttendance()
    {
        setIsToggleUpdates(false);
        setIsToggleOver(false);
        setIsToggleFees(false);
        setIsToggleAttendance(true);
    }

    function visibleUpdate()
    {
        setIsToggleOver(false);
        setIsToggleFees(false);
        setIsToggleAttendance(false);
        setIsToggleUpdates(true);
    }
    return (
    <div >
    <Topbar/>
    <div className = "container">
    <Sidebar visibleHandleOver = {visibleOverview} visibleHandleFees = {visibleFees} visibleHandleAttendance = {visibleAttendance} visibleHandleUpdate = {visibleUpdate}/>
    <div className = "others">
        {isToggleOver && <Overview />}
        {isToggleFees && <Fees />}
        {isToggleAttendance && <Attendance />}
        {isToggleUpdates && <Updates />}
        {childID}
    </div>
    </div>
    </div>
    )
}