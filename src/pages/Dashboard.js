import React, {Component, useState} from "react";
import Sidebar from "./Sidebar.js";
import Topbar from "./Topbar.js";
import "./styles/dashboard.css";
import Overview from "./Overview.js";
import Fees from "./Fees.js";
import Attendance from "./Attendance.js";
import Updates from "./Updates.js";
import { useDispatch, useSelector } from 'react-redux';
import MedicalRecords from './MedicalRecord.js'

export default function Dashboard() {
    const username = useSelector((state) => state.username);
    console.log(username);
    const [isToggleOver,setIsToggleOver] = useState(false);
    const [isToggleFees,setIsToggleFees] = useState(false);
    const [isToggleAttendance,setIsToggleAttendance] = useState(false);
    const [isToggleUpdates,setIsToggleUpdates] = useState(false);
    const [isToggleMedical,setIsToggleMedical] = useState(false);
    const childID = useSelector((state) => state.childID);

    let output = 'Testing';
    function visibleOverview() 
    {
        setIsToggleUpdates(false);
        setIsToggleAttendance(false);
        setIsToggleFees(false);
        setIsToggleMedical(false);
        setIsToggleOver(true);
 
    }

    function visibleFees() 
    {
      setIsToggleUpdates(false);
      setIsToggleAttendance(false);
      setIsToggleOver(false);
      setIsToggleMedical(false);
      setIsToggleFees(true);

    }

    function visibleAttendance()
    {
        setIsToggleUpdates(false);
        setIsToggleOver(false);
        setIsToggleFees(false);
        setIsToggleMedical(false);
        setIsToggleAttendance(true);
    }

    function visibleUpdate()
    {
        setIsToggleOver(false);
        setIsToggleFees(false);
        setIsToggleAttendance(false);
        setIsToggleMedical(false);
        setIsToggleUpdates(true);
    }

    function visibleMedicalRecord()
    {
        setIsToggleOver(false);
        setIsToggleFees(false);
        setIsToggleAttendance(false);
        setIsToggleUpdates(false);
        setIsToggleMedical(true);
    }
    return (
    <div >
    <Topbar/>
    <div className = "container">
    <Sidebar visibleHandleOver = {visibleOverview} visibleHandleFees = {visibleFees} visibleHandleAttendance = {visibleAttendance} visibleHandleUpdate = {visibleUpdate} visibleHandleMedical = {visibleMedicalRecord}/>
    <div className = "others">
        {isToggleOver && <Overview />}
        {isToggleFees && <Fees />}
        {isToggleAttendance && <Attendance />}
        {isToggleUpdates && <Updates />}
        {isToggleMedical && <MedicalRecords />}
    </div>
    </div>
    </div>
    )
}