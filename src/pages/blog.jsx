import { getDoc } from "firebase/firestore";
import React, { useState , useEffect} from "react";
import { doc } from "firebase/firestore";
import { db } from "../firebase";
import { useParams } from "react-router-dom";



export default function Blog() {

    const { id } = useParams();
    const [blog, setBlog] = useState({});
    const [dateTime, setDateTime] = useState('');



    useEffect(() => {
        const fetchBlog = async () => {
          try {
            const blogRef = doc(db, 'blogs', id);
            const blogSnapshot = await getDoc(blogRef);
    
            if (blogSnapshot.exists()) {
              const blogData = blogSnapshot.data();
              setBlog(blogData);
              let date = blogData.addOn;
              date = date.replace('T', ' ')
              setDateTime(date);
            } else {
              console.log('Document does not exist');
            }
          } catch (error) {
            console.error('Error fetching blog:', error);
          }
        };
    
        fetchBlog();
      }, [id]);
    



    return (
        <>
            <div className="blog-page-wrapper">
                <div className="container-sm">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-lg-8 d-flex flex-column col-md-10 col-sm-12">
                            <h2 className="blog-heading">
                                {blog.title}
                            </h2>
                            <span className="date">
                                {dateTime}
                            </span>
                            <span className="blog-content">
                                {blog.content}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

