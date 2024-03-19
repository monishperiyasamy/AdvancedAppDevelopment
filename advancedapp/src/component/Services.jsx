import React from 'react';
import '../assets/Services.css';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

function Services() {
  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <section className="services" id="services">
        <ul className="s-cards">
          <li className="s-card">
            <img src="https://images.pexels.com/photos/4492135/pexels-photo-4492135.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Online Learning" />
            <h3>Interactive Learning Modules</h3>
            <p>Engage with interactive learning modules covering grammar, vocabulary, and pronunciation.</p>
          </li>
          <li className="s-card">
            <img src="https://images.pexels.com/photos/2293019/pexels-photo-2293019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Certification" />
            <h3>British English Certification</h3>
            <p>Obtain recognized certification upon successful completion of our British English proficiency exams.</p>
          </li>
          <li className="s-card">
            <img src="https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Personalized Learning" />
            <h3>Personalized Learning Paths</h3>
            <p>Customize your learning experience with personalized learning paths to achieve your language goals effectively.</p>
          </li>
          <li className="s-card">
            <img src="https://images.pexels.com/photos/8423452/pexels-photo-8423452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Assessment" />
            <h3>Language Proficiency Assessment</h3>
            <p>Assess your language proficiency level through our comprehensive assessment tests.</p>
          </li>
         
         
        </ul>
      </section>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Services;
