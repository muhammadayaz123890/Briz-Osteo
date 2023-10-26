import { collection, getDocs, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from 'react-router-dom'
import { auth, db } from "../firebase";
import logo from '../images/icon.png'
import whatsappLogo from '../images/whatsapp.png';
import { Livechat } from '@rocket.chat/sdk';
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { async } from "@firebase/util";

<<<<<<< HEAD







=======
>>>>>>> 694c2a70a6bbf3bf628301716fe28c7162818944
export default function Navbar() {

    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [hasProfile, setHasProfile] = useState(false);
    const [patientProfileId, setPatientProfileId] = useState('');
    const [userIsAdmin, setUserIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    const [authDataLoaded, setAuthDataLoaded] = useState(false); // New state variable

    const ProfileCheck = async () => {
        const q = query(collection(db, 'patient-profiles'), where('uid', '==', auth.currentUser.uid));
<<<<<<< HEAD
        const querySnapshot = await getDocs(q);
        const profiles = [];

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            profiles.push({
                id: doc.id,
                ...data,
            });
        });

        if (profiles.length > 0) {
            let id = profiles[0];
            id = id.id;
            setHasProfile(true);
            setPatientProfileId(id);
        }
=======
                const querySnapshot = await getDocs(q);
                const profiles = [];

                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    profiles.push({
                        id: doc.id,
                        ...data,
                    });
                });

                if (profiles.length > 0) {
                    let id = profiles[0];
                    id = id.id;
                    setHasProfile(true);
                    setPatientProfileId(id);
                }
>>>>>>> 694c2a70a6bbf3bf628301716fe28c7162818944
    }

    const AdminCheck = async () => {

        const q2 = query(collection(db, 'admins'), where('uid', '==', auth.currentUser.uid));
<<<<<<< HEAD
        const adminQuerySnapshot = await getDocs(q2);
        const admins = [];

        adminQuerySnapshot.forEach((doc) => {
            const data = doc.data();
            admins.push({
                id: doc.id,
                ...data,
            });
        });

        if (admins.length > 0) {
            setUserIsAdmin(true);
        }
=======
                const adminQuerySnapshot = await getDocs(q2);
                const admins = [];

                adminQuerySnapshot.forEach((doc) => {
                    const data = doc.data();
                    admins.push({
                        id: doc.id,
                        ...data,
                    });
                });

                if (admins.length > 0) {
                    setUserIsAdmin(true);
                }
>>>>>>> 694c2a70a6bbf3bf628301716fe28c7162818944

    }


    const logoutHandler = event => {
        console.log(auth);
        signOut(auth)
            .then(() => {
                // Redirect to a login page or another appropriate location
                console.log('hello world');
                setUserLoggedIn(false);
            })
            .catch((error) => {
                console.error("Error logging out:", error);
            });
    }


    useEffect(() => {

        function delayedExecution() {
            console.log("Waiting for two seconds...");
            setTimeout(() => {
                if (auth.currentUser) {
                    setUserLoggedIn(true);
                }
<<<<<<< HEAD
                console.log("Two seconds have passed. Executing your code now.");
                ProfileCheck();
                AdminCheck();
            }, 2000);
        }

        // Call the function to start the delay and execution
        delayedExecution();
=======
              console.log("Two seconds have passed. Executing your code now.");
              ProfileCheck();
              AdminCheck();
            }, 2000); 
          }
          
          // Call the function to start the delay and execution
          delayedExecution();
