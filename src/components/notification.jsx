import { collection, deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db } from "../firebase";
import { FontawesomeObject, font } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faBell, faCheck } from '@fortawesome/free-solid-svg-icons'

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
                            <FontAwesomeIcon icon={faBell}  />
                            <span className="notification-content">
                                { content }
                            </span>
                        </div>

                        <div className="right-side">
                            <FontAwesomeIcon icon={faCheck} className="read-btn" onClick={handleMarkRead} id={id} />
                        </div>
                    </div>
        </>
    )
}


