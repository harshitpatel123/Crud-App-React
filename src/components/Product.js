import React, { useState, useEffect } from 'react'
import axios from 'axios';
import deleteimg from '../components/delete.png'
import Navbar from './Navbar';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Product() {

    const navigate = useNavigate();
    const location = useLocation();
    const updatedData = location.state && location.state.updatedData;
    
    
    const existingData = JSON.parse(localStorage.getItem('AllUserData')) || []

    const [userData, setuserData] = useState([]);
    const [deleteid, setdeleteid] = useState(-1);
    


    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios(
                "https://jsonplaceholder.typicode.com/users"
            );
            let tempdata = [...data,...existingData]
            setuserData(tempdata);
            localStorage.setItem('AllUserData', JSON.stringify(tempdata));
        };
        const checkData = JSON.parse(localStorage.getItem('AllUserData')) || null;
        if(checkData === null){   
            fetchData();
        }
        else{
            setuserData(checkData)
            console.log("lll")
        }
        
    }, []);  

    useEffect(() => {
        setTimeout(() => {
            
            if (location.state !== null) {
                const allUserData = JSON.parse(localStorage.getItem('AllUserData')) || [];
                console.log("in the effect")
                setuserData(allUserData);
            }
        }, 1000);
    }, [location.state]);


    function HandleRemoveTask() {
        let temparr = userData.filter(item => item.id !== deleteid)
        setdeleteid(-1)
        setuserData(temparr)

    }

    function HandleAddTask() {
        navigate('/form')
    }

    function HandleEditTask(edititem) {
        localStorage.setItem('AllUserData', JSON.stringify(userData));
        navigate('/form', { state: { editData: edititem } });
    }



    return (
        <div>
            <Navbar />

            <br /><br />
            <center>
                <h2>User Data</h2>
            </center>

            <button type="button" className="btn btn-success" onClick={HandleAddTask} style={{ float: "right", marginRight: "50px" }}>ADD</button>

            <br /><br />




            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Update</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>

                <tbody>

                    {userData &&
                        userData.map(item => (
                            <tr>
                                <th scope='row'>{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td component="td" >
                                    <button onClick={() => HandleEditTask(item)} type="button" className="btn btn-light btn-sm">
                                        <b> Edit</b>
                                    </button>
                                </td>
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
