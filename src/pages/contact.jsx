import React from "react";
import { Link } from "react-router-dom";
import file from '../file.png'
import cli from '../images/clinic (2).jpeg'
import wa from '../images/whatsapp.png';


export default function Contact() {

                            //     <li></li>
                            //     <li></li>
                            //     <li>hello@ brizosteo.au</li>
                            // </ul>

    return (
        <>
            <div className="container">
                <div className="row d-flex flex-column justify-content-start align-items-center">
                    <div className="col-lg-9">
                        <h2 className="cont">Say Hello </h2>
                        <span className="contact-info">
                            <span className="d-flex flex-row" style={{width:'fit-content'}}>
                                <a className="email-anchor" href="mailto:hello@brizosteo.au">Email: hello@brizosteo.au</a>
                            </span>
                            <span className="mt-2">
                            Phone: 1300 405580
                            </span>
                            <span className="d-flex gap-1 flex-row mt-2">
                                Address: <span >3/3375 Pacific Highway,<br /> Slacks Creek Qld 4127 </span>
                            </span>
                            <span>

                            </span>
                            <a target={'_blank'}  href="https://wa.me/message/4P5S57G2KLAXL1">
                                <img  style={{ marginTop:'1rem', width:'2rem'}} src={wa} alt="" />
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}