import "./styles/sidebar.css"
import { ViewList, EmojiPeople, ControlPoint, Cached, PhotoCamera, LocalHospital, Call } from "@material-ui/icons"
export default function Sidebar(props) {
    return (
        <div className="sidebar">
        <div className="sidebarWrapper">
        <div className="sidebarMenu">
       <h3 className="sidebarTitle">Dashboard</h3>
        <ul className="sidebarList">
        <button onClick = {props.visibleHandleOver} id = "sidebarBtnO">
        <li className="sidebarListItem">
        <ViewList className="sidebarIcon"/>
       Overview
        </li>
        </button>
        <button onClick = {props.visibleHandleAttendance} id = "sideBarBtnA">
        <li className="sidebarListItem">
        <EmojiPeople className="sidebarIcon"/>
        Attendance
        </li>
        </button>
        <button onClick = {props.visibleHandleMedical} id = "sideBarBtnMed">
        <li className="sidebarListItem">
        <LocalHospital className="sidebarIcon"/>
        Medical Info
        </li>
        </button>
        <button onClick = {props.visibleHandleContacts} id = "sidebarBtnF">
        <li className="sidebarListItem">
        <Call className="sidebarIcon"/>
            Emergency Contacts
        </li>
        </button>
        </ul>
       
       </div>
        </div>

        </div>
    )
}
