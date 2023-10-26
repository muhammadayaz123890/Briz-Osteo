import { collection, deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db } from "../firebase";
<<<<<<< HEAD
import { FontawesomeObject, font } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faBell, faCheck } from '@fortawesome/free-solid-svg-icons'
=======

>>>>>>> 694c2a70a6bbf3bf628301716fe28c7162818944

export default function NotificationCon ( props ) {

    const {id, content} = props

    const handleMarkRead = event => {
        const docRef = doc(db, 'notifications', id)

        deleteDoc(docRef)
        .then(() => {
            console.log("Deleted");
        });
    };

    return (
        <>
                <div className="col-lg-12 d-flex flex-row notification">
                        <div className="left-side">
<<<<<<< HEAD
                            <FontAwesomeIcon icon={faBell}  />
=======
                            <i class="fas fa-bell"></i>
>>>>>>> 694c2a70a6bbf3bf628301716fe28c7162818944
                            <span className="notification-content">
                                { content }
                            </span>
                        </div>

                        <div className="right-side">
<<<<<<< HEAD
                            <FontAwesomeIcon icon={faCheck} className="read-btn" onClick={handleMarkRead} id={id} />
=======
                            <i onClick={handleMarkRead} class="fa-solid read-btn fa-envelope-open"id={id}></i>
>>>>>>> 694c2a70a6bbf3bf628301716fe28c7162818944
                        </div>
                    </div>
        </>
    )
}


