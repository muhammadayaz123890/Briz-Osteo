import React from "react";
import { db } from "../../firebase";
import { deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Appointments() {

    const [apps, setApps] = useState([]);

    useEffect(() => {
      const unsubscribe = onSnapshot(collection(db,'appointments'), (snapshot) => {
        const AppsArray = [];
        snapshot.forEach((doc) => {
          AppsArray.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setApps(AppsArray);
        console.log(AppsArray); 
      });
  
      return () => {
        unsubscribe();
      };
    }, []);

    
    return (
        <>
            <div className="appoint-page-wrapper container">
                <div className="row">
                    <h2 style={{ color: 'gray' }} className="app-heading">
                        Upcoming Appointments
                    </h2>
                </div>

                <div className="row mt-5 d-flex flex-column appointments">
                    <table class="table align-middle mb-0 bg-white">
                        <thead class="bg-light">
                            <tr>
                                <th>Staff</th>
                                <th>Service</th>
                                <th>Date - Time</th>
                                <th>Phone Number</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { apps.map(app => {

                                return (
                                    <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="ms-3">
                                                <p class="fw-bold mb-1">{app.staff}</p>
                                                <p class="text-muted mb-0">Available</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="fw-normal service mb-1">{app.service}</p>
                                    </td>
                                    <td>
                                        <p class="text-muted mb-0">{app.date}</p>
                                        <p class="text-muted mb-0">{app.time}</p>
                                    </td>
                                    <td>
                                        {app.phoneNumber}
                                    </td>
                                    <td>
                                        <Link className="btn btn-primary" to={`/admin/appointment/${app.id}`}>Appointment Details</Link>
                                    </td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}



