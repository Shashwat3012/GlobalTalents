import React from "react";

import { Container } from "@mui/material";
// import Navbar from "../Components/NavBar";
import lancer from "../assets/Freelancers";
import Cards from "../Components/Card";
import ListItems from "../Components/List";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import ItemContainer from "../Components/ItemContainer";
import NavBar from "../Components/NavBar";


const Freelancer = ()=>{
    return (
        <div>
          <NavBar />

          {/* bootstrap Navbar */}
          {/* <Navbar /> */}

          {/* Using homecontent */}
          <div className='Homecontent'>
        <div className="container">
            <div className="row">
                <div className="col2">
                    <h1>Hire a Talent</h1>
                    <h2>You can have the best people.<br/> According to your needs..</h2>
                    <a href='/' className='btn'>Get started</a>
                </div>
                <div className="col2">
                    <img src='./images/freeLancerbg1.jpg' width={600} alt=''/>
                </div>
            </div>
        </div>
    </div>

      <div style={{display:"flex"}}>
      <div style={{paddingLeft:"20px",paddingRight:"30px"}}>
        <Cards />
      </div>
       <div style={{display:"block", width:"100%"}}>
          <ItemContainer />
          <ItemContainer />
          <ItemContainer />
       </div>
      </div>
          {/* <Container>
          
          {lancer.map((FreeLancer)=>{return <Cards name={FreeLancer.name} />})}
          
          {lancer.map(()=>{return <ListItems />})}
          </Container> */}
          
          <Footer />
        </div>
    )
}

export default Freelancer;