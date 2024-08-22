import { useState } from 'react'
function App() {
  const [username,setUserName] = useState("Enter your name");
  const [fathername,setFatherName] = useState("Enter your father name");
  const [rollnumber,setRollNumber] = useState("Enter your roll number");
  const [timing,setTiming] = useState("Enter your class timing");
  const [sirname,setSirName] = useState("Enter your sir name");
  const [students,setStudent] = useState([]);

  const addStudent = () => {
    // check if all fields are filled
    if(!username) return alert('Please add Student name')
    if(!fathername) return alert('Please add Father name')
    if(!rollnumber) return alert('Please add Roll name')
    if(!sirname) return alert('Please add Sir name')
    if(!timing) return alert('Please add Class timing')

    // const arr = [...students,username,fathername,rollnumber];
    // console.log(arr);
    // setStudent(arr);
    // setFatherName(arr);
    // setRollNumber(arr);

    const newStudent = {username,fathername,rollnumber,sirname,timing};
    setStudent([...students,newStudent])

    // Clear input fields
    setUserName("");
    setFatherName("");
    setRollNumber("");
    setSirName("")
    setTiming("")
  }

  return (
    <>
    <div className='container'>
      <center><h2>Student Form</h2></center>
      <div className='form-group'>
        <input placeholder='Student-name' value={username} onChange={(e)=>setUserName(e.target.value)} />
        <input placeholder='Father-name' value={fathername} onChange={(e)=>setFatherName(e.target.value)} />
        <input placeholder='Roll-no' value={rollnumber} onChange={(e)=>setRollNumber(e.target.value)} />
        <input placeholder='Sir-name' value={sirname} onChange={(e)=>setSirName(e.target.value)} />
        <input placeholder='Class-timing' value={timing} onChange={(e)=>setTiming(e.target.value)} />
        <button onClick={addStudent}>SUBMIT</button>
        {/* {students.map((student,index)=>(<h3 key={index}>{student}</h3>))} */}
      </div>

      <center><h2>Students List</h2></center>
      <table border="1" style={{ width: '100%', textAlign: 'left', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Father's Name</th>
            <th>Roll No</th>
            <th>Sir Name</th>
            <th>Class Timing</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.username}</td>
              <td>{student.fathername}</td>
              <td>{student.rollnumber}</td>
              <td>{student.sirname}</td>
              <td>{student.timing}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      
    </>
  )
}
export default App