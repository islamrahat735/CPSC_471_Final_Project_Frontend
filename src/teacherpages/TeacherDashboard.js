import React from 'react'
import { useState } from 'react';
import TSidebar from './TSidebar';
import TTopbar from './TTopbar';
import Overview from './Overview';
import MedicalRecords from './MedicalRecords';
import FieldTrip from './FieldTrip';
import CourseList from './CourseList';

export default function TeacherDashboard() {
    const [isToggledOverview, setisToggleOverview] = useState(false);
    const [isToggledCourseList, setisToggleCourseList] = useState(false);
    const [isToggledMedRecord, setisToggleMedRecord] = useState(false);
    const [isToggledFieldTrips, setisToggleFieldTrips] = useState(false);

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
