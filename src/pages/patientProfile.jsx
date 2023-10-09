import { collection, doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";


export default function PatientProfile () {

    const [patient, setPatient] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const docRef = doc(collection(db, 'patient-profiles'), id);

        getDoc(docRef)
        .then((doc) => {
            console.log(doc.data());
            setPatient(doc.data())
        })
    }, [id])


    return (
        <>
            <div className="patient-profile-page-wrapper mt-5 container">
                <div className="row">
                    <div className="col-lg-12 d-flex flex-column  ">


                        <h3 style={{ color: 'gray' }} className="app-heading">
                            { patient.name }
                        </h3>
                        <span className="j-date">
                            Member Since 2023
                        </span>

                        <hr />

                        <h5 style={{ color: 'gray' }} className="app-heading">
                            Basic 
                        </h5>

                        <span className="info">
                            Date of Birth :<strong> { patient.dob }</strong>
                        </span>
                        
                        <span className="info">
                            Email Address :<strong> { patient.emailAddress } </strong>
                        </span>
                        
                        <span className="info">
                            Phone Number :<strong> { patient.phoneNumber }</strong>
                        </span>
                        
                        <span className="info">
                            Home Address :<strong>{ patient.homeAddress }</strong>
                        </span>

                        <hr />

                        <h5 style={{ color: 'gray' }} className="app-heading">
                            Emergency Contact Information
                        </h5>

                        <span className="info">
                            Emergency Contact :<strong>{ patient.emerContact }</strong>
                        </span>
                        
                        <span className="info">
                            Mobile :<strong> { patient.emerNumber }</strong>
                        </span>
                        
                        <span className="info">
                            Relation with Emergency Contact :<strong>{ patient.emerContactRelation }</strong>
                        </span>
                        
                        <hr />
                        
                        <h5 style={{ color: 'gray' }} className="app-heading">
                            Work Information
                        </h5>

                        <span className="info">
                            Occupation and ergonomics: <strong>{ patient.occupationAndErgonomics }</strong>
                        </span>
                        
                        <hr />
                        
                        <h5 style={{ color: 'gray' }} className="app-heading">
                            Health Information
                        </h5>

                        <span className="info">
                            Health Objective : <strong> { patient.healthObjective }</strong>
                        </span>
                        
                        <span className="info">
                            Been to Health Practitioner Before : <strong>{ patient.seenPractitionerBefore }</strong>
                        </span>
                        
                        <span className="info">
                            GP and/or Specialist name and practice : <strong>{ patient.GPNamePractice }</strong>
                        </span>
                        
                        <span className="info">
                            Medications : <strong>{ patient.medications }</strong>
                        </span>
    
                        <span className="info">
                            Dose : <strong>{ patient.dose }</strong>
                        </span>
                        
                        
                        <span className="info">
                            Allergies : <strong> {patient.allergies } </strong>
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




