import React from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Signup from './pages/Signup';
import NavbarComp from './pages/NavbarComp';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import ChooseProfile from './pages/ChooseProfile';
import AdminDashboard from './adminpages/AdminDashboard';
import ParentEnroll from './adminpages/ParentEnroll';
import ChildEnroll from './adminpages/ChildEnroll';
import ProgramCreation from './adminpages/ProgramCreation';
import TeacherDashboard from './teacherpages/TeacherDashboard';
import FieldTripCreator from './adminpages/FieldTripCreator'
import EmployeeEnroll from './adminpages/EmployeeEnroll';
import FetchPrac from './fetchPrac';
import DisplayChildInfo from './adminpages/DisplayChildInfo';
import AccountCreation from './adminpages/AccountCreation';
import NewClass from './adminpages/NewClass';
import CreateParent from './adminpages/CreateParent';
import AddEmergencyContact from './pages/AddEmergencyContact';
function App() {

  return (
    
    <Router>
      <NavbarComp />
      <Switch>
     <Route path = "/" exact>
       <Home />
     </Route>

      <Route path = "/Login" exact>
        <Signup />
      </Route>

      <Route path = "/Dashboard" exact>
        <Dashboard />
      </Route>

       <Route path = "/ChooseProfile" exact>
           <ChooseProfile />
       </Route>

      <Route path = "/AdminDashboard" exact>
        <AdminDashboard />
      </Route>

      <Route path = "/Admin/ParentEnroll" exact>
        <ParentEnroll />
      </Route>

      <Route path = "/Admin/ChildEnroll" exact>
        <ChildEnroll />
      </Route>

      <Route path = "/Admin/ProgramCreation" exact>
        <ProgramCreation />
      </Route>

      <Route path = "/TeacherDashboard" exact>
        <TeacherDashboard />
      </Route>

      <Route path = "/Admin/FieldTripAdd" exact>
        <FieldTripCreator />
      </Route>

      <Route path = "/Admin/EmployeeAdd" exact>
        <EmployeeEnroll />
      </Route>

      <Route path = "/fetchprac" exact>
        <FetchPrac />
      </Route>

      <Route path = "/moreInfo" exact>
        <DisplayChildInfo />
      </Route>

      <Route path = "/AccountCreation" exact>
        <AccountCreation />
      </Route>

      <Route path = "/CreateClass" exact>
        <NewClass />
      </Route>
      
      <Route path = "/CreateParent" exact>
        <CreateParent />
      </Route>

            
      <Route path = "/CreateContact" exact>
        <AddEmergencyContact />
      </Route>
  
   </Switch>
   </Router>
  );
}

export default App;
