import React from 'react';
import '../assets/UserPage.css'
import { Link } from 'react-router-dom';
import UserNavBar from '../component/UserNavBar';

function UserPage() {
  return (
    <div>
      <UserNavBar />
      <div className="container">
        <div className="row1">
        <h2 class="a1">Recommanded For You</h2>

          <div className="a1card card">
          
            <div className="a1contain">
              <h1>KET</h1>
              <p> ₹10,000-₹15,000</p>
              <p>A basic-level exam testing fundamental English language skills. </p>
             <Link to ="/content1" ><button class="viewbut">View</button></Link>
            </div>
          </div>
          <div className="a2card card">
            
            <div className="a2contain">
              <h1>IELTS</h1>
              <p>₹12,000-₹15,000</p>
              <p>A widely accepted exam for study and work,assessing proficiency in English.</p>
              <Link to ="/content2" ><button class="viewbut">View</button></Link>
            </div>
          </div>
          <div className="a3card card">
          
            <div className="a3contain">
              <h1>SELTs  </h1>
              <p>₹10,000-₹15,000</p>
              <p> Trinity Exams that are widely accepted for UK Visa and Immigration.</p>
              <button class="viewbut">View</button>
            </div>
          </div>
          <div className="a4card card">
            
            <div className="a4contain">
              <h1>TOEFL</h1>
              <p>₹13,000-₹20,000</p>
              <p>Assess academic English proficiency for non-native English speakers.</p>
              <button class="viewbut">View</button>
            </div>
          </div>
        </div>

        


</div>

</div>



  );
}

export default UserPage;
