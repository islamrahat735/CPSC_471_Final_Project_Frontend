import { useEffect } from 'react';
import {useSelector } from 'react-redux';
import {useState} from 'react';
import "./styles/Overview.css"
import Table from 'react-bootstrap/Table'


export default function MedicalRecord()  
{
  const childID = useSelector((state) => state.childID);
  const [child, setChild] = useState([]);
  const [covidStatus, setCovidStatus] = useState([]);
  const [healthCond, setHealthCond] = useState([]);

  useEffect(() => {
    fetchInfo();
  }, [])


  async function fetchInfo()
  {
    const response = await fetch(`http://localhost:3001/api/child/${childID}`);
      const rep = await response.json();
      //console.log(rep);
      setChild(rep);

    const covidResponse = await fetch (`http://localhost:3001/api/medicalRecord/${rep[0].MR_Id}`);
    const covRep = await covidResponse.json();
    //console.log(covRep);
    setCovidStatus(covRep);

    const healthConditionResponse = await fetch(`http://localhost:3001/api/mr/healthCondition/${rep[0].MR_Id}`);
    const healthRep = await healthConditionResponse.json();
    setHealthCond(healthRep);
    console.log(healthRep);
  }

  return (
    <div>
     {covidStatus.map((Covid) =>
     <div key = {Covid.MR_Id}>
        <div style={{paddingLeft:400, paddingTop:50}}>
          <h1>Covid Status: {Covid.Covid_Status}</h1>
        </div>
        <div style={{marginTop:70}}>
        <Table striped bordered hover>
                <thead style = {{textAlign:'center'}}>
                  <tr>
                    <th>Health Conditions</th>
                  </tr>
                </thead>
                <tbody style = {{textAlign:'center'}}>
                  {healthCond.map((Health) =>
                  <tr>
                    <td>{Health}</td>
                  </tr>
                  )}
                </tbody>
        </Table>
        </div>
      </div>
       )}
    </div>
  )
}