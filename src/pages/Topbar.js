import React from "react";
import "./styles/topbar.css";
import { NotificationsNone, Search, Person } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Happy Trails</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Search />
          </div>
<img src="https://m.media-amazon.com/images/I/51zLZbEVSTL._AC_SL1200_.jpg" className="topAvatar" />

          </div>
      </div>
    </div>
  );
}