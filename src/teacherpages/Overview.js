import React from 'react'
import {useEffect} from 'react';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import "../pages/styles/Overview.css"
import Card from 'react-bootstrap/Card'


export default function Overview()
{
   const teacherID=useSelector((state)=>state.teacherID);
   const [teacher, setteacher]= useState([]);
   
   useEffect(()=> {
       fetchInfo();
   }, [])

async function fetchInfo()
{
const response= await fetch(`http://localhost:3001/api/employee/${teacherID}`);
    const rep= await response.json();
    console.log(rep);
    setteacher(rep);
}

return(
     <div>
       {teacher.map((teacher) =>
       <div>
         <Card className="text-center">
           <Card.Header><h1>Overview</h1></Card.Header>
           <Card.Body>
             <Card.Text style = {{fontSize:30}}>
              Teacher Name: {teacher.Fname} {teacher.Lname}
             </Card.Text>
             <Card.Text style = {{fontSize:30, paddingTop:75}}>
              Phone Number: {teacher.Phone_num}
             </Card.Text>
             <Card.Text style = {{fontSize:30, paddingTop:75}}>
              Address: {teacher.Address}
             </Card.Text>
             <Card.Text style = {{fontSize:30, paddingTop:75}}>
              Medical ID #: {teacher.MR_Id}
             </Card.Text>
           </Card.Body>
       </Card>   
       </div>
         )}
     </div>
  )
}