import React, { useState } from "react";
import "./LoginPage.css";
import EyeIcon from "./EyeIcon";
import scribble from  '../../assets/image.png';
import Typewriter from '../common/TypeWriter';


export default function LoginPage() {
  const [selectedPage, setSelectedPage] = useState("login");
  const [passwordVisible, setPasswordVisible] = useState(false);


  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };




  return (
    <div className="login-page-container">
      <div className="input-details-page">
      <div
          className="login-signup-toggle"
          style={selectedPage==='signup'?{  }:{}}
        >
          <span
            className="login-button"
            style={
              selectedPage === "login"
                ? { color: "#944E63", fontWeight: "bold" }
                : {}
            }
            onClick={() => setSelectedPage("login")}
          >
            Login
          </span>
          <span
            style={
              selectedPage === "signup"
                ? { color: "#944E63", fontWeight: "bold" }
                : {}
            }
            onClick={() => setSelectedPage("signup")}
          >
            Signup
          </span>
        </div>
        <div className="input-boxes">
          {selectedPage === 'login' &&
            <form action="">
            <p className="login-labels">Enter Username</p>
            <input
              type="text"
              name="username"
              id="username"
              className="login-details"
            />


            <p className="login-labels">Enter Password</p>
            <div className="password-container">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                id="password"
                className="login-details"
              />
              <div className="password-visibility"
                onClick={togglePasswordVisibility}>
              <EyeIcon
               
              />
              </div>
            </div>


            <button type="submit">Continue</button>
          </form>
          }
          {selectedPage === 'signup' &&
            <form action="">
            <p className="login-labels">Enter Username</p>
            <input
              type="text"
              name="username"
              id="username"
              className="login-details"
            />
         
            <p className="login-labels">Enter Bio</p>
            <input
              type="text"
              name="bio"
              id="bio"
              className="login-details"
            />
         
            <p className="login-labels">Enter Email</p>
            <input
              type="email"
              name="email"
              id="email"
              className="login-details"
            />
         
            <p className="login-labels">Enter Password</p>
            <div className="password-container">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                id="password"
                className="login-details"
              />
              <div className="password-visibility" onClick={togglePasswordVisibility}>
                <EyeIcon />
              </div>
            </div>
         
            <button type="submit">Continue</button>
          </form>
         
          }


          <div className="login-form-terms"><p>Terms & Conditions</p><p>&nbsp;|&nbsp;</p><p> Privacy </p><p>&nbsp;|&nbsp;</p><p>About us</p></div>
        </div>
      </div>
      <div className="display-banner">
      <Typewriter text='"A poem begins in delight and ends in wisdom."' speed={50} />
        <img src={scribble} alt="" />
      </div>
     
    </div>
  );
}
