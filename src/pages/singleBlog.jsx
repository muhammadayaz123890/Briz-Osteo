import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



export default function SingleBlog(props) {

    const { id, title, date, content} = props


    return (
        <>
            <div className="col-lg-8 d-flex flex-column blog col-md-10 col-sm-12">
                <h2 className="blog-heading">
                {title}
                </h2>
                <span className="date">
                    {date}
                </span>
                <span className="blog-content">
                    {content}
                </span>
                <Link to={`/blog/${id}`} style={{ textDecoration: 'none', width: "fit-content", marginTop: '2rem' }}>Read More</Link>
            </div>
            <hr />
        </>
    )
}

