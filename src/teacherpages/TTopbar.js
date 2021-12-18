import React from "react";
import './Tstyles/Ttopbar.css'
import { NotificationsNone, Search, Person } from "@material-ui/icons";
import {useHistory} from 'react-router-dom'
import {Button} from 'react-bootstrap'
export default function TTopbar() {

  const history = useHistory();

  function logout()
  {
    history.push('/Login')
  }
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Happy Trails</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
          </div>
          <div className="topbarIconContainer">
          </div>
          <Button variant="primary" onClick = {()=>logout()}>Logout</Button>

          </div>
      </div>
    </div>
  );
}