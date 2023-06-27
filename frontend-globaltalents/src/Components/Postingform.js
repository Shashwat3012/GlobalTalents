import React from 'react'
import './Postingform.css'
import { useNavigate } from 'react-router-dom'

export const Postingform = () => {
    const navigate = useNavigate();
  return (
    <>
    <h1 className='form-title'>Post a Job</h1>
    <div className='form-container'>
        <form className="form">
                <div className="input-box">
                    <label htmlFor="jobtitle">Job Title</label>
                    <input type="text" className="form-control" id="jobtitle" required/>
                </div>
                <div className="input-box">
                    <label htmlFor="cname">Company Name</label>
                    <input type="text" className="form-control" id="cname" required/>
                </div>
                <div className="input-box">
                    <label htmlFor="jobdesc">Job Description</label>
                    <textarea id="jobDesc" className="form-control" rows="8"></textarea>
                </div>
                <div className="input-box">
                    <label htmlFor="skills">Skills Required</label>
                    <textarea id="skills" className="form-control" rows="3"></textarea>
                </div>
                <div className="column">
                    <div className="input-box">
                        <label htmlFor="loc">Job Location</label>
                        <input type="text" className="form-control" id="loc" required/>
                    </div>
                    <div className="input-box">
                        <label htmlFor="Select">Employement Type</label>
                        <select id="Select" className="form-select">
                            <option>select</option>
                            <option>Full Time</option>
                            <option>Part Time</option>
                        </select>
                    </div>
                </div>
                <div className="column">
                    <div className="input-box">
                        <label htmlFor="jobduration">Job Duration</label>
                        <input type="text" id="jobduration" required/>
                    </div>
                    <div className="input-box">
                        <label htmlFor="stipend">Stipend</label>
                        <input type="text" id="stipend" required/>
                    </div>
                </div>
                <div className="input-box">
                    <label htmlFor="openings">Number of Openings</label>
                    <input type="number" id="openings" required/>
                </div>
                <button className='form-btn' onClick={() => navigate(-1)}>Cancel</button>
                <button type="submit" className='form-btn'>Post job</button>
        </form>
    </div>
    </>
  )
}
