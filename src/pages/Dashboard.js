import React from "react";
import Sidebar from "./Sidebar.js";
import Topbar from "./Topbar.js";
import "./styles/dashboard.css";

function Dashboard(){
    return (
    <div >
    <Topbar/>
    <div className = "container">
    <Sidebar/>
    <div className="others">other pages</div>
    </div>
    </div>
    );
}

export default Dashboard;