import React, { useEffect, useState } from "react";
import Doc_Img from '../images/dr-kate.png';
import { Link } from "react-router-dom";
import EndLogo from '../images/end.png';
import logo from '../images/icon.png'
import clinic1 from '../images/clinic (1).jpeg'
import clinic2 from '../images/clinic (2).jpeg'
import clinic3 from '../images/clinic (3).jpeg'
import { collection, getDoc, getDocs, limit, onSnapshot, orderBy, query, snapshotEqual, where } from "firebase/firestore";
import { db } from "../firebase";
import png1 from '../images/1.png'
import png2 from '../images/2.png'
import png3 from '../images/4.png'
import png4 from '../images/10.png'
import png5 from '../images/11.png'
import png6 from '../images/12.png'
import png7 from '../images/end.png'
import { Livechat } from '@rocket.chat/sdk'

export default function Home() {

    const [blogs, setBlogs] = useState([]);



    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'blogs'), (snapshot) => {
            const blogsArray = [];
            snapshot.forEach((doc) => {
                let content = doc.data().content || '';
                let truncatedContent = content.slice(0, 200);
                blogsArray.push({
                    id: doc.id,
                    truncatedContent,
                    ...doc.data(),
                });
            });
            const myBlogs = blogsArray.slice(0, 3);
            setBlogs(myBlogs);
            console.log(myBlogs);
        });

        return () => {
            unsubscribe();
        };
    }, []);


    return (
        <>
            <div className="home-wrapper">
                <div className="container">
                    <div className="row align-items-center d-flex justify-content-between">
                        <div className="col-lg-7 col-md-10 col-sm-12 ">
                            <img src={Doc_Img} class="img-fluid rounded-top" alt="" />
                        </div>
                        <div className="col-lg-4 description gap-4 d-flex flex-column d-flex justify-content-center  align-items-center col-md-6 colsm-10">
                            <h3 className="name">Dr Kate Pascoe</h3>
                            <span className="qual">
                                Osteopath, MSc Osteopathic Medicine
                            </span>
                            <span className="me">
                                I know the supreme effort it takes to stay youthful and to have the energy to motivate yourself for work, play and life itself…Osteopathy is jaw- droppingly effective at boosting your energy and obliterating chronic fatigue.
                            </span>
                            <a className="chat-btn" href="https://juji.ai/pre-chat/64df3c85-6720-4ee4-b68b-5d47b16b022a" target="_blank">Chat With Me To Ask Questions</a>
                        </div>
                    </div>
                </div>

                <div className="container  " style={{ marginTop: '10rem' }}>
                    <div className="row mt-5 d-flex justify-content-center align-items-center">
                        <div className="row  clinic ">
                            <div className="col-lg-4 d-flex flex-column justify-content-between">
                                <h3 className="my-5" style={{ color: 'darkslategray' }}>
                                    The Essence of Osteopathy
                                </h3>
                                <p className="s-text mb-5" style={{ color: 'gray', fontSize: '16px', wordSpacing: '3px' }}>

                                    Osteopathy is not just a medical practice; it's an art. Practitioners, like skilled artists, use their hands to detect the subtlest imbalances in your body's structure. They understand that pain and discomfort often stem from these imbalances, and they're dedicated to restoring equilibrium.                                </p>
                            </div>
                            <div className="col-lg-2"></div>
                            <div className="col-lg-4 clinic-pics">
                                <img className="clinic-pic-2" src={clinic2} alt="" />
                                <img className="clinic-pic-3" src={clinic3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="status">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <h1 style={{ color: 'white' }}>2000+</h1>
                                <span style={{ color: 'white' }}>Satisfied Patients</span>
                            </div>
                            <div className="col-lg-3">
                                <h1 style={{ color: 'white' }}>30+</h1>
                                <span style={{ color: 'white' }}>Daily Checkups</span>
                            </div>
                            <div className="col-lg-3">
                                <h1 style={{ color: 'white' }}>35+</h1>
                                <span style={{ color: 'white' }}>Years of Experience</span>
                            </div>
                            <div className="col-lg-3">
                                <h1 style={{ color: 'white' }}>60+</h1>
                                <span style={{ color: 'white' }}>Site Members</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container" style={{ marginTop: '10rem', marginBottom: '10rem' }}>
                    <div className="row d-flex flex-row justify-content-between align-items-center">
                        <div className="col-lg-4 d-flex flex-column  justify-content-around">
                            <h2 style={{ marginBottom: '5rem', color: 'gray' }}>Unlock the Potential of Osteopathy

                            </h2>
                            <p style={{ color: 'gray', fontSize: '16px', letterSpacing: '1px', wordSpacing: '4px' }}>Osteopathy offers a path to wellness that encompasses pain relief, improved mobility, and stress reduction. With a focus on holistic health, it addresses the root causes of discomfort, enhancing posture, and promoting natural healing. Whether recovering from injuries or seeking overall well-being, Osteopathy provides non-invasive, drug-free solutions to help you regain balance and vitality.




                            </p>
                        </div>
                        <div className="col-lg-6">
                            <img src={clinic1} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>

                <div className="container services">
                    <div className="row d-flex flex-wrap g-4 justify-content-between align-items-center">
                        <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center mt-5">
                            <img src={png1} alt="" className="img-fluid" style={{ width: "10rem", objectFit: 'cover' }} />
                            <h4 className="s-heading">Osteopathic Assessment</h4>
                            <p className="service-desc" style={{ color: 'gray', letterSpacing: '2px', textAlign: 'center' }}>
                                Osteopathic assessment involves a comprehensive examination of your musculoskeletal system to identify areas of tension, misalignment, and dysfunction. Our skilled osteopaths use hands-on techniques to assess and diagnose your condition, paving the way for effective treatment.
                            </p>
                        </div>
                        <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center mt-5">
                            <img src={png2} alt="" className="img-fluid" style={{ width: "10rem", objectFit: 'cover' }} />
                            <h4 className="s-heading">Osteopathic Manipulative Therapy</h4>
                            <p className="service-desc" style={{ color: 'gray', letterSpacing: '2px', textAlign: 'center' }}>
                                Osteopathic Manipulative Therapy (OMT) is a hands-on approach that focuses on restoring balance and function to the body. Our OMT sessions are tailored to your specific needs, addressing pain, stiffness, and restricted mobility to improve your overall well-being.
                            </p>
                        </div>
                        <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center mt-5">
                            <img src={png3} alt="" className="img-fluid" style={{ width: "10rem", objectFit: 'cover' }} />
                            <h4 className="s-heading">Osteopathic Sports Injury Treatment</h4>
                            <p className="service-desc" style={{ color: 'gray', letterSpacing: '2px', textAlign: 'center' }}>
                                Our Osteopathic sports injury treatment is designed to help athletes recover from injuries and enhance their performance. We employ osteopathic techniques to address sports-related injuries such as sprains, strains, and overuse injuries.
                            </p>
                        </div>
                        <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center mt-5">
                            <img src={png4} alt="" className="img-fluid" style={{ width: "10rem", objectFit: 'cover' }} />
                            <h4 className="s-heading">Osteopathic Pediatric Care</h4>
                            <p className="service-desc" style={{ color: 'gray', letterSpacing: '2px', textAlign: 'center' }}>
                                We offer specialized osteopathic care for infants and children to promote healthy development. Our gentle, non-invasive techniques can address issues such as colic, torticollis, and musculoskeletal challenges in young patients.
                            </p>
                        </div>
                        <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center mt-5">
                            <img src={png5} alt="" className="img-fluid" style={{ width: "10rem", objectFit: 'cover' }} />
                            <h4 className="s-heading">Osteopathic Pain Management</h4>
                            <p className="service-desc" style={{ color: 'gray', letterSpacing: '2px', textAlign: 'center' }}>
                                Our osteopathic pain management services aim to alleviate chronic pain conditions, including back pain, headaches, and arthritis. We use osteopathic techniques to reduce pain and improve your quality of life.
                            </p>
                        </div>
                        <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center mt-5">
                            <img src={png6} alt="" className="img-fluid" style={{ width: "10rem", objectFit: 'cover' }} />
                            <h4 className="s-heading">Osteopathic Posture Correction</h4>
                            <p className="service-desc" style={{ color: 'gray', letterSpacing: '2px', textAlign: 'center' }}>
                                Correcting posture is essential for maintaining spinal health. Our osteopathic posture correction services focus on identifying and addressing postural issues to prevent discomfort and reduce the risk of musculoskeletal problems.
                            </p>
                        </div>

                    </div>
                </div>

                <div className="container blogs">
                    <div className="row d-flex justify-content-center align-items-center">
                        <h3 className="blog-heading">
                            Blogs
                        </h3>
                        <div className="row d-flex justify-content-around gap-3">

                            {
                                blogs.map(blog => {
                                    return (
                                        <>
                                            <div className="col-lg-3 col-md-5 col-sm-8 blog d-flex flex-column justify-content-center align-items-center">
                                                <h4>
                                                    {blog.title}
                                                </h4>
                                                <div className="date">
                                                    {blog.addOn}
                                                </div>
                                                <div className="blog-content">
                                                    {blog.truncatedContent + "..."}
                                                </div>
                                                <Link style={{ width: 'fit-content', textDecoration: 'none' }} to={`/blog/${blog.id}`}>Read More</Link>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>

                        <div className="row d-flex justify-content-center align-items-center row-3">
                            <Link style={{ width: 'fit-content', fontSize: '18px', textDecoration: 'none', width: "fit-content" }} to="/blogs/">Read More Blogs</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}