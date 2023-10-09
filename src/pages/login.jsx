import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Auth } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword } from "firebase/auth";
import { app, auth } from "../firebase";




export default function Login() {

  const navigate = useNavigate();
  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  let message = null;


  const LoginSubmitHandler = event => {
    event.preventDefault();

    signInWithEmailAndPassword(auth, userEmail, userPassword).then(res => {
      message = ''
      document.querySelector('.error-container').innerText = message;

      navigate('/');
    }).catch(err => {
      message = 'Invalid Credentials. Try Again.'
      document.querySelector('.error-container').innerText = message;
    })
  }


  const googleLoginHandler = event => {

    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

        navigate('/');

      }).catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });

  }


  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex flex-row justify-content-center align-items-center">
          <div className="col-lg-5 col-md-8 col-sm-12">
            <div className="login-wrapper w-100 row d-flex flex-row justify-content-center align-items-center">
              <h5 className="error-container" style={{color:'red',width:'fit-content'}}></h5>
              <form onSubmit={LoginSubmitHandler}>
                <div class="form-outline mb-4">
                  <input onChange={e => setEmail(e.target.value)} value={userEmail} type="email" id="form2Example1" class="form-control" />
                  <label class="form-label" for="form2Example1">Email address</label>
                </div>

                <div class="form-outline mb-4">
                  <input onChange={e => setPassword(e.target.value)} value={userPassword} type="password" id="form2Example2" class="form-control" />
                  <label class="form-label" for="form2Example2">Password</label>
                </div>

                <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

                <div class="text-center">
                  <p>Not a member? <Link to='/register'>Register</Link></p>
                  <p>or sign up with:</p>
                  <button onClick={googleLoginHandler} className="btn btn-outline-info"> <i class="fa-brands fa-google"></i> Continue with Google</button>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


