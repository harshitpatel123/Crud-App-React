import React, { useState } from 'react'
import { DataContext } from './DataContext'
import Navbar from './Navbar'
let index = 11;
export default function Form() {
    const [name,setname] = useState('')
    const [username,setusername] = useState('')
    const [email,setemail] = useState('')
    const [street,setstreet] = useState('')
    const [suite,setsuite] = useState('')
    const [city,setcity] = useState('')
    const [zipcode,setzipcode] = useState(0)
    const [phone,setphone] = useState(0)
    const [website,setwebsite] = useState('')

    const HandleSave = (e) => {
        e.preventDefault()          // to stop reloading the page
        const formData = [{
            id: index++,
            name,
            username,
            email,
            address: {
              street,
              suite,
              city,
              zipcode,
            },
            phone,
            website,
          }];
      
          // Save the form data to local storage
          const existingData = JSON.parse(localStorage.getItem('formData')) || [];
          const newData = [...existingData, formData];
          localStorage.setItem('formData', JSON.stringify(newData));
      };

    return (
        <div>
            <Navbar/>

                <center><h1>ADD / EDIT FORM</h1></center>
            <div style={{width:"70%",margin:"auto"}}>



                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">
                            Name
                        </label>
                        <input value={name} onChange={(e)=>setname(e.target.value)} type="text" className="form-control"/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">
                            User Name
                        </label>
                        <input value={username} onChange={(e)=>setusername(e.target.value)} type="text" className="form-control" id="inputPassword4" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">
                            E-Mail
                        </label>
                        <input
                            value={email} onChange={(e)=>setemail(e.target.value)}
                            type="email"
                            className="form-control"
                            id="inputAddress"
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputAddress2" className="form-label">
                            Street
                        </label>
                        <input
                        value={street} onChange={(e)=>setstreet(e.target.value)}
                            type="text"
                            className="form-control"
                            id="inputAddress2"
                            placeholder="Apartment, studio, or floor"
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">
                            Suite
                        </label>
                        <input value={suite} onChange={(e)=>setsuite(e.target.value)} type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">
                            City
                        </label>
                        <input value={city} onChange={(e)=>setcity(e.target.value)} type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label">
                            Zip
                        </label>
                        <input value={zipcode} onChange={(e)=>setzipcode(e.target.value)} type="text" className="form-control" id="inputZip" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">
                            Phone
                        </label>
                        <input value={phone} onChange={(e)=>setphone(e.target.value)} type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">
                            Website
                        </label>
                        <input value={website} onChange={(e)=>setwebsite(e.target.value)} type="text" className="form-control" id="inputCity" />
                    </div>
                    
                    <div className="col-12">
                        <button onClick={HandleSave} className="btn btn-primary">
                            SAVE
                        </button>
                    </div>
                </form>


            </div>
        </div>
    )
}
