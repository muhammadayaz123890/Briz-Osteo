import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import NotificationCon from "../../components/notification";
import { db } from "../../firebase";




export default function AdminNotifications () {

    const [notifications , setNotifications] = useState([]);


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
            console.log(NotificationsArray); // Access the updated array here
          });
      
          return () => {
            // Unsubscribe from the snapshot listener when the component unmounts
            unsubscribe();
          };

    }, [])



    return (
        <>
            <div className="notifications-page-wrapper container">
                <div className="row">
                <h2 style={{ color: 'gray' }} className="app-heading">
                    Notifications
                </h2>
                <div className="row notifications-column-row mt-5 d-flex flex-column">
                    {
                        notifications.map(noti => {
                            return (
                                <>
                                    <NotificationCon id={noti.id}  content={noti.content} />
                                </>
                            )
                        })
                    }
                </div>
                </div>
            </div>
        </>
    )
}




