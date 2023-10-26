import { doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../firebase";




export default function SetStatus() {

    const [pats, setPats] = useState('');
    const [exp, setExps] = useState('');
    const [members, setMember] = useState('');
    const [checks, setChecks] = useState('');

    const StatusSetHandler = event => {

        const docRef = doc(db, 'status', 'RleX6w0H4bXfaXivEqeu');

        updateDoc(docRef, {
            daily_checkups : checks,
            experience: exp,
            satisfied_patients: pats,
            site_members: members
        }).then(response => {
            setPats('');
            setChecks('');
            setMember('');
            setExps('');
        }).catch(err => {
            console.log(err);
        })


    }


    return (
        <>
            <div className="status-wrapper">
                <div className="container">
                    <div className="row">
                        <h2 style={{ color: 'gray' }} className="app-heading">
                            Upcoming Appointments
                        </h2>
                    </div>

                    <div className="row mt-5 d-flex flex-column appointments">
                        <div className="col-lg-6 d-flex mt-3 flex-column">
                            <div className="stat mt-4">
                                <label className=" form-label" htmlFor="">Satisfied Patients</label>
                                <input value={pats} onChange={e => {setPats(e.target.value)}} type="text" className="form-control" />
                            </div>
                            <div className="stat mt-4">
                                <label className=" form-label" htmlFor="">Years of Experience</label>
                                <input  value={exp} onChange={e => {setExps(e.target.value)}}  type="text" className="form-control" />
                            </div>
                            <div className="stat mt-4">
                                <label className=" form-label" htmlFor="">Site Members</label>
                                <input  value={members} onChange={e => {setMember(e.target.value)}}  type="text" className="form-control" />
                            </div>
                            <div className="stat mt-4">
                                <label className=" form-label" htmlFor="">Daily Checkups</label>
                                <input value={checks} onChange={e => {setChecks(e.target.value)}}  type="text" className="form-control" />
                            </div>
                            <div className="btn mt-5">
                                <button onClick={StatusSetHandler} className="btn btn-primary">
                                    Save Status
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



