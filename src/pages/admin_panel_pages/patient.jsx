import React from "react";
import { useParams } from "react-router-dom";
import docPic from '../../images/dr-kate.png';
import { useState, useEffect } from "react";
import { doc, getDoc  } from "firebase/firestore";
import { db } from "../../firebase";


export default function Patient () {



    const { id } = useParams();
    const [patient, setPatient] = useState({});


    useEffect(() => {
        const fetchBlog = async () => {
          try {
            const patientRef = doc(db, 'patient-profiles', id);
            const patientSnapshot = await getDoc(patientRef);

            if (patientSnapshot.exists()) {
              const patientData = patientSnapshot.data();
              setPatient(patientData);
            } else {
              console.log('Document does not exist');
            }
          } catch (error) {
            console.error('Error fetching blog:', error);
          }
        };
    
        fetchBlog();
      }, [id]);



    return (
        <>
            <div className="patient-profile-page-wrapper container">
                <div className="row">
                    <h4 style={{ color: 'gray' }} className="app-heading">
                        Patient Profile
                    </h4>

                </div>
                <div className="row">
                    <div className="col-lg-12 d-flex flex-column  ">

                        <span className="j-date">
                            Member Since 2023
                        </span>

                        <h5 style={{ color: 'gray' }} className="app-heading">
                            { patient.name}
                        </h5>

                        <hr />

                        <h5 style={{ color: 'gray' }} className="app-heading">
                            Basic Info
                        </h5>

                        <span className="info">
                            Date of Birth :<strong> {patient.dob} </strong>
                        </span>
                        
                        <span className="info">
                            Email Address :<strong> {patient.emailAddress} </strong>
                        </span>
                        
                        <span className="info">
                            Phone Number :<strong> {patient.phoneNumber}</strong>
                        </span>
                        
                        <span className="info">
                            Home Address :<strong> {patient.homeAddress}</strong>
                        </span>

                        <hr />

                        <h5 style={{ color: 'gray' }} className="app-heading">
                            Emergency Contact Information
                        </h5>

                        <span className="info">
                            Emergency Contact :<strong> {patient.emerContact}</strong>
                        </span>
                        
                        <span className="info">
                            Mobile :<strong>+ {patient.emerNumber}</strong>
                        </span>
                        
                        <span className="info">
                            Relation with Emergency Contact :<strong>{patient.emerContactRelation}</strong>
                        </span>
                        
                        <hr />
                        
                        <h5 style={{ color: 'gray' }} className="app-heading">
                            Work Information
                        </h5>

                        <span className="info">
                            Occupation and ergonomics: <strong> { patient.occupationAndErgonomics}</strong>
                        </span>
                        
                        <hr />
                        
                        <h5 style={{ color: 'gray' }} className="app-heading">
                            Health Information
                        </h5>

                        <span className="info">
                            Health Objective : <strong> {patient.healthObjective}</strong>
                        </span>
                        
                        <span className="info">
                            Been to Health Practitioner Before : <strong>{patient.seenPractitionerBefore}</strong>
                        </span>
                        
                        <span className="info">
                            GP and/or Specialist name and practice : <strong>{ patient.GPNamePractice}</strong>
                        </span>
                        
                        <span className="info">
                            Medications : <strong>{ patient.medications}</strong>
                        </span>
                        
                        <span className="info">
                            Dose : <strong> {patient.dose }</strong>
                        </span>
                        
                        
                        <span className="info">
                            Allergies : <strong> {patient.allergies} </strong>
                        </span>
                        
                        
                        <hr />
                        
                        <h5 style={{ color: 'gray' }} className="app-heading">
                            Attached File(s)
                        </h5>


                        
                        <hr />
                    </div>
                </div>

            </div>
        </>
    )
}




