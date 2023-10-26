import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase";



export default function YourBlogs() {

    const [blogs, setBlogs] = useState([]);

    const deleteBlog = event => {
        const bId = event.target.id;
        console.log(bId);

        deleteDoc(doc(db, 'blogs', bId))
        .then(res => {
            console.log('deleted');
        });
    }

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'blogs'), (snapshot) => {
            const blogsArray = [];
            snapshot.forEach((doc) => {
                blogsArray.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
            setBlogs(blogsArray);
            console.log(blogsArray);
        });

        return () => {

            unsubscribe();
        };
    }, []);


    useEffect(() => {


    }, [])


    return (
        <>
            <div className="see-blogs-wrapper">
                <div className="container">
                    <div className="row">
                        <h2 style={{ color: 'gray' }} className="app-heading">
                            Your Blogs
                        </h2>
                    </div>

                    <div className="row d-flex  flex-column mt-5">
                        {blogs && blogs.map(blog => {

                            return (
                                <div className="col-lg-12 mt-4 my-blog">
                                    <h4 style={{ color: 'gray' }}>
                                        {blog.title}
                                    </h4>
                                    <p>
                                        {
                                            <span className="blog-content">
                                                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                                            </span>
                                        }
                                    </p>
                                    <div className="col">
                                        <Link className="btn btn-outline-info" to={`/admin/edit-blog/${blog.id}`} >Edit</Link>
                                        <button id={blog.id} className="btn btn-danger mx-4" onClick={deleteBlog}>Delete</button>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

