import { useEffect } from 'react';
import {useSelector } from 'react-redux';
import {useState} from 'react';
import "./styles/Overview.css"
import Card from 'react-bootstrap/Card'


export default function Overview()  
{
  const childID = useSelector((state) => state.childID);
  const [child, setChild] = useState([]);

  const [fees, setFees] = useState([]);

  useEffect(() => {
    fetchInfo();
  }, [])


  async function fetchInfo()
  {
    const response = await fetch(`http://localhost:3001/api/child/${childID}`);
        const rep = await response.json();
        console.log(rep);
        setChild(rep);

    const feeresponse = await fetch(`http:/`)
  }

  return (
    <div>
      {child.map((child) =>
      <div>
        <Card className="text-center">
          <Card.Header><h1>Overview</h1></Card.Header>
          <Card.Body>
            <Card.Text style = {{fontSize:30}}>
             Child Name: {child.Fname} {child.Lname}
            </Card.Text>
            <Card.Text style = {{fontSize:30, paddingTop:75}}>
             Program Name: {child.Prog_name}
            </Card.Text>
            <Card.Text style = {{fontSize:30, paddingTop:75}}>
             Date of Birth: {child.Dob}
            </Card.Text>
            <Card.Text style = {{fontSize:30, paddingTop:75}}>
             Status: {child.status}
            </Card.Text>
          </Card.Body>
      </Card>   
      </div>
        )}
    </div>
  )
}