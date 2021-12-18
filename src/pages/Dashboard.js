import React, {Component, useState} from "react";
import Sidebar from "./Sidebar.js";
import Topbar from "./Topbar.js";
import "./styles/dashboard.css";
import Overview from "./Overview.js";
import Attendance from "./Attendance.js";
import Updates from "./Updates.js";
import { useDispatch, useSelector } from 'react-redux';
import MedicalRecords from './MedicalRecord.js'
import EmergencyContacts from "./EmergencyContacts.js";
import { useEffect } from "react";

export default function Dashboard() {
    const username = useSelector((state) => state.username);
    console.log(username);
    const [isToggleOver,setIsToggleOver] = useState(false);
    const [isToggleContacts, setIsToggleContacts] = useState(false);
    const [isToggleAttendance,setIsToggleAttendance] = useState(false);
    const [isToggleUpdates,setIsToggleUpdates] = useState(false);
    const [isToggleMedical,setIsToggleMedical] = useState(false);
    const childID = useSelector((state) => state.childID);

    let output = 'Testing';
    function visibleOverview() 
    {
        setIsToggleUpdates(false);
        setIsToggleAttendance(false);
        setIsToggleContacts(false);
        setIsToggleMedical(false);
        setIsToggleOver(true);
 
    }

    function visibleContacts() 
    {
      setIsToggleUpdates(false);
      setIsToggleAttendance(false);
      setIsToggleOver(false);
      setIsToggleMedical(false);
      setIsToggleContacts(true);
    }

    function visibleAttendance()
    {
        setIsToggleUpdates(false);
        setIsToggleOver(false);
        setIsToggleContacts(false);
        setIsToggleMedical(false);
        setIsToggleAttendance(true);
    }

    function visibleUpdate()
    {
        setIsToggleOver(false);
        setIsToggleContacts(false);
        setIsToggleAttendance(false);
        setIsToggleMedical(false);
        setIsToggleUpdates(true);
    }

    function visibleMedicalRecord()
    {
        setIsToggleOver(false);
        setIsToggleContacts(false);
        setIsToggleAttendance(false);
        setIsToggleUpdates(false);
        setIsToggleMedical(true);
    }

    useEffect(() => {
        setIsToggleOver(true);
    }, [])
    return (
    <div >
    <Topbar/>
    <div className = "container">
    <Sidebar visibleHandleOver = {visibleOverview} visibleHandleContacts = {visibleContacts} visibleHandleAttendance = {visibleAttendance} visibleHandleUpdate = {visibleUpdate} visibleHandleMedical = {visibleMedicalRecord}/>
    <div className = "others">
        {isToggleOver && <Overview />}
        {isToggleContacts && <EmergencyContacts />}
        {isToggleAttendance && <Attendance />}
        {isToggleMedical && <MedicalRecords />}
    </div>
    </div>
    </div>
    )
}