>>>>>>> 694c2a70a6bbf3bf628301716fe28c7162818944


    }, []);

    return (
        <>
<<<<<<< HEAD
            <>

                

                <a href="https://wa.me/message/4P5S57G2KLAXL1" target="_blank" rel="noopener noreferrer">
                    <img className="whatsapp-logo" src={whatsappLogo} alt="WhatsApp" />
                </a>
                <nav style={{ padding: "8px 20%", boxShadow: '0px 3px 6px gray' }} class="navbar navbar-expand-lg navbar-white bg-white p-3">
                    <div class="container">
                        <NavLink to="/" style={{ textDecoration: 'none' }} >
                            <h3 style={{ color: "black", letterSpacing: '6px', fontWeight: "400", wordSpacing: '10px', textDecoration: "none" }}>BRIZ OSTEO</h3>
                        </NavLink>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class=" collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav ms-auto ">
                                <li className="nav-item">
                                    <NavLink activeClassName="active-link" className="nav-link mx-2" style={{ marginRight: "1rem", letterSpacing: "2px", color: 'black', textDecoration: 'none', fontFamily: 'Segoe UI', fontWeight: "400", fontSize: "14px" }} aria-current="page" to="/">HOME</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="active-link" className="nav-link mx-2" style={{ marginLeft: '1rem', letterSpacing: "2px", color: 'black', textDecoration: 'none', fontFamily: 'Segoe UI', fontWeight: "400", fontSize: "14px" }} aria-current="page"  to="/book/">BOOK NOW</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="active-link" className="nav-link mx-2" style={{ marginLeft: '1rem', letterSpacing: "2px", color: 'black', textDecoration: 'none', fontFamily: 'Segoe UI', fontWeight: "400", fontSize: "14px" }} aria-current="page" to="/about/">OSTEO</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeClassName="active-link" className="nav-link mx-2" style={{ marginLeft: '1rem', letterSpacing: "2px", color: 'black', textDecoration: 'none', fontFamily: 'Segoe UI', fontWeight: "400", fontSize: "14px" }} aria-current="page" to="/contact/">CONTACT</NavLink>
                                </li>

                                {userIsAdmin && <li className="nav-item">
                                    <NavLink activeClassName="active-link" className="nav-link mx-2" style={{ marginLeft: '1rem', letterSpacing: "4px", color: 'black', textDecoration: 'none', fontFamily: 'Segoe UI', fontWeight: "400", fontSize: "14px" }} aria-current="page" to="/admin/">ADMIN PANEL</NavLink>
                                </li>}

                                {userIsAdmin && <li className="nav-item">
                                    <NavLink activeClassName="active-link" className="nav-link mx-2" style={{ marginLeft: '1rem', letterSpacing: "4px", color: 'black', textDecoration: 'none', fontFamily: 'Segoe UI', fontWeight: "400", fontSize: "14px" }} aria-current="page" to="/panel/">EASY PANEL</NavLink>
                                </li>}

                                { !userLoggedIn &&  <li className="nav-item">
                                    <NavLink className="nav-link login-btn mx-2" style={{ marginLeft: '1rem', letterSpacing: "2px", color: 'black', textDecoration: 'none', fontFamily: 'Segoe UI', fontWeight: "400", fontSize: "14px" }} aria-current="page" to="/login">LOGIN</NavLink>
                                </li>}

                                {
                                    userLoggedIn && <li onClick={logoutHandler} className="nav-item">
                                        <span className="nav-link login-btn mx-2" style={{ marginLeft: '1rem', letterSpacing: "2px", color: 'black', cursor: 'pointer', textDecoration: 'none', fontFamily: 'Segoe UI', fontWeight: "400", fontSize: "14px" }} aria-current="page" >LOGOUT</span>
                                    </li>
                                }

                                {hasProfile && <li className="nav-item">
                                    <Link className="nav-link   mx-2" style={{ marginLeft: '1rem', letterSpacing: "2px", color: 'white', backgroundColor: 'gray', borderRadius: '8px', boxShadow: '0px 0px 2px black', textDecoration: 'none', fontFamily: 'Segoe UI', fontWeight: "400", fontSize: "14px" }} aria-current="page" to={`/patient/${patientProfileId}`}>My Profile</Link>
                                </li>}
                            </ul>
                        </div>
                    </div>
                </nav>

            </>
=======
            
                    <>
                        <a href="https://wa.me/0418792651" target="_blank" rel="noopener noreferrer">
                            <img className="whatsapp-logo" src={whatsappLogo} alt="WhatsApp" />
                        </a>
                        <nav style={{ padding: "8px 20%", boxShadow: '0px 3px 6px gray' }} class="navbar navbar-expand-lg navbar-white bg-white p-3">
                            <div class="container">
                                <NavLink to="/" style={{ textDecoration: 'none' }} >
                                    <h3 style={{ color: "black", letterSpacing: '6px', fontWeight: "400", wordSpacing: '10px', textDecoration: "none" }}>BRIZ OSTEO</h3>
                                </NavLink>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>

                                <div class=" collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul class="navbar-nav ms-auto ">
                                        <li className="nav-item">
                                            <NavLink activeClassName="active-link" className="nav-link mx-2" style={{ marginRight: "1rem", letterSpacing: "2px", color: 'black', textDecoration: 'none', fontFamily: 'Segoe UI', fontWeight: "400", fontSize: "14px" }} aria-current="page" to="/">HOME</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="active-link" className="nav-link mx-2" style={{ marginLeft: '1rem', letterSpacing: "2px", color: 'black', textDecoration: 'none', fontFamily: 'Segoe UI', fontWeight: "400", fontSize: "14px" }} aria-current="page" to="/book/">BOOK NOW</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="active-link" className="nav-link mx-2" style={{ marginLeft: '1rem', letterSpacing: "2px", color: 'black', textDecoration: 'none', fontFamily: 'Segoe UI', fontWeight: "400", fontSize: "14px" }} aria-current="page" to="/about/">ABOUT</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeClassName="active-link" className="nav-link mx-2" style={{ marginLeft: '1rem', letterSpacing: "2px", color: 'black', textDecoration: 'none', fontFamily: 'Segoe UI', fontWeight: "400", fontSize: "14px" }} aria-current="page" to="/blogs/">BLOGS</NavLink>
                                        </li>

                                        {userIsAdmin && <li className="nav-item">
                                            <NavLink activeClassName="active-link" className="nav-link mx-2" style={{ marginLeft: '1rem', letterSpacing: "4px", color: 'black', textDecoration: 'none', fontFamily: 'Segoe UI', fontWeight: "400", fontSize: "14px" }} aria-current="page" to="/admin">ADMIN PANEL</NavLink>
                                        </li>}

                                        {userLoggedIn || <li className="nav-item">
                                            <NavLink className="nav-link login-btn mx-2" style={{ marginLeft: '1rem', letterSpacing: "2px", color: 'black', textDecoration: 'none', fontFamily: 'Segoe UI', fontWeight: "400", fontSize: "14px" }} aria-current="page" to="/login">LOGIN</NavLink>
                                        </li>}

                                        {
                                            userLoggedIn && <li onClick={logoutHandler} className="nav-item">
                                                <span className="nav-link login-btn mx-2" style={{ marginLeft: '1rem', letterSpacing: "2px", color: 'black', cursor: 'pointer', textDecoration: 'none', fontFamily: 'Segoe UI', fontWeight: "400", fontSize: "14px" }} aria-current="page" >LOGOUT</span>
                                            </li>
                                        }

                                        {hasProfile && <li className="nav-item">
                                            <Link className="nav-link   mx-2" style={{ marginLeft: '1rem', letterSpacing: "2px", color: 'white', backgroundColor: 'gray', borderRadius: '8px', boxShadow: '0px 0px 2px black', textDecoration: 'none', fontFamily: 'Segoe UI', fontWeight: "400", fontSize: "14px" }} aria-current="page" to={`/patient/${patientProfileId}`}>My Profile</Link>
                                        </li>}
                                        {hasProfile || <li className="nav-item">
                                            <Link className="nav-link   mx-2" style={{ marginLeft: '1rem', letterSpacing: "2px", color: 'white', backgroundColor: 'gray', borderRadius: '8px', boxShadow: '0px 0px 2px black', textDecoration: 'none', fontFamily: 'Segoe UI', fontWeight: "400", fontSize: "14px" }} aria-current="page" to={`/create-patient-profile`}>Create Patient Profile</Link>
                                        </li>}
                                    </ul>
                                </div>
                            </div>
                        </nav>

                    </>
>>>>>>> 694c2a70a6bbf3bf628301716fe28c7162818944

        </>
    );

}

