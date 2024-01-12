import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <center>
          <div className='m-5'>
            <h1>Welcome To CRUD App </h1><br /><br /><br />
            <h2>In the product page you can see the data of users and perform CRUD operations on it</h2>
            
            <br /><br /><br /><br />
            <h1>Go To Product Page</h1>
          </div>
          <Link to='/product'>
            <button className='btn btn-success btn-lg'>GO</button>
          </Link>
        </center>
      </div>
    </>
  )
}

