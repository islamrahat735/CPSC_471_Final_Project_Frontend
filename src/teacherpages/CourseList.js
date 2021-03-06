import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Table from 'react-bootstrap/Table'
import {useEffect} from 'react';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function CourseList() {
    
    const teacherID=useSelector((state)=>state.teacherID);
    const [classes, setClasses] = useState([])
    const [classList, setClasslist] = useState([])
    const [chosenClass, setChosenClass] = useState('')
    var date = '';
    let test = new Date;
    const [currentDate, setCurrentDate] = useState((new Date ).toISOString().substring(0,10));

    useEffect(() => {
        fetchClasses()
        setCurrentDate((new Date ).toISOString().substring(0,10))
    }, [])

    async function fetchClasses(){
        const response= await fetch(`http://localhost:3001/api/class/teacher/${teacherID}`);
        const rep= await response.json();

        
        console.log(rep);
        setClasses(rep);
    }

    async function fetchClasslist(id){
        const response = await fetch(`http://localhost:3001/api/class/students/${id}`);
        const rep = await response.json();
        const result = rep.map((student) => {
            student.isPresent = false;
            return student;
        })
        setClasslist(result);
    }

    
    function markPresent(childId){
        const attendanceInfo = {
            chId : childId,
            cId : chosenClass.C_Id,
            date : currentDate
        }
        
        fetch(`http://localhost:3001/api/childAttendsClass/`, { //make employee
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify(attendanceInfo)
      })
    }

    function markAbsent(childId){
        fetch(`http://localhost:3001/api/childAttendsClass/${childId}/${chosenClass.C_Id}/${currentDate}`, {
            method:'DELETE'
        })
        .catch((error) => {
            console.log("Hi")
            console.error('Error:', error)
          })
    }

    function saveDate(val)
    {
        date = val.target.value;
    }
    
    return (
        <div>
            <Row>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Classes
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {classes.map((course) => <Dropdown.Item as="button" onClick={() =>{ 
                        setChosenClass(course);
                        fetchClasslist(course.C_Id)}}>{course.Class_name +", " + course.C_Id}</Dropdown.Item>
                    )} 
                </Dropdown.Menu>
                {/* <input style={{fontSize:17, marginLeft:30}}placeholder='Enter Date YYYY-MM-DD' onChange={saveDate}></input>
                <Button variant="success">Success</Button>{' '} */}


                
            </Dropdown>
            </Row>

            <h4>You Chose: {chosenClass.Class_name}</h4>
            <h4>Today's Date Is: {currentDate}</h4>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Present</th>
                    <th>Absent</th>
                    
                    </tr>
                </thead>
                <tbody>
                    {classList.map((student) => <tr>
                                                    <td>{student.Child_Id}</td>
                                                    <td>{student.Fname}</td>
                                                    <td>{student.Lname}</td>
                                                    <td style={{width:15}}><InputGroup.Checkbox aria-label="Checkbox for following text input" onClick = {() => markPresent(student.Child_Id)}/></td>
                                                    <td style={{width:15}}><InputGroup.Checkbox aria-label="Checkbox for following text input" onClick = {() => markAbsent(student.Child_Id)}/></td>
                                                </tr>)}
                </tbody>
            </Table>

        </div>

                        
        
        
    )
}
