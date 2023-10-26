import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../firebase";



export default function Patients () {

    const [patients, setPatients] = useState([]);

    useEffect(() => {
      const unsubscribe = onSnapshot(collection(db,'patient-profiles'), (snapshot) => {
        const patientsArray = [];
        snapshot.forEach((doc) => {
          patientsArray.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setPatients(patientsArray);
        console.log(patientsArray); // Access the updated array here
      });
  
      return () => {
        // Unsubscribe from the snapshot listener when the component unmounts
        unsubscribe();
      };
    }, []);



    return (
        <>
            <div className="members-page-wrapper container">
                <div className="row">
                    <h2 style={{ color: 'gray' }} className="app-heading">
                        Patients
                    </h2>
                </div>

                <div className="row mt-5 d-flex flex-column appointments">
                    <table class="table align-middle mb-0 bg-white">
                        <thead class="bg-light">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>DOB</th>
                                <th>Phone Number</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                            patients.map((patient) => {
                                return (
                                    <tr>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <div class="ms-3">
                                                <p class="fw-bold mb-1">{patient.name}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                                <p class="text-muted mb-0">{patient.emailAddress}</p>
                                    </td>
                                    <td>
                                        <p class="text-muted mb-0">{patient.dob}</p>
                                    </td>
                                    <td>
                                        {patient.phoneNumber}
                                    </td>
                                    <td>
                                        <Link to={`/admin/patient/${patient.id}`} className="btn btn-primary">
                                            See profile
                                        </Link>
                                    </td>
                                </tr>
                                )
                            })

}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}



