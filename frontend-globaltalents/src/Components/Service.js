import React from 'react'
import './Service.css'

export const Service = () => {
  return (
    <>
    <div className='service' id='service'>
        <h1 className='title'>Our Services</h1>
        <div className='s-row'>
            <div className='box'>
                <div className='image'>
                    <img src='/images/s1.png' alt='' />
                </div>
                <div className='content'>
                    <h2>Cients</h2>
                    <div className='text'>
                        <p>&#8226; Post a job</p>
                        <p>&#8226; hire talents</p>
                    </div>
                </div>
            </div>
            <div className='box'>
                <div className='image'>
                    <img src='/images/s2.png' alt='' />
                </div>
                <div className='content'>
                    <h2>Frelancers</h2>
                    <div className='text'>
                        <p>&#8226; Create your profile</p>
                        <p>&#8226; Browse jobs</p>
                        <p>&#8226; Find work for your skills</p>
                    </div>
                </div>
            </div>
            <div className='box'>
                <div className='image'>
                    <img src='/images/s3.png' alt='' />
                </div>
                <div className='content'>
                    <h2>Learning</h2>
                    <div className='text'>
                        <p>&#8226; Learn new skills</p>
                        <p>&#8226; Webinars</p>
                        <p>&#8226; Tutorials</p>
                        <p>&#8226; Quizes</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
