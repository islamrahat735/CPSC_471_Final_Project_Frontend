import React from 'react'
import { useState, useEffect } from 'react';
import TSidebar from './TSidebar';
import TTopbar from './TTopbar';
import Overview from './Overview';
import MedicalRecords from './MedicalRecords';
import FieldTrip from './FieldTrip';
import CourseList from './CourseList';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { teacherIDAC } from '../state/index';



export default function TeacherDashboard() {
    const [isToggledOverview, setisToggleOverview] = useState(false);
    const [isToggledCourseList, setisToggleCourseList] = useState(false);
    const [isToggledMedRecord, setisToggleMedRecord] = useState(false);
    const [isToggledFieldTrips, setisToggleFieldTrips] = useState(false);
    const dispatch = useDispatch();
    const {saveTeacherID} = bindActionCreators(teacherIDAC, dispatch);

    const username = useSelector((state) => state.username);

    useEffect(() => {
        fetchId()
    }, [])

    async function fetchId()
    {
        const response = await fetch(`http://localhost:3001/api/teacher/username/${username}`);
        const rep= await response.json();
        console.log(rep);
        saveTeacherID(rep[0].E_Id)
    
    }

    function visibleOverviewList()
    {
        setisToggleCourseList(false);
        setisToggleMedRecord(false);
        setisToggleFieldTrips(false);
        setisToggleOverview(true);
    }
    
    function visibleCourseList()
    {
        setisToggleMedRecord(false);
        setisToggleFieldTrips(false);
        setisToggleOverview(false);
        setisToggleCourseList(true);
    }

    function visibleMedRecord()
    {
        setisToggleFieldTrips(false);
        setisToggleOverview(false);
        setisToggleCourseList(false);
        setisToggleMedRecord(true);
    }

    function visibleFieldTrips()
    {
        setisToggleOverview(false);
        setisToggleCourseList(false);
        setisToggleMedRecord(false);
        setisToggleFieldTrips(true);
    }


    return (
    <div >
    <TTopbar/>
    <div className = "container">
    <TSidebar overviewHandle = {visibleOverviewList} courseListHandle = {visibleCourseList} MedRecHandle = {visibleMedRecord} FieldTripHandle = {visibleFieldTrips}/>
    <div className = "others">
        {isToggledOverview && <Overview />}
        {isToggledCourseList && <CourseList />}
        {isToggledMedRecord && <MedicalRecords />}
        {isToggledFieldTrips && <FieldTrip />}
    </div>
    </div>
    </div>
    )
}
