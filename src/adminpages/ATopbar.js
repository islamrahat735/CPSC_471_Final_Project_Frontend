import React from "react";
import "./Astyles/Atopbar.css"
import { NotificationsNone, Search, Person } from "@material-ui/icons";
import { Button } from "react-bootstrap";
import {useHistory} from 'react-router'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {usernameAC} from "../state/index";

export default function Topbar() {

  const history = useHistory();
  const dispatch = useDispatch();
  const {saveUsername} = bindActionCreators(usernameAC, dispatch);

  function logout()
  {
    saveUsername(null);
    history.push('/Login');
  }

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Happy Trails</span>
        </div>
        <div className="topRight">
        <Button variant="primary" onClick = {()=>logout()}>Logout</Button>
          </div>
      </div>
    </div>
  );
}