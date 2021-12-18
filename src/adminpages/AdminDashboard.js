import React from 'react'
import ASidebar from "./ASidebar"
import ATopbar from "./ATopbar"
import { useState } from 'react';
import ParentList from './ParentList';
import StudentList from './StudentList';
import Programs from './Programs';
import FieldTrip from './FieldTrip';
import EmployeeList from './EmployeeList';
import Accounts from './Accounts';
import { useEffect } from 'react';
import Classes from './Classes'
import ContactTrace from './ContactTrace';
export default function AdminDashboard() {
    const [isToggledParent, setisToggleParent] = useState(false);
    const [isToggledStudent, setisToggleStudent] = useState(false);
    const [isToggledPrograms, setisTogglePrograms] = useState(false);
    const [isToggledFieldTrips, setisToggleFieldTrips] = useState(false);
    const [isToggledEmployees, setisToggleEmployees] = useState(false);
    const [isToggledAccounts, setisToggleAccounts] = useState(false);
    const [isToggledClasses, setIsToggledClasses] = useState(false);
    const [isToggleContactTrace, setIsToggleContactTrace] = useState(false);

    function visibleParentList()
    {
        setisToggleAccounts(false);
        setisToggleStudent(false);
        setisTogglePrograms(false);
        setisToggleEmployees(false);
        setisToggleFieldTrips(false);
        setIsToggledClasses(false);
        setIsToggleContactTrace(false);
        setisToggleParent(true);
    }

    function visibleStudentList()
    {
        setisToggleAccounts(false);
        setisTogglePrograms(false);
        setisToggleEmployees(false);
        setisToggleFieldTrips(false);
        setisToggleParent(false);
        setIsToggledClasses(false);
        setIsToggleContactTrace(false)
        setisToggleStudent(true);
    }

    function visiblePrograms()
    {
        setisToggleAccounts(false);
        setisToggleEmployees(false);
        setisToggleFieldTrips(false);
        setisToggleParent(false);
        setIsToggledClasses(false);
        setIsToggleContactTrace(false)
        setisToggleStudent(false);
        setisTogglePrograms(true);
    }

    function visibleFieldTrips()
    {
        setisToggleAccounts(false);
        setisToggleEmployees(false);
        setisToggleParent(false);
        setisToggleStudent(false);
        setIsToggledClasses(false);
        setIsToggleContactTrace(false)
        setisTogglePrograms(false);
        setisToggleFieldTrips(true);
    }

    function visibleEmployees()
    {
        setisToggleAccounts(false);
        setisToggleParent(false);
        setisToggleStudent(false);
        setIsToggledClasses(false);
        setIsToggleContactTrace(false)
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
        setIsToggleContactTrace(false)
        setIsToggledClasses(false);
        setisToggleEmployees(false);
        setisToggleAccounts(true);
    }

    function visibleClasses()
    {
        setisToggleParent(false);
        setisToggleStudent(false);
        setisTogglePrograms(false);
        setIsToggleContactTrace(false)
        setisToggleFieldTrips(false);
        setisToggleEmployees(false);
        setisToggleAccounts(false);
        setIsToggledClasses(true);
    }

    function visibleContactTrace()
    {
        setisToggleParent(false);
        setisToggleStudent(false);
        setisTogglePrograms(false);
        setisToggleFieldTrips(false);
        setisToggleEmployees(false);
        setisToggleAccounts(false);
        setIsToggledClasses(false);
        setIsToggleContactTrace(true)
    }

    return (
    <div >
    <ATopbar/>
    <div className = "container">
    <ASidebar Parentlisthandler = {visibleParentList} Studentlisthandler = {visibleStudentList} Programlisthandler = {visiblePrograms} Fieldtriphandler = {visibleFieldTrips}
    Employeelisthandler = {visibleEmployees} AccountsHandler = {visiibleAccounts} ClassesHandler = {visibleClasses} ContactTraceHandler = {visibleContactTrace}/>
    <div className = "others">
        {isToggledParent && <ParentList />}
        {isToggledStudent && <StudentList />}
        {isToggledPrograms && <Programs />}
        {isToggledFieldTrips && <FieldTrip />}
        {isToggledEmployees && <EmployeeList />}
        {isToggledAccounts && <Accounts />}
        {isToggledClasses && <Classes />}
        {isToggleContactTrace && <ContactTrace />}
    </div>
    </div>
    </div>
    )
}
