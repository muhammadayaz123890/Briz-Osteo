import { text } from "@fortawesome/fontawesome-svg-core";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";



export default function EditBlog() {

    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [blogTitle, setTitle] = useState('');
    const [blogContent, setContent] = useState('');

    const docRef = doc(db, 'blogs', id);

    const updateHandler = event => {
        event.preventDefault();

        updateDoc(docRef, {
            title:blogTitle,
            content:blogContent
        })
    }

    useEffect(() => {
        getDoc(docRef)
            .then(response => {
                setBlog(response.data());
                setTitle(response.data().title)
                setContent(response.data().content)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <>
            <div className="blog-edit-wrapper">
                <div className="container">
                    <div className="row">
                        <h2 style={{ color: 'gray' }} className="app-heading">
                            Notifications
                        </h2>
                    </div>
                    <div className="row d-flex mt-5">
                        <div className="col-lg-12">
                            <label htmlFor="" className="mb-2">
                                Blog Title 
                            </label>
                            {blog && 
                                <input type="text" value={blogTitle} onChange={e => {setTitle(e.target.value)}} className="form-control mb-4" />
                            }
                            <label htmlFor="">Blog Content</label>
                            {
                                blog && 
                                <textarea name="" onChange={e => {setContent(e.target.value)}} value={blogContent} className="form-control" style={{resize:'none'}} id="" cols="30" rows="10"></textarea>
                            }
                            <div className="col mt-5">
                                <button onClick={updateHandler} className="btn btn-primary">
                                    Update Blog
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}




