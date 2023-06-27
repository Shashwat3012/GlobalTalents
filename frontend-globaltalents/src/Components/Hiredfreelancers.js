import React from 'react'
import './Proposals.css'

const hired = [
    {
        userimg: "/images/user4.jpg",
        name: "Andrew Neil",
        position: "Full Stack Developer",
        location: "Mumbai, India",
        about: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less web sites still in their infancy. Various versions have evol...",
        skills: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim accusamus consectetur dolorum quae illum nihil rem saepe voluptatem..."
    },
    {
        userimg: "/images/user8.jpg",
        name: "Andrew Neil",
        position: "Full Stack Developer",
        location: "Mumbai, India",
        about: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less web sites still in their infancy. Various versions have evol...",
        skills: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim accusamus consectetur dolorum quae illum nihil rem saepe voluptatem..."
    },
    {
        userimg: "/images/user7.jpg",
        name: "Andrew Neil",
        position: "Full Stack Developer",
        location: "Mumbai, India",
        about: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less web sites still in their infancy. Various versions have evol...",
        skills: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim accusamus consectetur dolorum quae illum nihil rem saepe voluptatem..."
    },
]
export const Hiredfreelancers = () => {
  return (
    <>
    <div className='proposals'>
        <div className='container'>
            {hired.map((hired) => (
                <div className='row1'>
                    <div className='cont'>
                        <div className='image'>
                            <img src={hired.userimg} alt='' />
                        </div>
                    </div>
                    <div className='cont'>
                        <div className='about'>
                            <h2>{hired.name}</h2>
                            <h3>{hired.position}</h3>
                            <p>{hired.location}</p>
                        </div>
                        <div className='desc'>
                            <p>{`${hired.about.slice(0,200)}...`}</p>
                            <h4>Skills</h4>
                            <p>{`${hired.skills.slice(0,90)}...`}</p>
                        </div>
                        <div className='buttons'>
                            <button>View Profile</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}
