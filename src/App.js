import React from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Signup from './pages/Signup';
import NavbarComp from './pages/NavbarComp';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import ChooseProfile from './pages/ChooseProfile';
import AdminDashboard from './adminpages/AdminDashboard';

function App() {

  return (
    
    <Router>
      <NavbarComp />
      <Switch>
     <Route path = "/" exact>
       <Home />
     </Route>

      <Route path = "/Signup" exact>
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

   </Switch>
   </Router>
  );
}

export default App;
