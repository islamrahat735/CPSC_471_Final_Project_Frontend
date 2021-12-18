import './Tstyles/Tsidebar.css'
import { ViewList, EmojiPeople, ControlPoint, Cached, PhotoCamera } from "@material-ui/icons"
export default function TSidebar(props) {
    return (
        <div className="sidebar">
        <div className="sidebarWrapper">
        <div className="sidebarMenu">
       <h3 className="sidebarTitle">Dashboard</h3>
        <ul className="sidebarList">
        
        <button onClick = {props.overviewHandle} id = "sideBarBtnA">
        <li className="sidebarListItem">
        <EmojiPeople className="sidebarIcon"/>
        Overview
        </li>
        </button>
        <button onClick = {props.courseListHandle} id = "sidebarBtnO">
        <li className="sidebarListItem">
        <ViewList className="sidebarIcon"/>
       Courses List
        </li>
        </button>
        <button onClick = {props.MedRecHandle} id = "sidebarBtnF">
        <li className="sidebarListItem">
        <ControlPoint className="sidebarIcon"/>
       Medical Records
        </li>
        </button>
        <button onClick = {props.FieldTripHandle} id = "sideBarBtnA">
        <li className="sidebarListItem">
        <EmojiPeople className="sidebarIcon"/>
        Emergency Contacts
        </li>
        </button>

        
        
        </ul>
       
       </div>
        </div>

        </div>
    )
}
