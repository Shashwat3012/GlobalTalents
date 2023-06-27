import React from 'react'
import './Detailedjobpost.css'

export const Detailedjobpost = () => {
  return (
    <>
    <div className='detailedpost'>
        <div className='container'>
            <div className='row1'>
                <div className='col'>
                    <h2>Full Stack Developer</h2>
                    <p>posted 12 days ago</p>
                    <p>location</p>
                </div>
                <div className='edit-icons'>
                    <a href='/'><i className="fa-regular fa-pen-to-square fa-xl"></i></a>
                    <a href='/'><i className="fa-regular fa-trash-can fa-xl"></i></a>
                </div>
            </div>
            <div className='desc'>
                <h4>job description</h4>
                <p>It is a long established fact that a reader will be distracted by the readable content of a 
                    page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
                    normal distribution of letters, as opposed to using 'Content here, content here', making it 
                    look like readable English. Many desktop publishing packages and web page editors now use 
                    Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many 
                    web sites still in their infancy. Various versions have evol</p>
            </div>
            <div className='desc'>
                <div className='flex'>
                    <h4>Duration:</h4>
                    <p>12 months</p>
                    <h4>Stipend: </h4>
                    <p>5000/month</p>
                </div>
            </div>
            <div className='desc'>
                <div className='flex'>
                    <h4>Job Status:</h4>
                    <p>Ongoing</p>
                </div>
            </div>
            <div className='desc'>
                <h4>Skills Required</h4>
                <p>It is a long established fact that a reader will be distracted by the readable content of a 
                    page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
                    web sites still in their infancy. Various versions have evol</p>
            </div>
        </div>
    </div>
    
    </>
  )
}
