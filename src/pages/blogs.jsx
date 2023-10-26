import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { db } from "../firebase";
import SingleBlog from "./singleBlog";



export default function Blogs () {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
      const unsubscribe = onSnapshot(collection(db,'blogs'), (snapshot) => {
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

    return (
        <>
            <div className="blogs-page-wrapper">
                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center">
                        {
                            blogs.map(blog => {
                                return (
                                    <SingleBlog id={blog.id} date={blog.addOn} content={blog.content} title={blog.title}   />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}


