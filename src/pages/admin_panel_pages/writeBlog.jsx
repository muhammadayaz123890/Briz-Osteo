<<<<<<< HEAD

import React, { useState } from "react";
import FroalaEditorComponent from "react-froala-wysiwyg";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import { collection,addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";

export default function WriteBlog() {
  const [blogContent, setBlogContent] = useState("");
  const navigate = useNavigate();
  
  const handlePublishBlog = (event) => {
  event.preventDefault();

  console.log("hello world");
  console.log(blogContent);
  
  const collectionRef = collection(db, "blogs");

  addDoc(collectionRef, {
    title: document.getElementById("title-id").value,
    content: blogContent, // Use the content from state
    allow:document.getElementById('allow').value,
    addOn: new Date().toISOString().slice(0, 16),
  }).then((res) => {
    navigate('/admin/your-blogs/')
  });
};

  return (
    <div className="write-blog-wrapper mb-5 container">
      <div className="row">
        <h2 style={{ color: "gray" }} className="app-heading">
          Write Blog
        </h2>
      </div>
      <div className="row form-row mt-5">
        <form
          id="form-id"
          onSubmit={handlePublishBlog}
          className="col-lg-12 d-flex flex-column align-items-start justify-content-start"
        >

          <span className="label  mb-3">Title:</span>
          <input id="title-id" required type="text" className="form-control" />
          <span className="label mt-4 mb-3">Allow on Home page:</span>
          <select className="form-control"  style={{cursor:'pointer'}}  id="allow">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <span className="label mb-3 mt-3">Content:</span>
          <div className="row">
            <div style={{ width: "60vw" }} className="col-lg-12">
              <div className="d">
                <FroalaEditorComponent
                  model={blogContent} // Set the model to the state
                  onModelChange={(content) => setBlogContent(content)} // Update state on change
                />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary mx-3 mt-4">
            Publish Blog
          </button>
        </form>
      </div>
    </div>
  );
}
=======
import React from "react";
import { useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";



export default function WriteBlog() {

    const editorRef = useRef(null);


    function handleGetContent() {
        if (editorRef.current) {
            const editor = editorRef.current.editor;
            const content = editor.getContent();
            console.log('Editor Content:', content);
        }
    }

    const handlePublishBlog = event => {
        event.preventDefault();

        const collectionRef = collection(db, 'blogs');

        console.log(new Date().toISOString());

        addDoc(collectionRef, {
            title:document.getElementById('title-id').value,
            content:document.getElementById('content-id').value,
            addOn : new Date().toISOString().slice(0,16)
        }).then(res => {
            document.getElementById('form-id').reset();
        })
    };

    return (
        <>
            <div className="write-blog-wrapper  container">
                <div className="row">
                    <h2 style={{ color: 'gray' }} className="app-heading">
                        Write Blog
                    </h2>
                </div>
                <div className="row form-row mt-5">
                    <form id="form-id" onSubmit={handlePublishBlog} className="col-lg-12 d-flex flex-column align-items-start justify-content-start">
                        <span className="label mb-3">
                            TItle :
                        </span>
                        <input id="title-id" required type="text" className="form-control" />
                        <span className="label mb-3 mt-3">
                            Content :
                        </span>
                        <div className="row">
                            <div className="col-lg-12">
                                <textarea  name="" required id="content-id" className="editor" rows="10" />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary mx-3 mt-4" >Publish Blog</button>
                    </form>
                </div>
            </div>
        </>
    )
}




>>>>>>> 694c2a70a6bbf3bf628301716fe28c7162818944
