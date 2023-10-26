import React, { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import { auth } from "../../firebase";



export default function AdminPanel() {
    const location = useLocation();
    const navigate = useNavigate();

    const onAdminIndex = location.pathname.endsWith('/admin');

    useEffect(() => {
        
        if(!auth.currentUser) {
            navigate('/not-found')

        }
    })

    return (
        <>
            <div className="admin-panel-wrapper" >
                <div className="row" style={{ height: '100%' }}>
                    <div className="col-lg-2">
                        <Sidebar />
                    </div>
                    <div className="col-lg-9 main-admin-content mt-4">

                        {onAdminIndex &&

                            <div className="container">
                                <div className="row">
                                    <h2 style={{ color: 'gray' }} className="app-heading">
                                        Welcome Dr.Kate! Manage your site from here.
                                    </h2>
                                </div>
                                <div className="row d-flex flex-row justify-content-around  dash-services">
                                    <Link to='/admin/write-blog' className="ser col-lg-3 blog cont">
<<<<<<< HEAD
                                        Blog
                                    </Link>
                                    <Link to='/admin/members' className="ser col-lg-3 members cont">
                                        Members
                                    </Link>
                                    <Link to='/admin/appointments' className="ser col-lg-3 appoi  cont">
                                        Appointments
=======
                                        <i class="fa-solid fa-plus"></i> Blog
                                    </Link>
                                    <Link to='/admin/members' className="ser col-lg-3 members cont">
                                        <i class="fa-solid fa-user-group"></i>Members
                                    </Link>
                                    <Link to='/admin/appointments' className="ser col-lg-3 appoi  cont">
                                        <i class="fa-solid fa-calendar-check"></i>  Appointments
>>>>>>> 694c2a70a6bbf3bf628301716fe28c7162818944
                                    </Link>
                                </div>
                            </div>
                        }
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}


