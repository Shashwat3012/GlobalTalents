import React from 'react';
import './Coursesinfo.css'; // CSS file for styling
import { Link } from 'react-router-dom'

const Course = ({ title, description, instructor, image }) => {
  return (
    <div className="course-card">
      <img src={image} alt={title} className="course-image" />
      <div className="course-details">
        <h3 className="course-title">{title}</h3>
        <p className="course-description">{description}</p>
        <p className="course-instructor">Instructor: {instructor}</p>
        <Link to="/courses" className="redirect-button">
        Know More
      </Link>
      </div>
    </div>
  );
};

export const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'React Complete Guide',
      description: 'Learn React from beginner to advanced level',
      instructor: 'Andrew Ning',
      image: 'images/react.png',
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'Learn basic fundamentals and various frameworks in web development ',
      instructor: 'Smith Jones',
      image: 'images/webdev.webp',
    },
        {
          id: 3,
          title: 'Python for Machine Learning',
          description: 'Explore machine learning concepts and algorithms using Python',
          instructor: 'Michael Brown',
          image: 'images/pyml.jpg',
        },
        {
          id: 4,
          title: 'UI/UX Design Principles',
          description: 'Learn the principles of user interface and user experience design',
          instructor: 'Olivia Johnson',
          image: 'images/uiux.jpg',
        },
        {
          id: 5,
          title: 'Data Structures and Algorithms',
          description: 'Deep dive into essential data structures and algorithms',
          instructor: 'David Miller',
          image: 'images/dsalgo.jpg',
        },
        {
          id: 6,
          title: 'Angular: The Complete Guide',
          description: 'Become an expert in Angular framework and build scalable web applications',
          instructor: 'Sophia Davis',
          image: 'images/angular.jpg',
        },
        {
          id: 7,
          title: 'iOS App Development',
          description: 'Learn how to develop native iOS apps using Swift programming language',
          instructor: 'William Wilson',
          image: 'images/ios.jpg',
        },
        {
          id: 8,
          title: 'Data Science with R',
          description: 'Apply data science techniques and analysis using the R programming language',
          instructor: 'Emma Thompson',
          image: 'images/r.jpg',
        },
        {
          id: 9,
          title: 'Java Programming for Beginners',
          description: 'Start your journey in Java programming with hands-on projects',
          instructor: 'Daniel Anderson',
          image: 'images/java.jpg',
        },
        {
          id: 10,
          title: 'Full Stack Web Development',
          description: 'Build modern web applications with the latest web technologies',
          instructor: 'Sophie Roberts',
          image: 'images/fullstack.png',
        },
        {
            id: 11,
            title: 'JavaScript Fundamentals',
            description: 'Master the fundamentals of JavaScript programming language',
            instructor: 'Emily Thompson',
            image: 'images/js.jpg',
          },
      
    // Add more course objects as needed
  ];

  return (
    <div className="courses-container">
      <h2>Courses</h2>
      <br>
      </br>
      <div className="course-list">
        {courses.map((course) => (
          <Course
            key={course.id}
            title={course.title}
            description={course.description}
            instructor={course.instructor}
            image={course.image}
          />
        ))}
      </div>
    </div>
  );
};



