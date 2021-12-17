import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Table from 'react-bootstrap/Table'
import {useEffect} from 'react';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'

export default function CourseList() {
    
    const teacherID=useSelector((state)=>state.teacherID);
    const [classes, setClasses] = useState([])
    const [classList, setClasslist] = useState([])
    var date = '';

    useEffect(() => {
        fetchClasses()
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
        setClasslist(rep);
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
                    {classes.map((course) => <Dropdown.Item as="button" onClick={() =>{ fetchClasslist(course.C_Id)}}>{course.Class_name +", " + course.C_Id}</Dropdown.Item>
                    )} 
                </Dropdown.Menu>
                <input style={{fontSize:17, marginLeft:30}}placeholder='Enter Date YYYY-MM-DD' onChange={saveDate}></input>

                
            </Dropdown>
            </Row>

            <h4>You Chose: Math</h4>

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
                                                    <td style={{width:15}}><InputGroup.Checkbox aria-label="Checkbox for following text input" onClick = {() => console.log("Present")}/></td>
                                                    <td style={{width:15}}><InputGroup.Checkbox aria-label="Checkbox for following text input" onClick = {() => console.log("Absent")}/></td>
                                                </tr>)}
                </tbody>
            </Table>

        </div>

    
        
        
    )
}
