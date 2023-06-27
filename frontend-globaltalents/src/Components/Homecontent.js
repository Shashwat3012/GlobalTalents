import React from 'react'
import './Homecontent.css'

export const Homecontent = () => {
  return (
    <>
    <div className='homecontent'>
        <div className="container">
            <div className="row">
                <div className="col2">
                    <h1>Find great Works and Talents.</h1>
                    <h2>You can have the best people.<br/> Right now. Right here.</h2>
                    <a href='/' className='btn'>Get started</a>
                </div>
                <div className="col2">
                    <img src='/images/bg1.jpg' alt=''/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
