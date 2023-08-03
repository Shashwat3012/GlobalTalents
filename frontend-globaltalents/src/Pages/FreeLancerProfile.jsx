import React from "react";
import {Header} from "../Components/Header";
import { Footer } from "../Components/Footer";
import CarouselComponent from "../Components/CarouselComponent";
import Review from "../Components/Reviews";
import  "./FreeLancerProfile.css";


import { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";

const FreeLancerProfile = () => {
  const [fixedDivPosition, setFixedDivPosition] = useState("fixed");

  useEffect(() => {
    const handleScroll = () => {
      const fixedDiv = document.getElementById("fixedDiv");
      const footer = document.getElementById("footer");
      const footerOffset = footer.offsetTop;

      if (
        window.pageYOffset + window.innerHeight >= footerOffset &&
        fixedDivPosition === "fixed"
      ) {
        setFixedDivPosition("static");
      } else if (
        window.pageYOffset + window.innerHeight < footerOffset &&
        fixedDivPosition === "static"
      ) {
        setFixedDivPosition("fixed");
      }
    };
 
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fixedDivPosition]);

  return (
    <div>
      <NavBar />
      <div style={{display :"flex"}}>
      <div className="fixedDiv" style={{position:fixedDivPosition, width:"25%"}}>
        <div style={{display:"flex"}}>
        <h3 style={{marginBottom:"15px"}} >Project Cost:</h3>
        <span style={{marginLeft:"10px"}}>$100</span>
        </div>

        <div style={{marginBottom:"15px"}}>
        <h4>Delivery Time :</h4>
        <span class="glAQDp5 delivery-icon" aria-hidden="true" style={{width: "16px", height: "16px"}}><svg width="16" height="16" style={{marginRight:"10px"}} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path><path d="M9 4H7v5h5V7H9V4z"></path></svg>2-3days</span>
        </div>
        <h4>Package Description:</h4>
        <p>Shopify Home Page Design Or Redesigning 10 products Upload+perfect collection+basic theme.</p>

        <a className="hire-btn" href="/" type="button">Hire Me</a>
      </div>

      <div className="freelancer-profile">
        <h2>Title of FreeLancer</h2>
        <div className="name-image-rating">
        <img src="./images/freeLancer.jpg" className="freelancer-image"/>
        <div className="name-rating">
        <h2>Millie Bobby Brown</h2>
        <p>Rating : 4.6 of 5</p>
        </div>
        </div>
        <div className="carousel" style={{height:"200px", backgroundColor:"wheat"}}>
        <CarouselComponent />
        </div>
    <div className="bio">
        <h2>Bio about FreeLancer</h2>
        <pre>HELLO & WELCOME TO MY GIG!



Are You Looking for a professional Wix website designer?

Didnt find a person who can guide you and take you through the process? 
Dont worry, it wont be the case anymore I am here to help you to be the best!!!



I'm the most Senior WIX WEBSITE DESIGNER. I design professional, attractive,
 eye-catching, mobile friendly, easy to navigate, and high-quality custom Wix.
I complete all my projects with absolute devotion and perfection.



What I Offer:

Wix Website from scratch
Redesign Wix Website
Wix SEO
Speed Optimization
Clone Any site on wix
Domain Connectivity
Wix Booking
Landing page/Scrolling Page
Error Fixing and Upgrade
E-Commerce & Online Store Web Site
Responsive design for Desktop, Mobile, and Tablet
Suitable colors schemes & fonts selection
Live Video tutorials for Wix


Why Choose Me:

Free Consultation
On-Time Delivery
Unlimited Revisions
100% Satisfaction & Money-back guarantee
24/7 Customer Support


Please send us a message before ordering.

 

Complete custom order website cost and time depend on how many pages and features you want. We can tell you how much and the exact time frame.



Thank</pre>
      </div>
      <div className="projects">
        <h3>My projects.</h3>
        <div style={{display:"flex"}}>
        <img src="./images/freeLancer.jpg" width="35%" height={300}/>
        <img src="./images/freeLancer.jpg" width="35%" height={300}/>
        <img src="./images/freeLancer.jpg" width="35%" height={300}/>
        </div>
      

      <div>
      <div className="about-me">
        <h3> About Me</h3>
        <div style={{display:"flex"}}>
        <div className="about-me-section">
          <h4>From</h4>
          <p>Country name</p>
        </div>
        <div className="about-me-section">
          <h4>Experience</h4>
          <p>2 years</p>
        </div>
        </div>
        <div style={{display:"flex"}}>
          <div className="about-me-section">
            <h4>Skills</h4>
            <p>Web-Development ,DataBase, full-stack</p>
          </div>
          <div className="about-me-section">
            <h4>Languages</h4>
            <p>English, Hindi ,Marathi</p>
          </div>
        </div>
      </div>
        <div className="reviews">
          <h2>Reviews</h2>
          <Review />
          <Review />
          <Review />
        </div>
      </div>
      

      <div>

      </div>
      </div>

      </div>
      </div>
      
      <Footer />
    </div>
  );
};



export default FreeLancerProfile;