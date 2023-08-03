import React from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import "../Pages/UserProfile.css";
import NavBar from "../Components/NavBar";

const UserProfile = () => {
    
    const skills =["HTML","CSS","Django","Database management"];

    const education= [
        {
            name:"Vivekanad Edu Society Institute of Technology",
            course:"Bachelor of Engineering",
            duration: "2021-2025"
        },
        {
            name:"VN sule English Medium School",
            course:"Bachelor of Engineering",
            duration: "2021-2025"
        }
    ];

    const experience =[
        {
            role:"Web app Developer",
            company:"Erfinden PVT LTD",
            post:"Intern",
            duration:"2 Months",
            skills:"HTML, CSS , JS , React, JAVA Sping-boot, PostgreSQL"
        }
    ]
    return (
        <div>
            <NavBar />
            <div className="profile">
                <div className="base intro">
                    <img src="./images/freeLancer.jpg" />
                    <h2>Gaurang Mapuskar</h2>
                    <p>Student at college.</p>
                    <p>Mumbai,India</p>
                    
                </div>
                <div className="base contact-info">
                    <h2>Contact Information.</h2>
                    <p>Mobile : 9999999999</p>
                    <p>Email : 2021.gaurang.mapuskar@ves.ac.in</p>
                    <p>Address : Currey Road, Mumbai, India</p>
                    <p>Date of Birth : 20 Feb, 2004</p>
                </div>
                <div className="base education">
                    <h2>Education</h2>
                    
                    {education.map((education)=>{
                        return(
                            <div className="institution">
                        <img src="./" width={50} height={50} />
                        <div style={{marginLeft:"30px"}}>
                        <h4>{education.name}</h4>
                        <p>{education.duration}</p>
                        <p>{education.course}</p>
                        </div>
                        </div>
                        );
                    })}
                </div>
                <div className="base skills">
                    <h2>Skills</h2>
                    <div className="skills-element">
                    {skills.map((skills)=>{
                        return(
                            <div className="skills-list">
                            {skills}
                            </div>
                        );
                    })}
                    </div>
                </div>
                <div className="base experience">
                    <h2>Experience</h2>
                    
                    {experience.map((experience)=>{
                        return(
                            <div className="experience-elements">
                    <img src="./" width={50} height={50} />
                    <div>
                    <h4>{experience.role}</h4>
                    <p>{experience.company}</p>
                    <p>{experience.post}</p>
                    <p>{experience.duration}</p>
                    <p>{experience.skills}</p>
                    </div>
                    </div>
                        )
                    })}
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default UserProfile;