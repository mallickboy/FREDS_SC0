import React from "react";
import Navbar from "./Navbar";
import Vote from "../assets/freds.jpg";
import Fox from "../assets/fox.png";
import "./login.css";

export const Login = (props) => {
  console.log("ShowNAM " + props.ShowNotAuthorized);
  const handleButtonClick = () => {
    window.open(
      "https://drive.google.com/file/d/1WO0uSGg5z5axv99zabekI_ZhjXEJZSKE/view?usp=drive_link"
    );
  };
  return (
    <>
      <Navbar />

      <section className="background firstSection">
        <div className="heading">
          <h1 className="animated-text">
            <span>W</span>
            <span>e</span>
            <span>l</span>
            <span>c</span>
            <span>o</span>
            <span>m</span>
            <span>e</span>
            <span className="space"></span>
            <span>t</span>
            <span>o</span>
            <span className="space"></span>
            <span className="violet">F</span>
            <span className="violet">R</span>
            <span className="violet">E</span>
            <span className="violet">D</span>
            <span className="violet">S</span>
          </h1>
        </div>
        <div className="box-main">
          <div className="firstHalf">
            <p className="text-big">Unmask Your Voice:<span className="violet"> Anon Freedom</span> </p>
            <p className="text-small">
            Welcome to our revolutionary decentralized forum, where anonymous voices empowered by blockchain technology champion freedom of speech. We stand for those silenced by fear, providing a secure space to express ideas, guided by AI to filter out misuse. Join us in shaping a more inclusive digital future, where everyone's voice matters.
            </p>
            <div className="below-firsthalf">
              <img src={Fox} alt="Metamask"></img>
              <div className="buttons">
                <button className="btn btn-dark" onClick={props.connectAccount}>
                  Login Metamask
                </button>
                <button className="btn btn-dark" onClick={handleButtonClick}>
                  Watch Video
                </button>
              </div>
            </div>
            <div className="NotAuthorized">
              {props.ShowNotAuthorized ? <p>You are not authorized</p> : <></>}
            </div>
          </div>
          <div className="secondHalf">
            <img src={Vote} alt="Picture"></img> 
          </div>
        </div>
      </section>

      {/* <div className="loginContainer">
      
      <button className="loginButton" onClick={props.connectAccount}>
        Login Metamask
      </button>
      <div>
        {" "}
        {props.ShowNotAuthorized ? <p>You are not authorized</p> : <></>}
      </div>
    </div> */}
    </>
  );
};