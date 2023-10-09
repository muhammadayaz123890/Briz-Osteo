import { collection, deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db } from "../firebase";


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
                            <i class="fas fa-bell"></i>
                            <span className="notification-content">
                                { content }
                            </span>
                        </div>

                        <div className="right-side">
                            <i onClick={handleMarkRead} class="fa-solid read-btn fa-envelope-open"id={id}></i>
                        </div>
                    </div>
        </>
    )
}


