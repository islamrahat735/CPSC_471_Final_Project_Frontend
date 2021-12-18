import React from 'react'
import {useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import ASidebar from "./ASidebar"
import ATopbar from "./ATopbar"
import { Button } from 'react-bootstrap';
import {useHistory } from 'react-router-dom';
import {Card} from 'react-bootstrap';
import { Row } from 'react-bootstrap';

export default function DisplayChildInfo() {
    const childID = useSelector((state) => state.childID);
    const [medicalRecord, setMedicalRecord] = useState([]); //Medical Record (covid status, MRID)
    const [childMrIdInfo, setChildMrIdInfo] = useState([]); //Stores (ChildID,ParentID,Program,address,Fname,Lname,status,DOB,MR_Id)
    const [programInfo, setProgramInfo] = useState([]); //Stores (Program name, fees, age group)
    const [emergencyContactInfo, setEmergencyContactInfo] = useState([]); //Stores (Pno, Name)
    const [parentInfo, setParentInfo] = useState([]); //Stores (PID,Address,Fname,Lname,Phone#,Fees,Username)
    const [healthCondInfo, setHealthCondInfo] = useState([]); //Stores conditions
    const [allergyInfo, setAllergyInfo] = useState([]); //stores allergies
    const [vaccineInfo, setVaccineInfo] = useState([]); //stores vaccines
    const [attendanceInfo, setAttendanceInfo] = useState([]);
    const [currentCovidStatus,setCurrentCovidStatus] = useState([]);

    const history = useHistory();

    useEffect(() => {
        fetchInfo();
    }, [])

    async function fetchInfo() //DIDNT DO attendance
    {
        const childMRid = await fetch(`http://localhost:3001/api/child/${childID}`);
        const mrIDRep = await childMRid.json()
        setChildMrIdInfo(mrIDRep);

        const medRecResponse = await fetch(`http://localhost:3001/api/medicalRecord/${mrIDRep[0].MR_Id}`);
        const medRep = await medRecResponse.json();
        setMedicalRecord(medRep);
        setCurrentCovidStatus(medRep[0].Covid_Status);
        console.log(medRep[0].Covid_Status);

        const programResponse = await fetch(`http://localhost:3001/api/program/${mrIDRep[0].Prog_name}`);
        const programRep = await programResponse.json();
        setProgramInfo(programRep);

        const emergencyResponse = await fetch(`http://localhost:3001/api/childEmergencyContact/child/${childID}`);
        const emergencyRep = await emergencyResponse.json();
        setEmergencyContactInfo(emergencyRep);

        const parentResponse = await fetch(`http://localhost:3001/api/parent/one/${mrIDRep[0].P_Id}`);
        const parentRep = await parentResponse.json();
        setParentInfo(parentRep);

        const healthCondResponse = await fetch(`http://localhost:3001/api/mr/healthCondition/${mrIDRep[0].MR_Id}`);
        const healthCondRep = await healthCondResponse.json();
        setHealthCondInfo(healthCondRep);

        const allergyResponse = await fetch(`http://localhost:3001/api/mr/allergy/${mrIDRep[0].MR_Id}`);
        const allergyRep = await allergyResponse.json();
        setAllergyInfo(allergyRep);

        const vaccineResponse = await fetch (`http://localhost:3001/api/mr/vaccination/${mrIDRep[0].MR_Id}`);
        const vaccineRep = await vaccineResponse.json();
        setVaccineInfo(vaccineRep);

        const attendanceResponse = await fetch(`http://localhost:3001/api/childAttendsClass/${childID}`);
        const attendanceRep = await attendanceResponse.json();
        setAttendanceInfo(attendanceRep);

    }

    function goToAdminPage()
    {
        history.push('/AdminDashboard')
    }

    function setPos()
    {
        let newStat = 
        {
            mrid:medicalRecord[0].MR_Id,
            covidStatus:"positive"
        }
        console.log(newStat);
        setCurrentCovidStatus('Positive')
        fetch(`http://localhost:3001/api/medicalRecord/`, {
            method:'PUT',
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(newStat)
        })
    }
    
    function setNeg()
    {
        let newStat = 
        {
            mrid:medicalRecord[0].MR_Id,
            covidStatus:"negative"
        }
        console.log(newStat);
        setCurrentCovidStatus('Negative')
        fetch(`http://localhost:3001/api/medicalRecord/`, {
            method:'PUT',
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(newStat)
        })
    }

    function setIsolation()
    {
        let newStat = 
        {
            mrid:medicalRecord[0].MR_Id,
            covidStatus:"isolation"
        }
        console.log(newStat);
        setCurrentCovidStatus('Isolated')
        fetch(`http://localhost:3001/api/medicalRecord/`, {
            method:'PUT',
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(newStat)
        })
    }

    return (
        <div>
            <div>
            {childMrIdInfo.map((fullname) =>
            <div style={{textAlign:'center', marginTop:30}}>
            <h1>{fullname.Fname} {fullname.Lname}</h1>
            </div>
            )}
            </div>
            <div style={{marginLeft:50, marginRight:50}}>
                <Card>
                    {childMrIdInfo.map((name) => 
                    <Card.Header style={{textAlign:'center', fontWeight:'bold'}}>Basic Info</Card.Header>
                    )}
                    <Card.Body>
                            {childMrIdInfo.map((child) =>
                            <div key = {child.Child_Id}  style={{textAlign:'center'}}>
                            <Card.Text style={{textAlign:'center'}}>Child ID: {child.Child_Id}</Card.Text>
                            {parentInfo.map((parent) => 
                            <Card.Text key = {parent.P_Id}style={{textAlign:'center'}}>Parent Name: {parent.Fname} {parent.Lname} </Card.Text>
                            )}
                            <Card.Text> Program: {child.Prog_name}</Card.Text>
                            <Card.Text>Address: {child.Address}</Card.Text>
                            <Card.Text>Status: {child.status}</Card.Text>
                            <Card.Text>Date Of Birth: {child.Dob}</Card.Text>
                            <Card.Text>Mr_Id: {child.MR_Id}</Card.Text>
                            </div>
                            )}
                    </Card.Body>
                </Card>
                <br></br>
                <Card>
                    <Card.Header style={{textAlign:'center', fontWeight:'bold'}}> Program Details</Card.Header>
                    <Card.Body>
                        {programInfo.map((program) =>
                        <div key = {program.Name} style={{textAlign:'center'}}>
                            <Card.Text>Program Name: {program.Name}</Card.Text>
                            <Card.Text>Fees: {program.Fees}</Card.Text>
                            <Card.Text>Age Group: {program.Age_Group}</Card.Text>
                        </div>
                        )}
                    </Card.Body>
                </Card>
                <br></br>
                <Card>
                    <Card.Header style={{textAlign:'center', fontWeight:'bold'}}>Medical Information</Card.Header>
                    <Card.Body>
                        {medicalRecord.map((med) =>
                        <div style={{textAlign:'center'}} key = {med.MR_Id}>
                        <Button onClick = {()=>setPos()}>Set Positive</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button onClick = {()=>setNeg()}>Set Negative</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button onClick = {()=>setIsolation()}>Set Isolation</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Card.Text>Mr_Id: {med.MR_Id}</Card.Text>
                        <Card.Text>Covid Status: {currentCovidStatus}</Card.Text>
                        <br></br>
                        <Card.Text style = {{fontWeight:'bold', textDecoration:'underline'}}>Allergies</Card.Text>
                            {allergyInfo.map((allergy)=>
                            <Card.Text key = {allergy}>{allergy}</Card.Text>
                            )}
                            <br></br>
                        <Card.Text style = {{fontWeight:'bold', textDecoration:'underline'}}>Conditions</Card.Text>
                            {healthCondInfo.map((condition) =>
                                <Card.Text key = {condition}>{condition}</Card.Text>
                            )}
                            <br></br>
                        <Card.Text style = {{fontWeight:'bold', textDecoration:'underline'}}>Vaccines</Card.Text>
                            {vaccineInfo.map((vaccine) =>
                                <Card.Text key = {{vaccine}}>{vaccine}</Card.Text>
                            )}
                        </div>
                        )}
                    </Card.Body>
                </Card>
                <br></br>
                <Card>
                    <Card.Header style={{textAlign:'center', fontWeight:'bold'}}>Emergency Contacts </Card.Header>
                    <Card.Body>
                        {emergencyContactInfo.map((emerg) =>
                        <div key = {emerg.Pno} style = {{textAlign:'center'}}>
                            <Card.Text>Phone Number: {emerg.Pno}</Card.Text>
                            <Card.Text>Relation: {emerg.Relation}</Card.Text>
                        </div>
                        )}
                    </Card.Body>
                </Card>
                <br></br>
                <Card>
                    <Card.Header style={{textAlign:'center', fontWeight:'bold'}}>Attendance Records (Days Present) </Card.Header>
                    <Card.Body>
                        {attendanceInfo.map((attend) =>
                        <div  key = {attend.Child_Id} style = {{textAlign:'center'}}>
                            <Card.Text>Date: {attend.Date} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Class Name: {attend.Class_name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Class ID: {attend.C_Id}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Program Name: {attend.Prog_name} </Card.Text>
                        </div>
                        )}
                    </Card.Body>
                </Card>
            </div>
            <Button size = "lg" style = {{marginLeft:900, marginTop:100}}variant = "primary" onClick = {() => goToAdminPage()}>Go Back</Button>
        </div>
    )
}
