import React from 'react'
import { useEffect } from 'react';
import {useSelector } from 'react-redux';
import {useState} from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { Cancel } from '@material-ui/icons';

export default function MedicalRecords() {

  const teacherID=useSelector((state)=>state.teacherID);
  const [employeeInfo,setEmployeeInfo] = useState([]);
  const [covidStatus, setCovidStatus] = useState([]);
  const [healthCond, setHealthCond] = useState([]);
  const [allergyNames, setallergyNames] = useState([]);
  const [vaccinationList, setVaccinationList] = useState([]);

  const [newHealthCon, setNewHealthCon] = useState(null);
  const [newAllergy, setNewAllergy] = useState(null);
  const [newVaccination, setNewVaccination] = useState(null);
  const [newStatus, setNewStatus] = useState(false);

  useEffect(() => {
    fetchInfo();
    setNewStatus(false);
  }, [newStatus])

  function saveHealthCon(val)
  {
    setNewHealthCon(val.target.value);
  }

  function saveAllergy(val)
  {
    setNewAllergy(val.target.value);
  }

  function saveVaccination(val)
  {
    setNewVaccination(val.target.value);
  }

  function addVaccination()
  {
    let newArg = {
      mrid: employeeInfo[0].MR_Id,
      vaccine: newVaccination
    }
        //console.log(newCond);
        console.log(JSON.stringify(newArg));
        fetch(`http://localhost:3001/api/mr/vaccination/`, {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body:JSON.stringify(newArg)
        })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
          })
          .catch((error) => {
            console.error('Error:', error);
          })
          setNewStatus(true);
  }

  function deleteRowVaccination(MR_Id,vaccination)
  {
    fetch(`http://localhost:3001/api/mr/vaccination/${MR_Id}/${vaccination}`,{
      method:'DELETE'
    })
    .then(() => setNewStatus(true));
  }


  function addHealthCon()
  {
    let newCond = {
      mrid: employeeInfo[0].MR_Id,
      condition: newHealthCon
    }

    //console.log(newCond);
    console.log(JSON.stringify(newCond));
    fetch(`http://localhost:3001/api/mr/healthCondition/`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body:JSON.stringify(newCond)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      setNewStatus(true);
  }

  function deleteRowHealthCon(MR_Id,health)
  {
    fetch(`http://localhost:3001/api/mr/healthCondition/${MR_Id}/${health}`,{
      method:'DELETE'
    })
    .then(() => setNewStatus(true));
  }

  function addAllergy()
  {
    let newArg = {
      mrid: employeeInfo[0].MR_Id,
      allergy: newAllergy
    }

    //console.log(newCond);
    console.log(JSON.stringify(newArg));
    fetch(`http://localhost:3001/api/mr/allergy/`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body:JSON.stringify(newArg)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      })
      setNewStatus(true);
  }

  function deleteRowAllergy(MR_Id,allergy)
  {
    fetch(`http://localhost:3001/api/mr/allergy/${MR_Id}/${allergy}`,{
      method:'DELETE'
    })
    .then(() => setNewStatus(true));
  }

  async function fetchInfo()
  {
    const empInfo = await fetch(`http://localhost:3001/api/employee/${teacherID}`);
    const empRep = await empInfo.json();
    setEmployeeInfo(empRep);

    const covidResponse = await fetch(`http://localhost:3001/api/medicalRecord/${empRep[0].MR_Id}`);
    const covRep = await covidResponse.json();
    setCovidStatus(covRep);

    const healthConditionResponse = await fetch(`http://localhost:3001/api/mr/healthCondition/${empRep[0].MR_Id}`);
    const healthRep = await healthConditionResponse.json();
    setHealthCond(healthRep);

    const allergyResponse = await fetch(`http://localhost:3001/api/mr/allergy/${empRep[0].MR_Id}`);
    const allergyRep = await allergyResponse.json();
    setallergyNames(allergyRep);

    const vaccinationResponse = await fetch(`http://localhost:3001/api/mr/vaccination/${empRep[0].MR_Id}`);
    const vaccinationRep = await vaccinationResponse.json();
    setVaccinationList(vaccinationRep);
  }

  return (
    <div>
      {covidStatus.map((Covid) =>
     <div key = {Covid.MR_Id}>
       <h1 style={{paddingLeft:480, paddingTop:20}}>Medical Records</h1>
        <div style={{paddingLeft:480, paddingTop:50}}>
          <h1 style = {{fontSize:30}}>Covid Status: {Covid.Covid_Status}</h1>
        </div>
        <div style={{marginTop:70}}>
        <Table striped bordered style = {{borderColor:'black'}}>
                <thead style = {{textAlign:'center'}}>
                  <tr>
                    <th>Health Conditions</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody style = {{textAlign:'center'}}>
                  {healthCond.map((Health) =>
                  <tr key = {Health}>
                    <td>{Health}</td>
                    <td  style={{width:20}}><Button variant="danger" onClick = {() => deleteRowHealthCon(Covid.MR_Id, Health)}><Cancel /></Button>{' '}</td>
                  </tr>
                  )}
                </tbody>
        </Table>
        <br></br>
             <input placeholder = "Enter health condition" style = {{fontSize:22, marginLeft:470}} onChange={saveHealthCon}></input>   
             <Button variant="primary" style = {{fontSize:20, marginLeft:30}} onClick = {() => addHealthCon()} >Add</Button>{' '}
        <br></br>
        <br></br>
        <br></br>
        <Table striped bordered style = {{borderColor:'black'}}>
                <thead style = {{textAlign:'center'}}>
                  <tr>
                    <th>Allergies</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody style = {{textAlign:'center'}}>
                  {allergyNames.map((Allergy) =>
                  <tr key = {Allergy}>
                    <td>{Allergy}</td>
                    <td style={{width:20}}><Button variant="danger" onClick = {() => deleteRowAllergy(Covid.MR_Id, Allergy)}><Cancel /></Button>{' '}</td>
                  </tr>
                  )}
                </tbody>
        </Table>
        <br></br>
             <input placeholder = "Enter Allergies" style = {{fontSize:22, marginLeft:470}} onChange={saveAllergy}></input>  
             <Button variant="primary" style = {{fontSize:20, marginLeft:30}} onClick = {() => addAllergy()} >Add</Button>{' '}  
        <br></br>
        <br></br>
        <br></br>
        <Table striped bordered style = {{borderColor:'black'}}>
                <thead style = {{textAlign:'center'}}>
                  <tr>
                    <th>Vaccinations</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody style = {{textAlign:'center'}}>
                  {vaccinationList.map((Vaccination) =>
                  <tr key = {Vaccination}>
                    <td>{Vaccination}</td>
                    <td style={{width:20}}><Button variant="danger" onClick = {() => deleteRowVaccination(Covid.MR_Id, Vaccination)}><Cancel /></Button>{' '}</td>
                  </tr>
                  )}
                </tbody>
        </Table>
        <br></br>
             <input placeholder = "Enter Vaccination" style = {{fontSize:22, marginLeft:470}} onChange={saveVaccination}></input>  
             <Button variant="primary" style = {{fontSize:20, marginLeft:30}} onClick = {() => addVaccination()} >Add</Button>{' '}
             <br></br>
             <br></br>
             <br></br>
        </div>
      </div>
       )}
    </div>
  )
}
