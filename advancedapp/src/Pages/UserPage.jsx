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
        <h2 class="a1">Most Popular Certificates</h2>

          <div className="a1card card">
            <img className="a1im product-image" src="https://m.media-amazon.com/images/I/91nzwwEaLWL.AC_UF1000,1000_QL80.jpg" alt="Denim Jeans" />
            <div className="a1contain">
              <h1>KET</h1>
              <p> ₹10,000-₹15,000</p>
              <p>A basic-level exam testing fundamental English language skills. </p>
             <Link to ="/content1" ><button class="viewbut">View</button></Link>
            </div>
          </div>
          <div className="a2card card">
            <img className="a2im product-image" src="https://cdn.awsli.com.br/800x800/2507/2507517/produto/206500882af54ea8038.jpg" alt="Denim Jeans" />
            <div className="a2contain">
              <h1>IELTS</h1>
              <p>₹12,000-₹15,000</p>
              <p>A widely accepted exam for study and work,assessing proficiency in English.</p>
              <Link to ="/content2" ><button class="viewbut">View</button></Link>
            </div>
          </div>
          <div className="a3card card">
            <img className="a3im product-image" src="https://d20ohkaloyme4g.cloudfront.net/img/document_thumbnails/96e5b1a81b3fb785020eea010479e74a/thumb_1200_1200.png" alt="Denim Jeans" />
            <div className="a3contain">
              <h1>SELTs  </h1>
              <p>₹10,000-₹15,000</p>
              <p> Trinity English Language qualifications Exams that are widely accepted for UK Visas,study,work Immigration purposes,Assess academic English proficiency for non-native English speakers.</p>
              <button class="viewbut">View</button>
            </div>
          </div>
          <div className="a4card card">
            <img className="a4im product-image" src="https://m.media-amazon.com/images/I/71OZYxYm0PL.AC_UF1000,1000_QL80.jpg" alt="Denim Jeans" />
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
