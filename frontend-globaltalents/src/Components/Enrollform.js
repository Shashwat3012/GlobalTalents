import React from 'react';
import './Enrollform.css'; // CSS file for styling
import { CDetails } from '../Pages/CDetails';
import { Link } from 'react-router-dom'

export const Enrollment = () => {
  return (
    <div className="enrollment-confirmation-container">
      <h2>Enrollment Successful</h2>
      <p>Thank you for enrolling in the course!</p>
      <p>You will receive further instructions via email.</p>
      <Link to="/learning" className="redirect-button">
        Go to Courses
      </Link>
    </div>
  );
};
