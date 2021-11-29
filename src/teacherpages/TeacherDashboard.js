import React from 'react'
import ASidebar from "./TSidebar"
import ATopbar from "./ATopbar"
import { useState } from 'react';
import ParentList from './ParentList';
import StudentList from './StudentList';
import Programs from './Programs';
import FieldTrip from './FieldTrip';
import EmployeeList from './EmployeeList';
import Accounts from './Accounts';
export default function AdminDashboard() {
    const [isToggledParent, setisToggleParent] = useState(false);
    const [isToggledStudent, setisToggleStudent] = useState(false);
    const [isToggledPrograms, setisTogglePrograms] = useState(false);
    const [isToggledFieldTrips, setisToggleFieldTrips] = useState(false);
    const [isToggledEmployees, setisToggleEmployees] = useState(false);
    const [isToggledAccounts, setisToggleAccounts] = useState(false);

    function visibleOverviewList()
    {
        setisToggleAccounts(false);
        setisToggleStudent(false);
        setisTogglePrograms(false);
        setisToggleEmployees(false);
        setisToggleFieldTrips(false);
        setisToggleParent(true);
    }
    
    function visibleParentList()
    {
        setisToggleAccounts(false);
        setisToggleStudent(false);
        setisTogglePrograms(false);
        setisToggleEmployees(false);
        setisToggleFieldTrips(false);
        setisToggleParent(true);
    }

    function visibleStudentList()
    {
        setisToggleAccounts(false);
        setisTogglePrograms(false);
        setisToggleEmployees(false);
        setisToggleFieldTrips(false);
        setisToggleParent(false);
        setisToggleStudent(true);
    }

    function visiblePrograms()
    {
        setisToggleAccounts(false);
        setisToggleEmployees(false);
        setisToggleFieldTrips(false);
        setisToggleParent(false);
        setisToggleStudent(false);
        setisTogglePrograms(true);
    }

    function visibleFieldTrips()
    {
        setisToggleAccounts(false);
        setisToggleEmployees(false);
        setisToggleParent(false);
        setisToggleStudent(false);
        setisTogglePrograms(false);
        setisToggleFieldTrips(true);
    }

    function visibleEmployees()
    {
        setisToggleAccounts(false);
        setisToggleParent(false);
        setisToggleStudent(false);
        setisTogglePrograms(false);
        setisToggleFieldTrips(false);
        setisToggleEmployees(true);
    }

    function visiibleAccounts()
    {
        setisToggleParent(false);
        setisToggleStudent(false);
        setisTogglePrograms(false);
        setisToggleFieldTrips(false);
        setisToggleEmployees(false);
        setisToggleAccounts(true);
    }

    return (
    <div >
    <ATopbar/>
    <div className = "container">
    <ASidebar Overviewlisthandler = {visibleOverviewList}   Parentlisthandler = {visibleParentList} Studentlisthandler = {visibleStudentList} Programlisthandler = {visiblePrograms} Fieldtriphandler = {visibleFieldTrips}
    Employeelisthandler = {visibleEmployees} AccountsHandler = {visiibleAccounts}/>
    <div className = "others">
        {isToggledParent && <ParentList />}
        {isToggledStudent && <StudentList />}
        {isToggledPrograms && <Programs />}
        {isToggledFieldTrips && <FieldTrip />}
        {isToggledEmployees && <EmployeeList />}
        {isToggledAccounts && <Accounts />}
    </div>
    </div>
    </div>
    )
}
