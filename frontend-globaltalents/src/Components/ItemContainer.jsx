import React from "react";
import "./ItemContainer.css";


const ItemContainer = () => {
    return (
        <div style={{display:"flex" , border:"solid 0.5px",width:"95%", alignContent:"end", marginLeft:"20px"}}>
            
             <img src="./images/freeLancer.jpg" width={100} height={100} style={{padding:"10px",marginTop:"25px" ,borderRadius:"100px"}} />

            <div style={{margin:20, width:"100%"}} className="header">
                <h3 style={{padding:10}}>Milli Bobby Brown</h3>
                <p>BTech-Computer Science | MBA from IIM-A</p>

                <div className="skills" style={{margin:"10px",marginBottom:"20px"}}>
                    <p>Full Stack Developer | Database Management | AI-ML</p>
                    <p>Star rating : 4.3 of 5</p>
                    <p>Mumbai,India</p>
                </div>

                <div style={{width:"inherit", height:"30px",}}>
                <a href="/freelancer-profile" style={{display:"block", width: "inherit", backgroundColor: "#38d16a",color: "white", height: "35px",borderRadius:"5px",fontSize: "19px",textAlign:"center"}} >Hire UserName</a>
                
                </div>

            </div>
            
        </div>
    );
};

export default ItemContainer;