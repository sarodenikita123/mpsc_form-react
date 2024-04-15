import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Show() {
    const [users, setUser] = useState([])

    async function fetchData(){
        const result = await axios.get('http://localhost:5000/users');
        setUser(result.data);
    }

    useEffect(()=>{
        fetchData();
    }, [])
  return (
    <>
        <table className="table table-dark table-striped">
            <thead>
                <tr>
                    <th>Name:</th>
                    <th>Email:</th>
                    <th>Number:</th>
                    <th>DOB:</th>
                    <th>Address:</th>
                    <th>Graduate:</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((obj)=>{
                        return(
                            <tr>
                                
                                <td>{obj.name}</td>
                                <td>{obj.email}</td>
                                <td>{obj.number}</td>
                                <td>{obj.dob}</td>
                                <td>{obj.address}</td>
                                <td>{obj.graduate}</td>
                                 <td>
                                    <NavLink to={`/user/update/${obj.id}`}><button className="btn btn-outline-warning btn-sm me-3">UPDATE</button></NavLink>
                                    <NavLink to={`/user/delete/${obj.id}`}><button className="btn btn-outline-danger btn-sm" >DELETE</button></NavLink>
                                </td>
                            </tr>
                    )
                    })
                }
            </tbody>
        </table>
    </>
  )
}

export default Show