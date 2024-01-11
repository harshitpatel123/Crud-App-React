import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const [status, setstatus] = useState("")
  const [err, seterr] = useState('')

  if (status === "success") {
    // Redirect to the home page
    navigate('/home');
    return null;
  }

  async function HandleSubmit(e) {
    e.preventDefault() 
    try {
      await checkCredential(username,password)
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
        <h1>Sign In Form</h1>
        <br />
        <form onSubmit={HandleSubmit}>
          <label htmlFor="">USER NAME : &nbsp;&nbsp;</label>
          <input value={username} onChange={(e)=>setusername(e.target.value)} type="text" />
          <br />
          <label htmlFor="">Password : &nbsp;&nbsp;</label>
          <input value={password} onChange={(e)=>setpassword(e.target.value)} type="text" />
          <br /><br />
          <button disabled={username.length === 0 || password.length === 0}>Log In</button>
          <br /><br />
          <h2>{err}</h2>
        </form>
      </center>
    </div>
  )
}

function checkCredential(username,password) {
  const credentials = [
    {uname:'harshit' , pwd : 'abc'},
    {uname:'parth' , pwd : 'abc'},
    {uname:'kirtan' , pwd : 'abc'},
    {uname:'sagar' , pwd : 'abc'},
    {uname:'meet' , pwd : 'abc'}
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