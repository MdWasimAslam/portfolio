import React from "react";
import "./About.css";
import AssetsLink from "../../Assets/AssetsLinks.json";
import { Facebook, GitHub, Google, Instagram, LinkedIn } from "@mui/icons-material";


const About = () => {

    const goToLink=(link)=>{
        window.open(link, "_blank")
    }
  return (
    <div>
      <div className="about-title">Howdy! 👋</div>
      <br></br>
      <div className="about-desc">
        Hi, I’m Md Wasim Aslam! I’m a Full Stack Developer who’s passionate
        about turning ideas into reality with code. I love building innovative,
        user-friendly applications that combine seamless frontend design with
        powerful backend functionality.
        <br></br> 
        <br></br> 
       
       <div className="about-teampicdiv">
       <img src={AssetsLink["team-pic-1"]} alt="team-pic" className="about-teampic"></img>
       <p className="team-pic-text">Wrapping Up 2022 with Festive Joy and Amazing Teammates 🎅🎁</p>
       </div>
        
        <br></br> 
        I enjoy working with others, sharing knowledge, and helping people level up their skills. Whether it’s tackling challenges or crafting unique experiences, I take pride in blending creativity with technical expertise to deliver impactful results.
        <br></br>
        <br></br>
        Reach out and say "Hey!". I look forward to hearing from you! 🚀

        <br></br>
      </div>

      <img src={AssetsLink.sign} alt="sign" className="about-sign">
      </img>

      <div className="about-socialIconsDiv">
            <div className="about-socialIcons" onClick={()=>goToLink("https://www.linkedin.com/in/md-wasim-aslam/")}><LinkedIn/></div>
            <div className="about-socialIcons" onClick={()=>goToLink("https://www.instagram.com/wasi.im97/")}><Instagram/></div>
            <div className="about-socialIcons" onClick={()=>goToLink("https://github.com/MdWasimAslam/")}><GitHub/></div>
            <div className="about-socialIcons" onClick={()=>goToLink("https://www.facebook.com/TheWasimAslam")}><Facebook/></div>
            <div className="about-socialIcons"  onClick={()=>goToLink("mailto:wasimaslam2897@gmail.com")}><Google/></div>

      </div>
    </div>
  );
};

export default About;
