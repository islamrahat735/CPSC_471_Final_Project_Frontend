import React from "react";
import './styles/Signup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clients from "../clients.json";

function Signup()
{



function login()
{
    let state = "false";
    const name = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3001/', true);
    xhr.onload = function() {
        //console.log("hello!");
        if(this.status === 200)
        {
            const response = this.responseText;
            console.log(response);
            
        }
    }
    xhr.send();

    {Clients.map(client => {

        if(client.email === name && client.password === pass)
        {
            state = "true";
            console.log("Worked!");
        }
    })}
    if(state === "false")
    {
        alert("You have entered an invalid email or password");
    }
}


return (
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
    <h1 className = "greetingText">Login as:</h1>

    <table>  {/**THIS IS FOR THE ADMIN AND PARENT BUTTONS */}
        <tr>
            <td>
            <button className = "adminbtn" style = {{fontSize:30, marginTop:40}}>Admin</button>
            </td>
            <td>
            <button className = "parentbtn" style = {{fontSize:30, marginTop:40}}>Parent</button>
            </td>
        </tr>
    </table>
   
   <form> {/**THIS IS FOR THE INPUTS OF USERNAME/EMAIL AND PASSWORD */}
       <div className = "Inputmail">
       <label style = {{fontFamily: 'Roboto', fontSize:26}}>Email</label>
       <input type = "email" className = "form-control" placeholder= "Enter Email" style = {{width:400, height:50, fontSize:22}} id = "user"></input>
       </div>

       <div className = "Inputpass">
       <label style = {{fontFamily: 'Roboto', fontSize:26}}>Password</label>
       <input type = "password" className = "form-control" placeholder= "Enter password" style = {{width:400, height:50, fontSize:22}} id = "pass"></input>
       </div>
       <button type="button" class="btn btn-primary btn-lg btn-block" style = {{width:400, height:50, fontSize:22, marginLeft:300, marginTop:32, fontFamily: 'Roboto', backgroundColor:'#639FE4'}} onClick = {login}>Login</button>
        <br></br>
        <br></br>
       <small style = {{marginLeft:300}}><a href = "">Forgot password?</a></small>
       <small style = {{marginLeft:40}}>Want to register your child? <a href = "">Click Here</a></small>
   </form>
    

    
  </div>  {/**THIS IS END OF SECOND COL */}
</div>
    </div>
)

}



export default Signup;