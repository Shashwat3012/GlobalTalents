import React from "react";

const Review = () =>{
    return(
        <div class="review" style={{borderBottom:"solid 1px gray", padding:"20px"}}>
        
    <div class="reviewer" style={{display:"flex"}}>
      <img class="reviewer-image" src="./images/freeLancer.jpg" alt="Reviewer 1" style={{width:"50px" , borderRadius:"25px"}} />
      <h3 class="reviewer-name" style={{marginTop:"25px", marginLeft:"10px"}}>John Doe</h3>
    </div>
    <div class="review-content">
      <div class="review-rating"> Rating : 4.5/5</div>
      <p class="review-text">Great product! Highly recommended. The quality and service exceeded my expectations.</p>
    </div>
  </div>
  
    );
}

export default Review;