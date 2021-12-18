import "./Astyles/Asidebar.css"
import { ViewList, EmojiPeople, ControlPoint, Cached, PhotoCamera } from "@material-ui/icons"
export default function Sidebar(props) {
    return (
        <div className="sidebar">
        <div className="sidebarWrapper">
        <div className="sidebarMenu">
       <h3 className="sidebarTitle">Dashboard</h3>
        <ul className="sidebarList">
        <button onClick = {props.Parentlisthandler} id = "sidebarBtnO">
        <li className="sidebarListItem">
        <ViewList className="sidebarIcon"/>
       Parent List
        </li>
        </button>
        <button onClick = {props.Studentlisthandler} id = "sidebarBtnF">
        <li className="sidebarListItem">
        <ControlPoint className="sidebarIcon"/>
       Student List
        </li>
        </button>
        <button onClick = {props.Programlisthandler} id = "sideBarBtnA">
        <li className="sidebarListItem">
        <EmojiPeople className="sidebarIcon"/>
        Programs
        </li>
        </button>
        <button onClick = {props.ClassesHandler} id = "sideBarBtnA">
        <li className="sidebarListItem">
        <EmojiPeople className="sidebarIcon"/>
            Classes
        </li>
        </button>
        <button onClick = {props.AccountsHandler} id = "sideBarBtnU">
        <li className="sidebarListItem">
        <Cached className="sidebarIcon"/>
        Accounts
        </li>
        </button>
        <button onClick = {props.Employeelisthandler} id = "sidebarBtnO">
        <li className="sidebarListItem">
        <ViewList className="sidebarIcon"/>
       Teachers
        </li>
        </button>
        <button onClick = {props.ContactTraceHandler} id = "sidebarBtnO">
        <li className="sidebarListItem">
        <ViewList className="sidebarIcon"/>
       Contact Trace
        </li>
        </button>
        </ul>
       
       </div>
        </div>

        </div>
    )
}
