import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
    <div>
      <Navbar/>
      <center>
        <div className='m-5'>
      <h1>Go To Product Page</h1>
        </div>
      <Link to='/product'>
          <button className='btn btn-success btn-lg'>GO</button>
        </Link>
      </center>
    </div>
    </>
  )}

 