import React from 'react';
import { useParams } from 'react-router-dom';
import './Coursedeats.css'; // CSS file for styling
import { Link } from 'react-router-dom'

export const Details = () => {
  const { courseId } = useParams();

  // Fetch course details using the courseId from an API or a data source
  const courseDetails = {
    id: 1,
    title: 'Web Development',
    instructor: 'Smith Jones',
    duration: '8 weeks',
    description: 'This course covers various topics under Web Development such as Database Management, Web Publishing, Web Design, and Web Programming. Web Development Courses can be of various types, namely Full Stack Web Development, Front End Web Development, Back End Web Development, Web Application, etc.',
    curriculum: ['Module 1: HTML - In this module, you will learn the fundamentals of HTML (Hypertext Markup Language). You will understand the structure of web pages, how to create different types of HTML elements, and how to organize content using HTML tags and attributes.', 
    'Module 2: CSS - In this module, you will dive into CSS (Cascading Style Sheets) and explore how to style and enhance the appearance of web pages. You will learn about CSS selectors, properties, and values, and how to apply them to control the layout, typography, colors, and more.' ,
    'Module 3: JavaScript - In this module, you will discover the power of JavaScript, a versatile programming language for web development. You will explore core JavaScript concepts, data types, variables, functions, control flow, and object-oriented programming principles to add interactivity and dynamic behavior to web pages.'],
    };

  return (
    <div className="course-details-container">
      <h2>{courseDetails.title}</h2>
      <br></br>
      <h4>Instructor: {courseDetails.instructor}</h4>
      <p>Duration: {courseDetails.duration}</p>
      <p>{courseDetails.description}</p>
      <div className='justify'>
      <h3>Curriculum:</h3>
      <ul>
        {courseDetails.curriculum.map((module, index) => (
          <li key={index}>{module}</li>
        ))}
      </ul>
      </div>
      <br>
      </br>
      <div className='enroll'>
      <Link to="/enroll" className="redirect-button">
            Enroll
      </Link></div>

      <div>
        <br>
        </br>
        <h3>Recommended Videos : </h3>
        <br></br>
      <iframe
          title="Course Video"
          width="650"
          height="400"
          src={'https://www.youtube.com/embed/Q33KBiDriJY'}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <br>
        </br>
        <iframe
          title="Course Video"
          width="650"
          height="400"
          src={'https://www.youtube.com/embed/Q33KBiDriJY'}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    
  );
};


