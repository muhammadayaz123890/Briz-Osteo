import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebase";


export default function Booking() {

    const navigate = useNavigate();
    const [uid, setUID] = useState('null');
    const modal = document.querySelector('.modal-wrapper')

    const hideModal = event => {
        modal.style.display = 'none';
    }

    const showModal = event => {
        modal.style.display = 'flex';
    }

    // const client = TwilioSDK('AC31d89db48c235db02f989924513f084b','510d441913ff4e00ede9f38f60116815');

    const AppointmentSubmitHandler = async (event) => {

        const inputs = document.getElementsByTagName('input');

        const name = inputs[0].value;
        const email = inputs[1].value;
        const phoneNumber = inputs[2].value;
        const service = document.getElementById('service-id').value;
        const staff = document.getElementById('staff-id').value;
        let dateTime = inputs[3].value;
        let date = dateTime.split('T')[0];
        let time = dateTime.split('T')[1];
        const desc = document.getElementById('desc-id').value;

        if(auth.currentUser.uid) {
            setUID(auth.currentUser.uid);   
        };
        addDoc(collection(db, 'appointments'), {
            user: uid,
            name,
            email,
            phoneNumber,
            service,
            staff,
            date,
            time,
            desc
        }).then(() => {

            showModal();

            addDoc(collection(db, 'notifications'), {
                title: 'Appointment Booked',
                content: `An appointment has been placed for ${staff} at ${dateTime}`,
                is_read: false
            })
        });
    };



    return (
        <>

            <div className="modal-wrapper">
                <div className="success-modal d-flex flex-column justify-content-start align-items-center">
                    <h4 class="mt-4">
                        Booking Confirmation 
                    </h4>
                    <span className="conf-mess">
                        You have successfully placed an appointment
                    </span>

                    <h5 className="mt-5 p-5" style={{color:'gray', textAlign:'center'}}>
                        Do you want to add this to your Google Calendar ?
                    </h5>

                    <a onClick={hideModal} href="https://calendar.google.com/calendar/u/0/r" className="btn btn-primary" target="_blank" > <i className="fas fa-calendar  mx-3"></i> Add To Your Google Calendar</a>
                    <Link onClick={hideModal} className="mt-3" to="/">Continue without Adding</Link>

                </div>
            </div>

            <div className="booking-wrapper">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        <h3 className="booking-heading" style={{ width: 'fit-content' }}>Book Now</h3>
                    </div>
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="form col-lg-8 col-md-10 col-sm-12">
                            <form onSubmit={AppointmentSubmitHandler}>
                                <div className="service-selection">

                                    <label htmlFor="">Name</label>
                                    <input required placeholder="your name please..." type="text" className="form-control mb-4" />

                                    <label htmlFor="">Email Address</label>
                                    <input required placeholder="your email address..." type="text" className="form-control  mb-4" />

                                    <label htmlFor="">Phone Number</label>
                                    <input required type="text" placeholder="Example: +619324...." className="form-control  mb-4" />

                                    <label htmlFor="">Services</label>
                                    <div className="serv-con  mb-4">
                                        <div class="mb-3">
                                            <select required class="form-select form-select-lg" name="" id="service-id">
                                                <option>Service</option>
                                                <option value="Standard APT">Standard APT</option>
                                                <option value="New Patient APT">New Patient APT</option>
                                                <option value="Three Month Health Package">Three Month Health Package</option>
                                                <option value="Cold Laser Therapy">Cold Laser Therapy</option>
                                            </select>
                                        </div>
                                    </div>

                                    <label htmlFor="">Staff</label>
                                    <div className="serv-con  mb-4">
                                        <div class="mb-3">
                                            <select required class="form-select form-select-lg" name="" id="staff-id">
                                                <option >Staff</option>
                                                <option value="Dr Kate Pascoe">Dr.Kate Pascoe</option>
                                            </select>
                                        </div>
                                    </div>

                                    <label htmlFor="">Pick Date and Time</label>
                                    <br />
                                    <input required type="datetime-local" className="form-control mb-4" name="" id="" />

                                    <label htmlFor="">Description</label>
                                    <br />
                                    <div className="row">

                                        <textarea rows='10' id="desc-id" className="form-control" placeholder="Description of your appointment (optional)....." ></textarea>
                                    </div>

                                    <button type="button" onClick={AppointmentSubmitHandler} className="btn  btn-outline-primary mt-4">Place Appointment</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


