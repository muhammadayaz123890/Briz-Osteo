import React from "react";
import DrKate from '../images/dr-kate.png';
import { Link } from "react-router-dom";
<<<<<<< HEAD
import clinic from '../images/ost.png';
=======
>>>>>>> 694c2a70a6bbf3bf628301716fe28c7162818944


export default function About() {


    return (
        <>
<<<<<<< HEAD
            <div className="osteo">
                <div className="container">
                    <div className="row d-flex flex-column justify-content-center align-items-center" style={{ marginTop: '10vh' }}>
                        <div className="col-lg-4 mt-5" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
                            <img className="img-fluid" src={clinic} />
                        </div>
                        <div className="col-lg-8 mb-5 mt-5">
                            <h2 className="mb-5" style={{ width: 'fit-content', color: 'gray', fontWeight: '400', fontFamily: 'poppins', fontStyle: "italic", letterSpacing: '2px' }}>Initial Osteo Apts……What Happens & Why?</h2>
                        </div>

                        <div className="exercises col-lg-7 d-flex flex-wrap justify-content-around align-items-start" >
                            <div className="col-lg-6  d-flex flex-column exercise">
                                <h4 style={{ marginBottom:'1.5rem', color: 'black', fontWeight: '400', fontSize:'22px', fontStyle: 'italic', letterSpacing: '4px', wordSpacing: '5px' }}>1.Discover your health goals with a targeted, empathetic medical dialogue with me</h4>
                                <span style={{ fontSize: '14px', letterSpacing: '2px', fontWeight: '400', fontFamily:'sans-serif', }}>
                                    Osteos aim to improve a person’s overall health and wellness, not just treat a single condition. Based on your Medical History, we will explore your health concerns & goals. Osteopathy has always valued the interconnection between body, mind and spirit, & this holism is arguably the difference between Osteo and Physio.
                                </span>
                            </div>
                            <div className="col-lg-6   d-flex flex-column exercise">
                                <h4 style={{ marginBottom:'1.5rem', color: 'black', fontWeight: '400', fontSize:'22px', fontStyle: 'italic', letterSpacing: '4px', wordSpacing: '5px' }}>2. Comprehensive Physical Assessment: Orthopaedic, Neurological, and Postural Evaluation</h4>
                                <span style={{ fontSize: '14px', letterSpacing: '2px', fontWeight: '400', fontFamily:'sans-serif', }}>
                                Osteopaths are super hands on- with legendary palpation skills. Based on our initial discussion, I’ll look at your posture & perform orthopaedic, ROM or Neural testing to help get to the root of your complaint. 
                                </span>
                            </div>
                            <div className="col-lg-6 mt-3 d-flex flex-column exercise">
                                <h4 style={{ marginBottom:'1.5rem', color: 'black', fontWeight: '400', fontSize:'22px', fontStyle: 'italic', letterSpacing: '4px', wordSpacing: '5px' }}>3. Experience jaw-droppingly effective and gentle Osteo Techniques</h4>
                                <span style={{ fontSize: '14px', letterSpacing: '2px', fontWeight: '400', fontFamily:'sans-serif', }}>
                                Osteopaths have a vast range of techniques from direct and strong, to gentle and subtle. I will decide on the best approach, together with you, and where appropriate, put my hands to work. Apart from manual therapy, I may suggest additional tools, such as laser treatment, where necessary.
                                </span>
                            </div>
                            <div className="col-lg-6 mt-3  d-flex flex-column exercise">
                                <h4 style={{ marginBottom:'1.5rem', color: 'black', fontWeight: '400', fontSize:'22px', fontStyle: 'italic', letterSpacing: '4px', wordSpacing: '5px' }}>4. Exercise Prescription and Self-Care Insights
</h4>
                                <span style={{ fontSize: '14px', letterSpacing: '2px', fontWeight: '400', fontFamily:'sans-serif', }}>
                                I want you to feel as comfortable as possible in-between appointments, so I’ll check in with your existing exercises, and may suggest tweaking them and also adding some extra tools to your toolbook! I may also suggest short Telehealth sessions in between treatment sessions to keep you on track.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
=======
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
>>>>>>> 694c2a70a6bbf3bf628301716fe28c7162818944
        </>
    )
}




