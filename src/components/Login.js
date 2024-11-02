import React, { useState } from "react";
import { Link } from "react-router-dom";
import gold from "../imgaes/gold.png";
import "./login.css";
import { createUserWithEmailAndPassword  , signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase";

import {useNavigate } from "react-router-dom"
import toast, { Toaster } from "react-hot-toast";
const Login = () => {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((auth) => {
      if (auth) {
        navigate("/");
      }
    })
    .catch((error) => {
      
      toast.error("This didn't work.")
    });
  };
  const navigate = useNavigate();
  const register =async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };







  return (
    <div className="login">
      <div><Toaster/></div>
      <Link to="/">
        <img className="header-logo-login" src={gold} alt="logo-img" />
      </Link>
      <div className="container">
        <h1>Sign in</h1>
        <form className="formyy" onSubmit={register}>
          <h5 className="emalyy">
     email
          </h5>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value) } />



          <h5 className="passy"  >  password </h5>


          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="login-btn" type="submit" onClick={signIn}>
            Sign in
          </button>
          <p>
            By contiunting, you agree to amazon's Fake clone condithions of use
            abd privacy notice
          </p>
          <button className="login-creat">Create Your Amazon Account</button>
        </form>
        {/* {error ? "wrong password" : ""} */}
      </div>
    </div>
  );
};

export default Login;
