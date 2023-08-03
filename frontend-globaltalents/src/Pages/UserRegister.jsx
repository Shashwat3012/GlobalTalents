import React, { useState } from 'react';
import "./UserRegister.css"
import { Header } from '../Components/Header';
import NavBar from '../Components/NavBar';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log(formData);
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div>
    <NavBar />
    <div className="registration-base">


    Step {currentStep} of 8
      <div className="progress-bar">
        <div>
        <div className="progress" style={{ width: `${(currentStep / 8) * 100}%`,backgroundColor:"blueviolet",height:"20px",borderRadius:"10px"}}></div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
      <div className="form-base">
        {currentStep === 1 && (
          <div style={{display:"grid"}}>
            <h2>What should we call you?</h2>
            <label>First Name:</label>
            <input type="text" name="fname" value={formData.fname} onChange={handleInputChange} style={{marginTop: "10px",height: "30px",borderRadius: "5px",fontSize: "20px"}} />
            <label> Last Name:</label>
            <input style={{marginTop: "10px",height: "30px",borderRadius: "5px",fontSize: "20px"}} type="text" name="lname" value={formData.lname} onChange={handleInputChange} />
            <br />
            <button type="button" style={{width:"100px", height:"35px" , borderRadius:"10px", fontSize:"20px", backgroundColor:"#38d16a",color:"white"}} onClick={handleNextStep}>Continue</button>
          </div>
        )}

        {currentStep === 2 && (
          <div style={{display:"grid"}}>
            <h2>Welcome Username!<br/> What's Your Location</h2>
            <label>Country:</label>
            <input style={{marginTop: "10px",height: "30px",borderRadius: "5px",fontSize: "20px"}} type="text" name="country" value={formData.country} onChange={handleInputChange} />
            <br />
            <label>City:</label>
            <input style={{marginTop: "10px",height: "30px",borderRadius: "5px",fontSize: "20px"}} type="text" name="city" value={formData.city} onChange={handleInputChange} />
            <br />
            <div>
            <button type="button" style={{width:"100px", height:"35px" , borderRadius:"10px", fontSize:"20px", backgroundColor:"#38d16a",color:"white"}} onClick={handlePrevStep}>Previous</button>
            <button type="button" style={{width:"100px", height:"35px" , borderRadius:"10px", fontSize:"20px", backgroundColor:"#38d16a",color:"white"}} onClick={handleNextStep}>Next</button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div style={{display:"grid"}}>
            <h2>Step 3</h2>
            <label>Most Recent job title</label>
            <input style={{marginTop: "10px",height: "30px",borderRadius: "5px",fontSize: "20px"}} type="text" name="jobTitle" value={formData.jobTitle} onChange={handleInputChange} />
            <label>Employment Type</label>
            <input style={{marginTop: "10px",height: "30px",borderRadius: "5px",fontSize: "20px"}} type="text" name="jobTitle" value={formData.jobTitle} onChange={handleInputChange} />
            <label>Most recent Company</label>
            <input style={{marginTop: "10px",height: "30px",borderRadius: "5px",fontSize: "20px"}} type="text" name="jobTitle" value={formData.jobTitle} onChange={handleInputChange} />
            <br />
            <button type="button" style={{height: "30px",fontSize: "20px",backgroundColor: "blueviolet",color: "white",borderRadius: "15px"}} >I'm a Student</button>
            <br />
            <div>
            <button type="button" style={{width:"100px", height:"35px" , borderRadius:"10px", fontSize:"20px", backgroundColor:"#38d16a",color:"white"}} onClick={handlePrevStep}>Previous</button>
            <button type="button" style={{width:"100px", height:"35px" , borderRadius:"10px", fontSize:"20px", backgroundColor:"#38d16a",color:"white"}} onClick={handleNextStep}>Next</button>
            </div>
            </div>
        )}

        {currentStep === 4 && (
          <div style={{display:"grid"}}>
            <h2>Step 4</h2>
            <label>College/Univerity:</label>
            <input style={{marginTop: "10px",height: "30px",borderRadius: "5px",fontSize: "20px"}} type="text" name="college" value={formData.college} onChange={handleInputChange} />
            <label>Start year:</label>
            <input style={{marginTop: "10px",height: "30px",borderRadius: "5px",fontSize: "20px"}} type="year" name="collegeStart" value={formData.collegeStart} onChange={handleInputChange} />
            <label>End year:</label>
            <input style={{marginTop: "10px",height: "30px",borderRadius: "5px",fontSize: "20px"}} type="year" name="collegeEnd" value={formData.collegeEnd} onChange={handleInputChange} />
            <label>Course Pursued:</label>
            <input style={{marginTop: "10px",height: "30px",borderRadius: "5px",fontSize: "20px"}} type="text" name="collegeCourse" value={formData.collegeCourse} onChange={handleInputChange} />
            <br />
            <div>
            <button type="button" style={{width:"100px", height:"35px" , borderRadius:"10px", fontSize:"20px", backgroundColor:"#38d16a",color:"white"}} onClick={handlePrevStep}>Previous</button>
            <button type="button" style={{width:"100px", height:"35px" , borderRadius:"10px", fontSize:"20px", backgroundColor:"#38d16a",color:"white"}} onClick={handleNextStep}>Next</button>
            </div>
            </div>
        )}

        {currentStep === 5 && (
          <div style={{display:"grid"}}>
            <h2>What kind of job you are looking</h2>
            <label>Job Titles</label>
            <input style={{marginTop: "10px",height: "30px",borderRadius: "5px",fontSize: "20px"}} type="text" name="reqJobTitle" value={formData.reqJobTitle} onChange={handleInputChange} />
            <label>Job Location</label>
            <input style={{marginTop: "10px",height: "30px",borderRadius: "5px",fontSize: "20px"}} type="text" name="reqJobLocation" value={formData.reqJobLocation} onChange={handleInputChange} />
            <br />
            <div>
            <button type="button" style={{width:"100px", height:"35px" , borderRadius:"10px", fontSize:"20px", backgroundColor:"#38d16a",color:"white"}} onClick={handlePrevStep}>Previous</button>
            <button type="button" style={{width:"100px", height:"35px" , borderRadius:"10px", fontSize:"20px", backgroundColor:"#38d16a",color:"white"}} onClick={handleNextStep}>Next</button>
            </div>
            </div>
        )}

        {currentStep === 6 && (
          <div style={{display:"grid"}}>
            <h2>What kind of job you are looking</h2>
            <label>Add profile photo</label>
            <input style={{marginTop: "10px",height: "30px",borderRadius: "5px",fontSize: "20px"}} type="image" name="userImage" value={formData.userImage} onChange={handleInputChange} />
            <div>
            <button type="button" style={{width:"100px", height:"35px" , borderRadius:"10px", fontSize:"20px", backgroundColor:"#38d16a",color:"white"}} onClick={handlePrevStep}>Previous</button>
            <button type="button" style={{width:"100px", height:"35px" , borderRadius:"10px", fontSize:"20px", backgroundColor:"#38d16a",color:"white"}} onClick={handleNextStep}>Next</button>
            </div>
            </div>
        )}

        {currentStep === 7 && (
          <div style={{display:"grid"}}>
            <h2>Tell us about your skills</h2>
            <label>Skills</label>
            <input style={{marginTop: "10px",height: "30px",borderRadius: "5px",fontSize: "20px"}} type="text" name="reqJobTitle" value={formData.reqJobTitle} onChange={handleInputChange} />
            <br />
            <div>
            <button type="button" style={{width:"100px", height:"35px" , borderRadius:"10px", fontSize:"20px", backgroundColor:"#38d16a",color:"white"}} onClick={handlePrevStep}>Previous</button>
            <button type="button" style={{width:"100px", height:"35px" , borderRadius:"10px", fontSize:"20px", backgroundColor:"#38d16a",color:"white"}} onClick={handleNextStep}>Next</button>
            </div>
            </div>
        )}

        {currentStep === 8 && (
          <div style={{display:"grid"}}>
            <h2>Tell us about yourself</h2>
            <label>Write a summary to highlight your personality or work experience.</label>
            <textarea style={{marginTop: "10px",height: "200px",borderRadius: "5px",fontSize: "20px"}} type="text" name="reqJobTitle" value={formData.reqJobTitle} onChange={handleInputChange} />
            <br />
            <div>
            <button type="button" style={{width:"100px", height:"35px" , borderRadius:"10px", fontSize:"20px", backgroundColor:"#38d16a",color:"white"}} onClick={handlePrevStep}>Previous</button>
            <button type="submit" style={{width:"100px", height:"35px" , borderRadius:"10px", fontSize:"20px", backgroundColor:"#38d16a",color:"white"}} onClick={handleNextStep}>Submit</button>
            </div>
            </div>
        )}
        </div>
      </form>
    </div>
    </div>
  );
};

export default MultiStepForm;
