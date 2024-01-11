import React, { useState, useEffect } from 'react'
import axios from 'axios';
import deleteimg from '../components/delete.png'
import Form from './Form';
import { DataContext } from './DataContext';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default function Product() {

    const [userData, setuserData] = useState({ hits: [] });
    const [deleteid, setdeleteid] = useState(-1);
    const [existingData,setexistingdata] =useState(JSON.parse(localStorage.getItem('formData')) || []);

    console.log(existingData)

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios(
                "https://jsonplaceholder.typicode.com/users"
            );  
            setuserData({ hits: data });
        };
        fetchData();
        console.log(userData)
    }, [setuserData]);

    function HandleRemoveTask() {
        let temparr = userData.hits.filter(item => item.id !== deleteid)
        setdeleteid(-1)
        setuserData({ hits: temparr })

    }

    function HandleAddTask() {
        return (
            <div>
                <h1>sjdhiui</h1>
                <DataContext.Provider value={userData}>
                    <Form />
                </DataContext.Provider>
            </div>
        )
    }



    return (
        <div>
            <Navbar />

            <br /><br />
            <center>
                <h2>User Data</h2>
            </center>
            <Link to='/form'>
                <button type="button" className="btn btn-success" onClick={HandleAddTask} style={{ float: "right", marginRight: "50px" }}>ADD</button>
            </Link>
            <br /><br />




            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Option</th>
                    </tr>
                </thead>

                <tbody>

                    {userData.hits &&
                        userData.hits.map(item => (
                            <tr>
                                <th scope='row'>{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td component="td" >
                                    <button onClick={() => setdeleteid(item.id)} type="button"
                                        className="btn btn-light btn-sm"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal">
                                        <img src={deleteimg} alt='img missing' style={{ height: "25px", width: "25px" }} />
                                    </button>
                                </td>
                            </tr>

                        ))}
                    {existingData &&
                        existingData.map(item => (
                            <tr>
                                <th scope='row'>{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td component="td" >
                                    <button onClick={() => setdeleteid(item.id)} type="button"
                                        className="btn btn-light btn-sm"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal">
                                        <img src={deleteimg} alt='img missing' style={{ height: "25px", width: "25px" }} />
                                    </button>
                                </td>
                            </tr>

                        ))}
                </tbody>
            </table>



            {/* Pop-up Box jsx code */}

            <section id='pop-up-box'>
                {/* Modal */}
                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Confirm!
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="modal-body">Are you sure you want to delete this record?</div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    No
                                </button>
                                <button onClick={HandleRemoveTask} type="button" className="btn btn-primary" data-bs-dismiss="modal">
                                    Yes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
