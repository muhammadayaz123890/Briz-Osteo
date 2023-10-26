import React, { useEffect, useState } from "react";
import Doc_Img from '../images/dr-kate.png';
import { Link } from "react-router-dom";
import EndLogo from '../images/end.png';
import logo from '../images/icon.png'
import clinic1 from '../images/clinic (1).jpeg'
import clinic2 from '../images/clinic (2).jpeg'
import clinic3 from '../images/clinic (3).jpeg'
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


export default function Home() {

    const [blogs, setBlogs] = useState([]);
    const [firstBlog, setFirstBLog] = useState(null);
    const [status, setStatus] = useState(null);
    const [services, setService] = useState([]);



    useEffect(() => {

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
            const firstCreatedBlog = [...blogsArray];

            firstCreatedBlog.sort((a, b) => a.createdDate - b.createdDate);

            const myBlogs = blogsArray.slice(0, 3);

            setBlogs(myBlogs);
            setFirstBLog(myBlogs[0])



        });

        return () => {
            unsubscribe();
        };
    }, []);


    return (
        <>
        <div className="rocketchat_livechat">
            
        </div>
            <div className="home-wrapper">
                <div className="container">
                    <div className="row align-items-center d-flex justify-content-between">
                        <div className="col-lg-7 col-md-10 col-sm-12">
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
                        </div>
                    </div>
                </div>


                <div className="status">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
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
                                <span style={{ color: 'white' }}>Site Members</span>
                            </div>
                        </div>
                    </div>
                </div>



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
                                        { blog.allow  && 
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
                                            }
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