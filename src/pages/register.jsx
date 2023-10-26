import { createUserWithEmailAndPassword , GoogleAuthProvider, signInWithPopup, getAuth} from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";


export default function Regist() {

    const [userEmail, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');
    const navigate = useNavigate();
    

  const registerHandler = event => {
    event.preventDefault();

    console.log(userPassword, userEmail);
    createUserWithEmailAndPassword(auth, userEmail, userPassword).then(res => {
        navigate('/create-patient-profile');
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

        navigate('/create-user-profile');
        
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
          <div className="login-wrapper">
        <form onSubmit={registerHandler}>
          <div class="form-outline mb-4">
            <input onChange={e => setEmail(e.target.value)} value={userEmail} type="email" id="signup-email" class="form-control" />
            <label class="form-label" for="form2Example1">Email address</label>
          </div>

          <div class="form-outline mb-4">
            <input onChange={e => setPassword(e.target.value)} value={userPassword} type="password" id="signup-password" class="form-control" />
            <label class="form-label" for="form2Example2">Password</label>
          </div>

          <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

          <div class="text-center">
            <p>Not a member? <Link to='/login'>Login</Link></p>
            <p>or sign up with:</p>
            <button onClick={googleLoginHandler} type="button" className="btn btn-outline-info"> <i class="fa-brands fa-google"></i> Continue with Google</button>
          </div>
        </form>
      </div>
          </div>
        </div>
      </div>
    </>
  )
}


