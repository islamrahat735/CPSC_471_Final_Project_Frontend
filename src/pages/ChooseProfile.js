import React from 'react'
import { useState, useEffect } from 'react'
import PulseLoader from "react-spinners/PulseLoader";
import "./styles/chooseprofile.css"
import { bindActionCreators } from 'redux';
import {usernameAC} from "../state/index"
import { childIDAC } from '../state/index';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

export default function ChooseProfile() {

  const [loading, setLoading] = useState(false);
  const [child, setChild] = useState([]);
  const dispatch = useDispatch();
  const {saveChildID} = bindActionCreators(childIDAC, dispatch);
  const childID = useSelector((state) => state.childID);
  const name = useSelector((state) => state.username)
  const history = useHistory();

  useEffect(() => {
    setLoading(true);
    fetchInfo();
  }, [])

  function saveID(value)
  {
    saveChildID(value);
    history.push('/Dashboard')
  }

  async function fetchInfo()
  {
    const response = await fetch(`http://localhost:3001/api/child/username/${name}`);
        const rep = await response.json();
        console.log(rep);
        setChild(rep);
        setLoading(false);
  }
    return (
      <div>
        {
          loading ?
          <div style = {{marginTop:400, marginLeft:800}}>
          <PulseLoader 
          color={"#8AB5E6"} 
          loading={loading} 
          size={70} />
          </div>
          :
          <div> 
                   <h1 style = {{textAlign: 'center', marginTop: 40}}>Pick which child you wish to view</h1>
                  {child.map((child) =><button style={{width:300,height:150,marginLeft:780, marginTop:35, fontSize:30, backgroundColor:'lightblue'}} key={child.Child_Id} onClick = {() => saveID(child.Child_Id)}>{child.Fname} {child.Lname}</button>)}
          </div>
        }


      </div>
    )
}
