import React from 'react'
import * as ReactBootStrap from "react-bootstrap";
import './styles/fees.css';

const Fees=()=>{
    const Fees=[
                  {Fees_Breakdown:"", Program:"", Amount_Due:""},
                  {Fees_Breakdown:"", Program:"", Amount_Due:""},
                  {Fees_Breakdown:"", Program:"", Amount_Due:""},
                  {Fees_Breakdown:"", Program:"", Amount_Due:""},
                  {Fees_Breakdown:"", Program:"", Amount_Due:""},
                  {Fees_Breakdown:"", Program:"", Amount_Due:""},
                  {Fees_Breakdown:"", Program:"", Amount_Due:""},
                  {Fees_Breakdown:"", Program:"", Amount_Due:""},
                  {Fees_Breakdown:"", Program:"", Amount_Due:""},
                  {Fees_Breakdown:"", Program:"", Amount_Due:""},
                  {Fees_Breakdown:"", Program:"", Amount_Due:""},
                  {Fees_Breakdown:"", Program:"", Amount_Due:""},
                  {Fees_Breakdown:"", Program:"", Amount_Due:""},
                  {Fees_Breakdown:"", Program:"", Amount_Due:""},
                  {Fees_Breakdown:"", Program:"", Amount_Due:""},
                ]
    const renderFees=(fees,index)=>{
      return(
        <tr key={index}> 
        <td>{Fees.Fees_Breakdown}</td>
        <td>{Fees.Program}</td>
        <td>{Fees.Amount}</td>
        </tr>
      )
    }
  return (
        <div className="Fees">
        <ReactBootStrap.Table striped bordered hover>
  <thead>
    <tr>
      <th>Fee Breakdown</th>
      <th>Program</th>
      <th>Amount Due</th>
    </tr>
  </thead>
  <tbody>
  {Fees.map(renderFees)}
      
  </tbody>
</ReactBootStrap.Table>
        </div>
    );
}

export default Fees;