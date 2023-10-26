import React, { useEffect, useState } from "react";
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../firebase';




export default function PatientForm() {

    const [uid, setUID] = useState('null');
    const navigate = useNavigate();


    useEffect(() => {
        if(auth.currentUser) {
            setUID(auth.currentUser.uid);
            document.getElementById('login-modal-wrapper-id').style.display = 'none';
        }
    }, []);

    const ProfileSubmitHandler = event => {
        event.preventDefault();


        const inputs = document.getElementsByTagName('input');

        const name = inputs[0].value;
        const dob = inputs[1].value;
        const emailAddress = inputs[2].value;
        const phoneNumber = inputs[3].value;
        const homeAddress = inputs[4].value;

        const emerContact = inputs[5].value;
        const emerNumber = inputs[6].value;
        const emerContactRelation = inputs[7].value;
        const occupationAndErgonomics = inputs[8].value;
        const healthObjective = inputs[9].value;
        const seenPractitionerBefore = document.getElementById('practitioner-before').value;
        const GPNamePractice = inputs[10].value;
        const medications = inputs[11].value;
        const dose = inputs[12].value;
        const allergies = document.getElementById('allergies').value;
        const hospitalizationsAndSurgeries = document.getElementById('hospAndSurg').value;

        let id;

        addDoc(collection(db, 'patient-profiles'), {
            uid,
            name,
            dob,
            emailAddress,
            phoneNumber,
            homeAddress,
            emerContact,
            emerNumber,
            emerContactRelation,
            occupationAndErgonomics,
            healthObjective,
            seenPractitionerBefore,
            GPNamePractice,
            medications,
            dose,
            allergies,
            hospitalizationsAndSurgeries

        }).then(docRef => {
            id = docRef.id;
            navigate(`/patient/${id}`)

        })
    }





    return (
        <>  
            <div id="login-modal-wrapper-id" className="login-modal-wrapper">
                <div className="login-modal d-flex flex-column">
                    <h2>Please Create an Account or Log In to proceed</h2>
                    <Link to='/login' className="btn btn-primary my-4">Login</Link>
                    <Link to='/register' className="btn btn-dark">Create an Account</Link>
                </div>
            </div>

            
            <div className="booking-wrapper">
                <div className="container">

                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="form col-lg-8 col-md-10 col-sm-12">
                            <form onSubmit={ProfileSubmitHandler}>
                                <div className="service-selection">
                                    <div className="row d-flex justify-content-center align-items-center">
                                        <h3 className="booking-heading" style={{ width: 'fit-content' }}>Basic Info</h3>
                                    </div>
                                    <label htmlFor="">Patient full name</label>
                                    <input required placeholder="your name please..." type="text" className="form-control mb-4" />


                                    <label htmlFor="">Date of Birth</label>
                                    <input required placeholder="your email address..." type="date" className="form-control  mb-4" />

                                    <label htmlFor="">Email Address</label>
                                    <input required type="text" className="form-control  mb-4" />

                                    <label htmlFor="">Phone Number</label>
                                    <input required type="text" placeholder="Example: +619324...." className="form-control  mb-4" />

                                    <label htmlFor="">Home Address</label>
                                    <input required type="text" placeholder="" className="form-control  mb-4" />

                                    <hr />

                                    <div className="row d-flex justify-content-center align-items-center">
                                        <h4 className="booking-heading" style={{ width: 'fit-content' }}> Emergency Contact Info</h4>
                                    </div>

                                    <label htmlFor="">Emergency Contact</label>
                                    <input required type="text" placeholder="" className="form-control  mb-4" />

                                    <label htmlFor="">Mobile</label>
                                    <input required type="text" placeholder="" className="form-control  mb-4" />

                                    <label htmlFor="">Emergency Contact's Relationship to you</label>
                                    <input required type="text" placeholder="" className="form-control  mb-4" />

                                    <div className="row d-flex justify-content-center align-items-center">
                                        <h4 className="booking-heading" style={{ width: 'fit-content' }}>Work Info</h4>
                                    </div>

                                    <label htmlFor="">Occupation and ergonomics(eg sit down desk)</label>
                                    <input required type="text" placeholder="" className="form-control  mb-4" />

                                    <div className="row d-flex justify-content-center align-items-center">
                                        <h4 className="booking-heading" style={{ width: 'fit-content' }}>Health Info</h4>
                                    </div>

                                    <label htmlFor="">What is your health objective for seeing an Osteopath? *</label>
                                    <input required type="text" placeholder="" className="form-control  mb-4" />

                                    <label htmlFor="">Have you seen health Practitioners for your health condition or complaint before ?</label>
                                    <div className="serv-con  mb-4">
                                        <div class="mb-3">
                                            <select required class="form-select form-select-lg" name="" id="practitioner-before">
                                                <option >Not selected</option>
                                                <option value='Yes'>Yes</option>
                                                <option value='No'>No</option>
                                            </select>
                                        </div>
                                    </div>

                                    <label htmlFor="">GP and/or specialist's name and practice name *</label>
                                    <input required type="text" placeholder="" className="form-control  mb-4" />

                                    <div className="row">
                                        <h5 className="mt-5">Please list any medications that you are currently taking</h5>
                                    </div>

                                    <label htmlFor="">Medications</label>
                                    <input required type="text" placeholder="" className="form-control  mb-4" />

                                    <label htmlFor="">Dose</label>
                                    <input required type="text" placeholder="" className="form-control  mb-4" />

                                    <div className="row">
                                        <h5 className="mt-5">Please list any Allergies </h5>
                                    </div>


                                    <label htmlFor="">Allergies</label>
                                    <div className="row">
                                        <textarea name="" className="form-control" id="allergies" rows="5"></textarea>
                                    </div>

                                    <div className="row">
                                        <h5 className="mt-5">Please list any hospitalizations or surgeries</h5>
                                    </div>

                                    <label htmlFor="">Hospitalizations or Surgeries with Date in free text</label>
                                    <div className="row">
                                        <textarea name="" className="form-control" id="hospAndSurg" rows="5"></textarea>
                                    </div>

                                    <div className="row mt-5">
                                        <label className="btn btn-outline-secondary" htmlFor="report-file">
                                            Upload any relevant scans, reports or referals
                                        </label>
                                        <input type="file" name="" id="report-file" hidden />
                                    </div>

                                    <button type="submit" className="btn  btn-outline-primary mt-4">Create Profile</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


