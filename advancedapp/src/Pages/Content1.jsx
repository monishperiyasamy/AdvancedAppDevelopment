import React from 'react';
import '../assets/Content1.css';

import UserNavBar from '../component/UserNavBar';

const Content1 = () => {
  return (
    <div>
    <UserNavBar/>
    <div className="content-container">
      <div className="course-details">
        <h1> Cambridge English: Key (KET)</h1>
        <p className="instructor">Instructor: Qualified Cambridge English Instructor</p>
        
        <div className="details-section">
          <div className="section-box">
            <h2>What you'll learn:</h2>
            <p>Master the skills necessary to pass the Cambridge English: Key (KET) exam.</p>
            <p>Develop strategies for each section of the exam, including Reading and Writing, Listening, and Speaking.</p>
          </div>
        </div>
        
        <div className="details-section">
          <div className="section-box">
            <h2>Skills you'll gain:</h2>
            <ul>
              <li>Reading comprehension and writing skills for the KET exam.</li>
              <li>Listening comprehension and note-taking techniques.</li>
              <li>Speaking fluency and confidence in English.</li>
            </ul>
          </div>
        </div>
        
        <div className="course-includes">
          <div className="section-box">
            <h2>This course includes:</h2>
            <ul>
              <li>30 hours on-demand video lectures.</li>
              <li>3 full-length practice tests with answer keys.</li>
              <li>Interactive exercises and quizzes for each exam section.</li>
              <li>Downloadable study materials and resources.</li>
              <li>Access on mobile devices and TV for convenient learning.</li>
              <li>Closed captions and audio descriptions for enhanced accessibility.</li>
              <li>Certificate of completion upon finishing the course.</li>
            </ul>
          </div>
        </div>
        
        <div className="duration-cost">
          <div className="section-box">
            <p><strong>Duration:</strong> 4 months</p>
            <p><strong>Cost:</strong> ₹4000-₹5000</p>
          </div>
        </div>
        
        <div className="action-buttons">
          <button className="add-to-cart">Add to Cart</button>
          <button className="add-to-wishlist">Add to WishList</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Content1;
