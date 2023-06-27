import React from 'react'
import './Clientdash.css'
import { Link } from 'react-router-dom'

const jobs = [
    {
        name: "Web Developer",
        date: 12,
        proposals: 12,
        hired: 14
    },
    {
        name: "Web Developer",
        date: 5,
        proposals: 15,
        hired: 6
    },
    {
        name: "Full Stack Developer",
        date: 5,
        proposals: 6,
        hired: 6
    },
    {
        name: "Data Scientist",
        date: 8,
        proposals: 6,
        hired: 6
    },
    {
        name: "Web Developer",
        date: 5,
        proposals: 20,
        hired: 6
    },
    {
        name: "Frontend Developer",
        date: 7,
        proposals: 30,
        hired: 6
    },
    {
        name: "Web Developer",
        date: 5,
        proposals: 6,
        hired: 6
    }
];
export const Clientdash = () => {
  return (
    <>
    <div className='clientd'>
        <div className='head'>
            <h1>Your Job Postings</h1>
            <div className='links'>
                <a href='/postjob' className='btn'>Post a Job</a>
            </div>
        </div>
        <div className='c-container'>
            {jobs.map((jobs) => (
                <div className='row'>
                    <div>
                        <h3><Link to='/details'>{jobs.name}</Link></h3>
                        <p>{`Posted ${jobs.date} days ago`}</p>
                    </div>
                    <div className='desc'>
                        <div className='count'>
                            <p>{jobs.proposals}</p>
                            <p>proposals</p>
                        </div>
                        <div className='count'>
                            <p>{jobs.hired}</p>
                            <p>hired</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}
