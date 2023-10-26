import React from "react";
import logo from '../images/icon.png'


export default function Footer() {

    return (
        <>
            <div className="container" style={{marginTop:'10rem'}}>
                    <div className="row d-flex align-items-center justify-content-center">
                        <img style={{maxWidth:'20rem'}} src={logo} class="img-fluid rounded-top" alt="" />
                    </div>
                
                    <div className="row d-flex align-items-center justify-content-center">
                    Copyright © 2023 Briz Osteo OSTEOPATHY
                    </div>
                
                </div>
        </>
    )
}

