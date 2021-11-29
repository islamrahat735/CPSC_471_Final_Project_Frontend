import React from 'react'
import * as ReactBootStrap from "react-bootstrap";

export default function MedicalRecords() {
    const Child=[
        {Allergies:"Please include all allergies below", HealthConditions:"Please include all health conditions below", Vaccines:"Please include all past vaccinations"},
        {Allergies:"", HealthConditions:"", Vaccines:""},
        {Allergies:"", HealthConditions:"", Vaccines:""},
        {Allergies:"", HealthConditions:"", Vaccines:""},
        {Allergies:"", HealthConditions:"", Vaccines:""},
        {Allergies:"", HealthConditions:"", Vaccines:""},
        {Allergies:"", HealthConditions:"", Vaccines:""},
        {Allergies:"", HealthConditions:"", Vaccines:""},
        {Allergies:"", HealthConditions:"", Vaccines:""},
        {Allergies:"", HealthConditions:"", Vaccines:""},
        {Allergies:"", HealthConditions:"", Vaccines:""},
        {Allergies:"", HealthConditions:"", Vaccines:""},
  
  
      ]
  
  
  
      const renderChild=(childs,index)=>{
        return(
          <tr key={index}> 
          <td>{childs.Allergies}</td>
          <td>{childs.HealthConditions}</td>
          <td>{childs.Vaccines}</td>
         
          </tr>
      
        )
      }
    return (
          <div className="Medical Record">
            <h4>
                Your Medical Record Number is: 4
            </h4>
          <ReactBootStrap.Table striped bordered hover>
            <thead>
            <tr>
                <th>Allergies</th>
                <th>Health Conditions</th>
                <th>Vaccines/Covid status</th>
            </tr>
            </thead>
            <tbody>
            {Child.map(renderChild)}
                
            </tbody>
        </ReactBootStrap.Table>
        </div>
      );
  
}
