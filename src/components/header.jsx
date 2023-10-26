import React from "react";
import video from '../images/header background.mp4';
import cutie from '../images/12.png'






export default function Header() {


    return (
        <>
            <header>
                <div class="header-video">
                    <video autoPlay muted loop>
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="text">
                    <span className="wel">
                        Welcome to 
                    </span>
                    <div className="title">
                        BRIZ OSTEO
                    </div>
                    <img width='150' src={cutie} alt="" />
                    <div className="btns">
                    </div>
                </div>
            </header>
        </>
    )
}