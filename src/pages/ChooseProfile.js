import React from 'react'
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import "./styles/chooseprofile.css"

export default function ChooseProfile() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {  //make fetch here instead of timeout
      setLoading(false)
    }, 8000)
  }, [])

    return (
      <div>

  <h1 style = {{textAlign: 'center', marginTop: 40}}>Pick which child you wish to view</h1>
  <div className = "cardfromtop">
  <table>
    <tr>
    <td><Card className = "profilecard" >

      <Card.Body>
        <Card.Title>John Doe </Card.Title>
      </Card.Body>
    </Card>
    </td>
    <td>
    <Card className = "profilecard" >
  <Card.Body>
    <Card.Title>Jane Doe</Card.Title>
  </Card.Body>
  </Card>
  </td>
  </tr>
  </table>
      </div>
      </div>
    )
}
