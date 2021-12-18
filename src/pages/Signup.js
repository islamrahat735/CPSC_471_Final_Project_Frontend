import React from 'react'
import "./styles/Signup.css";
import Dashboard from './Dashboard';
import { useHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import {usernameAC} from "../state/index"
import { teacherIDAC } from '../state/index';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

export default function Signup() {
    const history = useHistory();
    var enteredUserName = '';
    var enteredPassword = '';
    var invalid = '';
    const dispatch = useDispatch();
    const {saveUsername} = bindActionCreators(usernameAC, dispatch);
    //const {saveTeacherID} = bindActionCreators(teacherIDAC, dispatch);
    const name = useSelector((state) => state.username)

    const [isLoggedIn,setIsLoggedIn] = useState(false);
    
    function getName(val)
    {
        enteredUserName = val.target.value;
        saveUsername(enteredUserName);
        console.log(enteredUserName);
    }

    function savePass(val)
    {
        enteredPassword = val.target.value;
        console.log(enteredPassword);
    }

    const InvalidLogin = () => {
        return <div style = {{color:'red', fontSize:30}}>Invalid Login. Please try again.</div>
    }

    async function fetchAccount()
    {
        // console.log("in fetch func")
        const response = await fetch(`http://localhost:3001/api/account/${name}`);
        const rep = await response.json();
        // console.log(rep[0].Password + "  " + rep[0].Access);
        // console.log("Entered pass:" + enteredPassword);
        // console.log("Response pass:" +rep[0].Password);
            if(rep[0].Password === enteredPassword)
            {
                setIsLoggedIn(false);
                if(rep[0].Access.toLowerCase() === 'parent')
                {
                    // console.log("Log access:" + logAccess);
                    // logAccess = 'parent';
                    history.push('/ChooseProfile');
                    // return;
                }
                if(rep[0].Access.toLowerCase() === 'admin')
                {
                    history.push('/AdminDashboard');
                }
                if(rep[0].Access.toLowerCase() === 'teacher')
                {
                    //saveTeacherID()
                    history.push('/TeacherDashboard');
                }
            }
            else
            {
                setIsLoggedIn(true);
            }

    }

    return (
        <div>
            <div>
             <div className = "scroll">
<div className="row">
  <div className="column" style={{backgroundColor:"#639FE4"}}>  {/**THIS IS LEFT SIDE OF PAGE */}
      <div className = "title">
      <h1 className = "HappyTrailDaycare">Happy Trails</h1>
      <h1 className = "HappyTrailDaycare">Daycare</h1>
      </div>
  </div> {/**THIS IS END OF FIRST COL */}


  <div className="column"> {/**THIS IS Right SIDE OF PAGE */}

    <h1 className = "greetingText">Great to see you again!</h1>

        
   <form > {/**THIS IS FOR THE INPUTS OF USERNAME/EMAIL AND PASSWORD */}
       <div className = "Inputmail">
       {isLoggedIn && <InvalidLogin />}
       <label style = {{fontFamily: 'Roboto', fontSize:26}}>Email</label>
       <input type = "email" className = "form-control" placeholder= "Enter Email" style = {{width:400, height:50, fontSize:22}} onChange= {getName} id = "user"></input>
       </div>

       <div className = "Inputpass">
       <label style = {{fontFamily: 'Roboto', fontSize:26}}>Password</label>
       <input type = "password" className = "form-control" placeholder= "Enter password" style = {{width:400, height:50, fontSize:22}} onChange= {savePass} id = "pass"></input>
       </div>
       <button type="button" class="btn btn-primary btn-lg btn-block" style = {{width:400, height:50, fontSize:22, marginLeft:290, marginTop:32, fontFamily: 'Roboto', backgroundColor:'#639FE4'}} onClick = {fetchAccount}>Login</button>
        <br></br>
        <br></br>
   </form>
    <div>
    </div>

    
  </div>  {/**THIS IS END OF SECOND COL */}
</div>
    </div>
        </div>
        </div>
    )
}
