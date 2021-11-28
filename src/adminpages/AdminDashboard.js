import React from 'react'
import ASidebar from "./ASidebar"
import ATopbar from "./ATopbar"
export default function AdminDashboard() {
    return (
    <div >
    <ATopbar/>
    <div className = "container">
    <ASidebar/>
    <div className = "others">
    </div>
    </div>
    </div>
    )
}
