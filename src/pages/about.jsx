import React from "react";
import DrKate from '../images/dr-kate.png';
import { Link } from "react-router-dom";


export default function About() {


    return (
        <>
            <div className="about-wrapper" style={{marginTop:'10vh'}}> 
                <div className="container">
                    <div className="row d-flex flex-wrap-reverse flex-row justify-content-around align-items-start">
                        <div className="col-lg-6 col-md-8 col-sm-12">
                            <h2 style={{color:'gray'}}>About Me </h2>
                            <p style={{color:'gray', fontSize:'15px', letterSpacing:'1px', fontFamily:'sans-serif', wordSpacing:'2px'}} className="mt-5">

                            Welcome to Dr.Kate Pascoe's Osteopathy Practice, where compassionate care meets decades of experience. With a distinguished career spanning over 35 years, Dr.Kate Pascoe is a seasoned Osteopath committed to helping you achieve optimal health and well-being through holistic, patient-centered care.
                            <br /><br /><br />

                            With an extensive career in Osteopathy, Dr.Kate Pasoe has honed her skills to perfection. She has successfully treated a diverse range of patients, each with unique needs and challenges. Her experience includes working with individuals of all ages, from infants to seniors, and addressing a wide variety of musculoskeletal issues.
                                <br /> <br />
                                <br />

                                At Dr.Kate Pascoe's practice, the patient always comes first. She understands that every individual is unique, and she tailors her treatments to address your specific concerns and goals. Whether you're seeking relief from chronic pain, recovering from an injury, or simply looking to optimize your health, Dr.Kate Pasoe will create a personalized treatment plan designed just for you.
                                                            
                                                            <br /><br /><br />

                                                            Dr.Kate Pascoe believes in a holistic approach to healthcare, addressing not only the physical symptoms but also the emotional and mental aspects of your well-being. Her treatments aim to restore balance and promote natural healing, ensuring that you leave her care feeling rejuvenated and empowered.
                                                            <br /><br /><br />

                                                            If you're seeking a compassionate, experienced, and highly qualified Osteopath to guide you on your journey to better health, Dr.Kate Pascoe is here for you. Take the first step towards a healthier, pain-free life by scheduling an appointment with her today.
                                                            
                                                            </p>    

                            <Link to='/book/' className="btn" style={{color:'white', background:'gray', padding:"10px 20px", borderRadius:'10px'}}>
                                Book An Appointment
                            </Link>
                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-12">
                            <img src={DrKate} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}




