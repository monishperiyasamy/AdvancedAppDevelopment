import React from 'react';
import '../assets/Contact.css';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

function Contact() {
  return (
    <div>
    <div>
        <NavigationBar/>
      </div>
    <div className="contact-container">
      
     <div className='page-contact'>
     
      <p><b>Feel free to send us a message or reach out to us using the information below.</b></p>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email Address" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" placeholder="Write your message here..." required></textarea>
        <button type="submit">Send Message</button>
      </form>
      </div>
      <div className="contact-info">
        <h3>Contact Information</h3>
        <ul>
          <li>
            <a href="mailto:youremail@example.com">bec@gmail.com</a>
          </li>
          <li>
            <a href="tel:+1234567890">+91 9876543210</a>
          </li>
          <li>
            <address>
              123 Main Street, Kovaipudur, CBE, 12345
            </address>
          </li>
        </ul>
      </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Contact;
