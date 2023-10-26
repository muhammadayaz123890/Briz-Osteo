import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminPanel from "../pages/admin_panel_pages/adminPanel";
import Appointments from "../pages/admin_panel_pages/appointments";
import AdminNotifications from "../pages/admin_panel_pages/notifications";
import WriteBlog from "../pages/admin_panel_pages/writeBlog";
import Blog from "../pages/blog";
import Blogs from "../pages/blogs";
import Booking from "../pages/booking";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import Navbar from "./navbar";
import Patients from "../pages/admin_panel_pages/patients";
import Patient from "../pages/admin_panel_pages/patient";
import PatientForm from "../pages/patientForm";
import PatientProfile from "../pages/patientProfile";
import Appointment from "../pages/admin_panel_pages/appointment";
import NotFound from "../pages/admin_panel_pages/notFound";
import About from "../pages/about";
import SetStatus from "../pages/admin_panel_pages/setStatus";
import YourBlogs from "../pages/admin_panel_pages/blogs";
import EditBlog from "../pages/admin_panel_pages/editBlog";
import Contact from "../pages/contact";
import CalCom from "../pages/appointment";
import Easypanel from "../pages/easypanel";





export default function Router() {

    return (
        <>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="book" element={<CalCom />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="blog/:id" element={<Blog />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="create-patient-profile" element={<PatientForm />} />
                    <Route path="patient-profile" element={<PatientProfile />} />
                    <Route path="panel" element={<Easypanel />} />
                    <Route path="/patient/:id" element={<PatientProfile />} />
                </Route>

                <Route path="*" element={<NotFound />} />

                <Route path="/admin" element={<AdminPanel />}>
                    <Route path="appointments" element={<Appointments />} />
                    <Route path="appointment/:id" element={<Appointment />} />
                    <Route path="write-blog" element={<WriteBlog />} />
                    <Route path="edit-blog/:id" element={<EditBlog />} />
                    <Route path="your-blogs" element={<YourBlogs />} />
                    <Route path="notifications" element={<AdminNotifications />} />
                    <Route path="set-status" element={<SetStatus />} />
                    <Route path="patients" element={<Patients />} />
                    <Route path="patient/:id" element={<Patient />} />
                </Route>
            </Routes>
        </>
    )
}



