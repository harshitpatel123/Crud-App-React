import React from 'react'
import Navbar from './Navbar.tsx'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer.tsx'

export default function Home({ onLogout }) {
  const navigate = useNavigate()

  function HandleLogout() {
    onLogout();
    navigate('/');
  }
  return (
    <>
      <div>
        <Navbar />
        <button onClick={HandleLogout} className="btn btn-outline-danger" style={{float:'right',margin:"20px"}}>
            LOG OUT
          </button>
        <center>
          <div className='m-5'>
            <br /><br />
            <h1>Welcome To CRUD App </h1><br /><br /><br />
            <h2>In the product page you can see the data of users and perform CRUD operations on it</h2>

            <br /><br /><br /><br />
            <h1>Go To Product Page</h1>
          </div>
          <Link to='/product'>
            <button className='btn btn-success btn-lg'>GO</button>
          </Link>
          
        </center>
        <Footer />
      </div>
    </>
  )
}

