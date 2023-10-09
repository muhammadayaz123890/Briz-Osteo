import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from '../images/icon.png'
import docPic from '../images/dr-kate.png'
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase";



export default function Sidebar() {


  const [notifications , setNotifications] = useState([]);
  const [notiCount, setNotifCount] = useState('');


    useEffect(() => {
        const q = query(collection(db, 'notifications'), where('is_read', '==', false));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const NotificationsArray = [];
            snapshot.forEach((doc) => {
              NotificationsArray.push({
                id: doc.id,
                ...doc.data(),
              });
            });
            setNotifications(NotificationsArray);
            setNotifCount(NotificationsArray.length)
            console.log(NotificationsArray); // Access the updated array here
          });
      
          return () => {
            // Unsubscribe from the snapshot listener when the component unmounts
            unsubscribe();
          };

    }, [])

  return (
    <>
      <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: "100%", height: '100%', boxShadow: "0px 3px 10px gray" }}>
        <Link href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <span class="fs-4">Briz Osteo Admin</span>
        </Link>
        <hr />
        <ul class="nav nav-pills flex-column mb-auto">
          <li>
            <Link to='/admin' class="nav-link link-dark">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to='/admin/notifications' class="nav-link link-dark">
              Notifications <span style={{backgroundColor:'red', color:'white', padding:'5px 10px', fontSize:'12px', borderRadius:'50%'}} className="noti">{notiCount}</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/appointments" class="nav-link link-dark">
              Appointments 
            </Link>
          </li>
          <li>
            <Link to="/admin/write-blog" class="nav-link link-dark">
              Create Blog
            </Link>
          </li>
          <li>
            <Link to='/admin/members' class="nav-link link-dark">
              Members 
            </Link>
          </li>
          <li>
            <Link to='/admin/patients' class="nav-link link-dark">
              Patients 
            </Link>
          </li>
        </ul>
        <hr />
        <div class="dropdown d-flex">
            <img src={docPic} alt="" width="32" height="32" class="rounded-circle me-2" />
            <h4 style={{width:'fit-content'}}>Dr.Kate</h4>
        </div>
      </div>
    </>
  )
}



