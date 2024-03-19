import React, { useState } from 'react';
import NavigationBar from '../component/NavigationBar';
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
import '../assets/LandingPage.css'; // Import CSS for LandingPage

function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
  };

  const totalSlides = 3; // Update this with the total number of slides

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
          <div className='slides' style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          
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
         
            <div className='slide'>
              <div className='card'>
                <img src="https://static.vecteezy.com/system/resources/previews/016/801/176/non_2x/online-learning-concept-illustration-vector.jpg" alt="Card title" />
                <div className='cardContent'>
                  <h2>Unlock Advanced English Skills</h2>
                  <p>Dive into advanced English language skills including grammar, vocabulary, and pronunciation to boost your proficiency to the next level.</p>
                  <Link to='/services' className='readMore'>Learn More</Link>
                </div>
              </div>
            </div>
          
            <div className='slide'>
              <div className='card'>
                <img src="https://static.vecteezy.com/system/resources/previews/016/801/176/non_2x/online-learning-concept-illustration-vector.jpg" alt="Card title" />
                <div className='cardContent'>
                  <h2>Personalized Learning Paths</h2>
                  <p>Tailor your learning experience with personalized learning paths designed to address your unique language learning needs and goals."</p>
                  <Link to='/services' className='readMore'>Learn More</Link>
                </div>
              </div>
            </div>
          
          </div>
          <button className='prev' onClick={prevSlide}>&#10094;</button>
          <button className='next' onClick={nextSlide}>&#10095;</button>

        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
