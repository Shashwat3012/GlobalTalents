import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <>
    <div className="footer" id="footer">
        <div className="box-container">
            <div className="footbox">
                <h3>quick links</h3>
                <a href="#"><i className="fas fa-angle-right"></i> home</a>
                <a href="#"><i className="fas fa-angle-right"></i> about</a>
                <a href="#"><i className="fas fa-angle-right"></i> services</a>
            </div>

            <div className="footbox">
                <h3>extra links</h3>
                <a href="#"><i className="fas fa-angle-right"></i> ask questions</a>
                <a href="#"><i className="fas fa-angle-right"></i> privacy policy</a>
                <a href="#"><i className="fas fa-angle-right"></i> terms to use</a>
            </div>

            <div className="footbox">
                <h3>contact info</h3>
                <a href="#"><i className="fas fa-phone"></i> +123-456-789 </a>
                <a href="#"><i className="fas fa-envelope"></i> abcde@gmail.com </a>
                <a href="#"><i className="fas fa-map"></i> mumbai, india - 400104 </a>
            </div>

            <div className="footbox">
                <h3>follow us</h3>
                <a href="#"><i className="fab fa-facebook-f"></i> facebook </a>
                <a href="#"><i className="fab fa-twitter"></i> twitter </a>
                <a href="#"><i className="fab fa-instagram"></i> instagram </a>
                {/* <a href="#"><i className="fab fa-linkedin"></i> linkedin </a> */}
            </div>
        </div>
        <div className="credit"> created by <span>xyz</span> | all rights reserved! </div>
    </div>
    </>
  )
}
