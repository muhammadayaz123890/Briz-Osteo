import React, { useEffect, useState } from "react";
import Doc_Img from '../images/dr-kate.png';
import { Link } from "react-router-dom";
import EndLogo from '../images/end.png';
import logo from '../images/icon.png'
import clinic1 from '../images/clinic (1).jpeg'
import clinic2 from '../images/clinic (2).jpeg'
import clinic3 from '../images/clinic (3).jpeg'
<<<<<<< HEAD
import { collection, doc, getDoc, getDocs, limit, onSnapshot, orderBy, query, snapshotEqual, where } from "firebase/firestore";
import { db, storage } from "../firebase";
import png1 from '../images/1.png';
import png2 from '../images/2.png';
import png3 from '../images/4.png';
import png4 from '../images/10.png';
import png5 from '../images/11.png';
import png6 from '../images/12.png';
import png7 from '../images/end.png';
import { ref } from "firebase/storage";
import Header from "../components/header";

=======
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
>>>>>>> 694c2a70a6bbf3bf628301716fe28c7162818944

export default function Home() {

    const [blogs, setBlogs] = useState([]);
<<<<<<< HEAD
    const [firstBlog, setFirstBLog] = useState(null);
    const [status, setStatus] = useState(null);
    const [services, setService] = useState([]);
=======
>>>>>>> 694c2a70a6bbf3bf628301716fe28c7162818944



    useEffect(() => {
<<<<<<< HEAD

        getDoc(doc(db, 'status', 'RleX6w0H4bXfaXivEqeu')).then(response => {

            setStatus(response.data())


        }).catch(err => {
            console.log("H")
        })


        getDocs(collection(db, 'services'))
            .then(response => {

            })

        const unsubscribe2 = onSnapshot(collection(db, 'services'), (snapshot) => {
            const serviceArray = [];

            snapshot.forEach((doc) => {
                let content = doc.data().content || '';
                let truncatedContent = content.slice(0, 200);
                serviceArray.push({
                    id: doc.id,
                    truncatedContent,
                    ...doc.data(),
                });
            });

            setService(serviceArray);
        });
=======
>>>>>>> 694c2a70a6bbf3bf628301716fe28c7162818944
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
<<<<<<< HEAD
            const firstCreatedBlog = [...blogsArray];

            firstCreatedBlog.sort((a, b) => a.createdDate - b.createdDate);

            const myBlogs = blogsArray.slice(0, 3);

            setBlogs(myBlogs);
            setFirstBLog(myBlogs[0])



=======
            const myBlogs = blogsArray.slice(0, 3);
            setBlogs(myBlogs);
            console.log(myBlogs);
>>>>>>> 694c2a70a6bbf3bf628301716fe28c7162818944
        });

        return () => {
            unsubscribe();
        };
    }, []);


    return (
        <>
<<<<<<< HEAD
        <div className="rocketchat_livechat">
            
        </div>
            <div className="home-wrapper">
                <div className="container">
                    <div className="row align-items-center d-flex justify-content-between">
                        <div className="col-lg-7 col-md-10 col-sm-12">
=======
            <div className="home-wrapper">
                <div className="container">
                    <div className="row align-items-center d-flex justify-content-between">
                        <div className="col-lg-7 col-md-10 col-sm-12 ">
>>>>>>> 694c2a70a6bbf3bf628301716fe28c7162818944
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

<<<<<<< HEAD



                <div className="container" style={{ marginTop: '10rem', marginBottom: '10rem' }}>
                    <div className="row d-flex flex-column justify-content-between align-items-center">
                        <div className="col-lg-12 mb-5 d-flex justify-content-start align-items-center">
                            <h3 style={{ fontWeight: '500', fontFamily: 'Verdana', fontStyle: 'italic', letterSpacing: '2px' }}>5 Eye Opening Ways Osteopathy Boosts Energy</h3>
                        </div>
                        <div style={{ fontSize: '14px', letterSpacing: '1px', fontWeight: '400', fontFamily: 'sans-serif', wordSpacing: '2px' }} className="col-lg-12 d-flex justify-content-start align-items-center">
                            1. Helps stress levels take a dramatic dive. Osteopaths don’t just work on muscles, joints and ligaments, but fine–tune your nervous system and adrenals with gentle techniques that balance your autonomic nervous system. Techniques such as: Strain Counter Strain, BLT (not a sandwich but a ligament tension balancing technique) and my personal favourite: Neural manipulation.
                            <br /><br />
                            2. Whilst I love all kinds of Osteopathic techniques from thrust manipulation to subtle techniques such as Cranial treatment, what really makes my heart sing are neural mobilisation techniques, which are gentle, pain-free stretching of the nerves, to create beneficial effects on tension, pain and hormones……
                            <br /><br />

                            3. Improves your posture, which make life a whole lot less tiring. I have seen patient’s posture flex forward after just one horrible three-day-online conference. Conversely, working on the upper Thoracic spine and tight neck, hip flexors, as well as pec muscles can give immediate and dramatic results. Encouraging you to do a few simple exercises following your appointment will magnify results. And structurally, a well balanced pelvis will help the Thoracic and cervical spines to align well. Osteopaths are obsessed with the pelvis and it’s effects on overall body mechanics. If you want more energy, everything needs to work harmoniously.
                            <br /><br />

                            4. Improves your breathing. A tight Diaphragm is made by stress, being desk bound, driving and general modern busyness. Working on Diaphragm mechanics normalises the pressures so you can breathe more freely. In addition, freeing up hypertonic rib cage and intercostals, front of shoulder around the collar bone and tight Scalene neck muscles, helps the rib cage work unrestrictedly.
                            <br /><br />

                            5.Unlike some other musculoskeletal specialists, Osteopaths are trained to view energy and health through a whole body prism. Gentle articulation of joints on the whole body as well as fascial techniques are the order of the day for increased energy and relaxation of tissues! Why? Because fascia transmits blood vessels: we need to improve circulation not just release tight muscles. Whole body articulation is also known as Harmonic Technique, because it treats breaks in the energy circuit throughout the body and harmonises your energy for wellness.
=======
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
>>>>>>> 694c2a70a6bbf3bf628301716fe28c7162818944
                        </div>
                    </div>
                </div>

<<<<<<< HEAD

=======
>>>>>>> 694c2a70a6bbf3bf628301716fe28c7162818944
                <div className="status">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
<<<<<<< HEAD
                                <h1 style={{ color: 'white' }}>{status && status.satisfied_patients}</h1>
                                <span style={{ color: 'white' }}>Satisfied Patients</span>
                            </div>
                            <div className="col-lg-3">
                                <h1 style={{ color: 'white' }}>{status && status.daily_checkups}</h1>
                                <span style={{ color: 'white' }}>Daily Checkups</span>
                            </div>
                            <div className="col-lg-3">
                                <h1 style={{ color: 'white' }}>{status && status.experience}</h1>
                                <span style={{ color: 'white' }}>Years of Experience</span>
                            </div>
                            <div className="col-lg-3">
                                <h1 style={{ color: 'white' }}>{status && status.site_members}</h1>
=======
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
>>>>>>> 694c2a70a6bbf3bf628301716fe28c7162818944
                                <span style={{ color: 'white' }}>Site Members</span>
                            </div>
                        </div>
                    </div>
                </div>

<<<<<<< HEAD


                <div className="container services mt-5">
                    <div className="row d-flex justify-content-center align-items-center">
                        <h3 style={{ width: 'fit-content' }} className="blog-heading">
                            Osteopathic Pain Management
                        </h3>
                    </div>
                    <div className="row d-flex flex-wrap g-4 justify-content-between align-items-center">

                        {
                            services && services.map(service => {
                                return (
                                    <>
                                        <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center mt-5">
                                            <img src={png1} alt="" className="img-fluid" style={{ width: "10rem", objectFit: 'cover' }} />
                                            <h4 className="s-heading">{service.service_title}</h4>
                                            <p className="service-desc" style={{ color: 'gray', letterSpacing: '2px', textAlign: 'center' }}>
                                                {service.desc}
                                            </p>
                                        </div>
                                    </>
                                )
                            })
                        }
=======
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
>>>>>>> 694c2a70a6bbf3bf628301716fe28c7162818944

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
<<<<<<< HEAD
                                    
                                    return (
                                        <>
                                        { blog.allow  && 
=======
                                    return (
                                        <>
>>>>>>> 694c2a70a6bbf3bf628301716fe28c7162818944
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
<<<<<<< HEAD
                                            }
=======
>>>>>>> 694c2a70a6bbf3bf628301716fe28c7162818944
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