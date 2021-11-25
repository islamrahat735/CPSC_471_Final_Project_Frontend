import "./styles/sidebar.css"
import { ViewList, EmojiPeople, ControlPoint, Cached, PhotoCamera } from "@material-ui/icons"
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
        <button id = "sidebarBtnF">
        <li className="sidebarListItem">
        <ControlPoint className="sidebarIcon"/>
       Fees Details
        </li>
        </button>
        <button id = "sideBarBtnA">
        <li className="sidebarListItem">
        <EmojiPeople className="sidebarIcon"/>
        Attendance
        </li>
        </button>
        <button id = "sideBarBtnU">
        <li className="sidebarListItem">
        <Cached className="sidebarIcon"/>
        Updates
        </li>
        </button>
        <li className="sidebarListItem">
        <PhotoCamera className="sidebarIcon"/>
        Gallery
        </li>
        </ul>
       
       </div>
        </div>

        </div>
    )
}
