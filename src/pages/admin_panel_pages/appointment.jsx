import React, { useId } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import docPic from '../../images/dr-kate.png';
import { useState, useEffect } from "react";
import { collection, deleteDoc, doc, getDoc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../firebase";


export default function Patient() {

    const { id } = useParams();
    const [appointment, setAppointment] = useState({});
    const [patientProfile, setPatientProfile] = useState({});
    const [userId, setUserId] = useState('');

    const navigate = useNavigate();

    

    useEffect(() => {
        const fetchBlog = async () => {
          try {
            const appointmentRef = doc(db, 'appointments', id);
            const appointSnapshot = await getDoc(appointmentRef);
    
            if (appointSnapshot.exists()) {
              const appointmentData = appointSnapshot.data();
              setAppointment(appointmentData);
              setUserId(appointmentData.user);
              
            } else {
              console.log('Document does not exist');
            }
          } catch (error) {
            console.error('Error fetching blog:', error);
          }
        };
    
        fetchBlog();
      }, [id]);

      const compMarkedHanlder = event => {
        event.preventDefault();

        document.getElementById('modal-wrapper-id').style.display = 'flex';

        const docRef = doc(collection(db, 'appointments'), id);

        deleteDoc(docRef)
        .then(res => {

            document.getElementById('modal-wrapper-id').style.display = 'none';
            
            navigate('/admin/appointments');


        });
      }

    return (
        <>

            <div id="modal-wrapper-id" className="d-modal-wrapper">
                <div className="deleting-modal">
                    <h4>Deleting please wait....</h4>
                </div>
            </div>

            <div className="patient-profile-page-wrapper container">
                <div className="row">
                    <h4 style={{ color: 'gray' }} className="app-heading">
                        Appointment Details
                    </h4>

                </div>
                <div className="row">
                    <div className="col-lg-12 d-flex flex-column  ">

                        <span className="j-date">
                            Member Since 2023
                        </span>

                        <h3 style={{ color: 'gray' }} className="app-heading">
                            {appointment.name}
                        </h3>

                        <hr />

                        <h5 style={{ color: 'gray' }} className="app-heading">
                            Basic Info
                        </h5>

                        

                        <span className="info">
                            Email Address :<strong> {appointment.email} </strong>
                        </span>
                        
                        <span className="info">
                            Phone Number :<strong> {appointment.phoneNumber} </strong> 
                        </span>

                        <hr />

                        <h5 style={{ color: 'gray' }} className="app-heading">
                            Timestamp
                        </h5>

                        <span className="info">
                            Date :<strong> {appointment.date} </strong>
                        </span>

                        <span className="info">
                            Time :<strong> {appointment.time} </strong>
                        </span>

                        <hr />

                        <h5 style={{ color: 'gray' }} className="app-heading">
                            Service Required
                        </h5>

                        <span className="info">
                            Service : <strong> { appointment.service }</strong>
                        </span>

                        <span className="info">
                            Staff :<strong> {appointment.staff} </strong>
                        </span>

                        <hr />
                        <h5 style={{ color: 'gray' }} className="app-heading">
                            Description 
                        </h5>

                        <span className="info">
                            Description :<strong> {appointment.desc} </strong>
                        </span>

                        
                        <hr />
                        <h5 style={{ color: 'gray' }} className="app-heading">
                            Action 
                        </h5>

                        <span className="info">
                            <Link to="/admin/members" className="btn mx-3 btn-primary">Chat With User</Link>
                            { appointment.user != 'null' && 
                                <Link to={`/admin/members/${appointment.user}`} className="btn btn-info mx-3">See Medical Profile</Link>   
                            }
                            <Link onClick={compMarkedHanlder} to="/admin/members" className="btn mx-4 btn-danger">Mark as Completed</Link>
                        </span>
                        <hr />
                    </div>
                </div>

            </div>
        </>
    )
}




