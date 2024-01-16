import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

interface Credentials {
  uname: string;
  pwd: string;
}

export default function Login({onDataFromChild}) {

  const navigate = useNavigate();
  const [username, setusername] = useState<string>("")
  const [password, setpassword] = useState<string>("")
  const [status, setstatus] = useState<string>("")
  const [err, seterr] = useState<string>('')

  if (status === "success") {
    onDataFromChild(true)
    // Redirect to the home page if successfully login
    navigate('/home');
    return <></>;
  }

  async function HandleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void>  {
    e.preventDefault()     // to prevent page reload when submit
    try {
      await checkCredential(username, password)
      setstatus("success")
      seterr("")
    }
    catch (err1) {
      seterr(err1.message)
      console.log(err1.message)
    }

  }

  return (
    <div>
      <center>
        <br /><br /><br /><br />
        <h1>CRUD APP</h1>
        <br />
        <form onSubmit={HandleSubmit}>
        <div style={{ width: "40%", margin: "30px" }}>
          <div className="input-group input-group-lg">
          <span className="input-group-text" id="inputGroup-sizing-sm">USER NAME</span>
            <input
              value={username} onChange={(e) => setusername(e.target.value)}
              type="text"
              className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
          </div>
            <br />
          <div className="input-group input-group-lg">
          <span className="input-group-text" id="inputGroup-sizing-sm">PASSWORD</span>
            <input
              value={password} onChange={(e) => setpassword(e.target.value)}
              type="text"
              className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
          </div>


          
          <br /><br />
          <button className="btn btn-success" disabled={username.length === 0 || password.length === 0}>Log In</button>
          <br /><br />
          <h2>{err}</h2>
          </div>
        </form>
      </center>
    </div>
  )
}

// function to check username and passwrod

function checkCredential(username: string, password: string):Promise<void> {
  const credentials: Credentials[] = [
    { uname: 'aceinfoway', pwd: 'abc' },
    { uname: 'a', pwd: 'a' },
    { uname: 'harshit', pwd: 'abc' },
    { uname: 'parth', pwd: 'abc' },
    { uname: 'kirtan', pwd: 'abc' },
    { uname: 'sagar', pwd: 'abc' },
    { uname: 'meet', pwd: 'abc' }
  ]

  return new Promise((resolve, reject) => {
    let isUser = credentials.findIndex((value) => value.uname === username && value.pwd === password)
    if (isUser > -1) {
      resolve()
    }
    else {
      reject(new Error("Username or password does not match !!!"))
    }
  })
}