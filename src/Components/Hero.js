import React from "react";
import {  Email } from "@mui/icons-material";
import "./Hero.css";
import VerifiedIcon from '@mui/icons-material/Verified';
import AssetsLink from '../Assets/AssetsLinks.json';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CakeIcon from '@mui/icons-material/Cake';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FullWidthTabs from "./Tabs";

const Hero = () => {


  return (
    <div className="hero-container">
      <div className="video-container">
        <img src={AssetsLink.coverImage} alt="Loading" className="cover-hero" />
      </div>
      <div className="user-info">
        <div>
          <img
            src={AssetsLink.profileAvatar}
            alt="Md Wasim Aslam"
            className="user-avatar"
          />
        </div>
        <div>
          <button
            className="sayHiBtn"
            onClick={() =>
              (window.location.href = "mailto:wasimaslam2897@gmail.com")
            }
          >
            <Email />
            Say Hi!
          </button>
        </div>
      </div>

      <div className="user-details">
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div className="fullName">Md Wasim Aslam</div>
          {/* <img src={Verified} alt="Verified-Icon" className="verified-icon"/> */}
          <VerifiedIcon sx={{ color: "#F05454" }} />
        </div>
        <div className="intro-line intro-1">Developer, Thinker, Artist! ✨</div>
        <div className="intro-line">
          I turn coffee into scalable apps and seamless experiences.
        </div>
      </div>

      {/* SubIntro Sections */}
      <div className="subIntro-section">
        <div className="subIntro-items">
          <BusinessCenterIcon />
          <div>Available</div>
        </div>
        <div className="subIntro-items">
          <AttachFileIcon />
          <div style={{ color: "#F05454" }}>
            <b>/links</b>
          </div>
        </div>
        <div className="subIntro-items">
          <CakeIcon />
          <div>October 27th</div>
        </div>
        <div className="subIntro-items">
          <LocationOnIcon />
          <div>Kolkata, India</div>
        </div>
      </div>

      {/* Github Follow Section */}

      <div className="github-follow-section">
        <div>Keep up to date with my latest projects and adventures!</div>
        <div >
         <button className="github-followBtn" onClick={()=>{
          window.location.href = "https://github.com/MdWasimAslam/";
         }}> 
         <GitHubIcon /> Follow Me On Github
         </button>
        </div>
      </div>



      {/* tabs */}

      <FullWidthTabs />
    </div>
  );
};

export default Hero;
