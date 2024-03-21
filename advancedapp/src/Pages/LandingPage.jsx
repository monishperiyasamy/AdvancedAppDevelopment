import React, { useState } from 'react';
import NavigationBar from '../component/NavigationBar';
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
import '../assets/LandingPage.css'; // Import CSS for LandingPage

function LandingPage() {
  

  
  

  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <div className='mainSection'>
        <div className='contentBox'>
          <h1>Certify Your Command of British English Today!</h1>
          <p>
            Welcome to BEC, the premier destination for achieving British English certification. Whether you're aiming to enhance your professional prospects, academic achievements, or simply seeking personal growth, our platform provides comprehensive resources to help you master British English with confidence.
          </p>
          <div className='btnBox'>
            <Link to='/about' className='readMore'>Read More</Link>
          </div>
        </div>
        <div className='slider'>
          <div className='slides' style={{ transform: translateX(-${currentSlide * 100}%) }}>
            <div className='slide'>
              <div className='card'>
                <img src="https://gumlet-blog-content.gumlet.io/learn/content/images/2022/07/Elearning_platform.jpg?w=3840&q=70" alt="Elearning platform" />
                <div className='cardContent'>
                  <h2>Discover Our Learning Platform</h2>
                  <p>Explore our cutting-edge e-learning platform designed to provide you with an immersive learning experience.</p>

                  
                  <Link to='/services' className='readMore'>Learn More</Link>
                </div>
              </div>
            </div>
      <div>
        <section className="services" id="services">
          <h2>Our Services</h2>
          <p>Explore the diverse offerings of Buy Casa for a seamless real estate experience.</p>
          <ul className="cards">
            <li className="card">
              <img src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg" alt="img"/>
              <h3>Residential Properties</h3>
              <p>Discover comfort and style in our extensive range of residential properties.</p>
            </li>
            <li className="card">
              <img src="https://cpmnw.com/wp-content/uploads/2019/03/Commercial-Space.jpg" alt="img"/>
              <h3>Commercial Spaces</h3>
              <p>Find the perfect location for your business with our versatile commercial spaces.</p>
            </li>
            <li className="card">
              <img src="https://x7d4c5z5.stackpathcdn.com/wp-content/uploads/tc/2022/09/Land-for-sale.webp" alt="img"/>
              <h3>Land Acquisition</h3>
              <p>Invest in the future with our prime land offerings for development or investment purposes.</p>
            </li>
            <li className="card">
              <img src="https://www.baymgmtgroup.com/wp-content/uploads/2015/11/shutterstock_1534882181.jpg" alt="img"/>
              <h3>Rental Properties</h3>
              <p>Experience flexibility in living arrangements with our curated selection of rental properties.</p>
            </li>
            <li className="card">
              <img src="https://www.adviseable.com.au/wp-content/uploads/2017/09/investment-property.jpg" alt="img"/>
              <h3>Real Estate Investment</h3>
              <p>Grow your wealth through strategic real estate investments with Buy Casa.</p>
            </li>
            <li className="card">
              <img src="https://dldmuionqjz51.cloudfront.net/wp-content/uploads/2022/02/Amplifying-User-Experience-with-Experience-Consulting-Services.png" alt="img"/>
              <h3>Consultation Services</h3>
              <p>Receive expert guidance with our real estate consultation services for informed decision-making.</p>
            </li>
          </ul>
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
