import React, { useState, useEffect } from 'react';
import NavigationBar from '../component/NavigationBar';
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
import '../assets/LandingPage.css'; // Import CSS for LandingPage

function LandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [showText, setShowText] = useState(false);
  
  const contentText = `
  Welcome to BEC, the premier destination for achieving British English certification. Whether you're aiming to enhance your professional prospects, academic achievements, or simply seeking personal growth, our platform provides comprehensive resources to help you master British English with confidence.
  `;

  useEffect(() => {
    const interval = setInterval(() => {
      if (textIndex < contentText.length) {
        setShowText(true);
        setTextIndex((prevIndex) => prevIndex + 1);
      } else {
        setTextIndex(0);
      }
    }, 50); 
  
    return () => clearInterval(interval);
  }, [textIndex, contentText.length]);
  
  return (
    <div>
      <div>
        <NavigationBar />
      </div>
      <div className='mainSection'>
        <div className='contentBox'>
          <h1>Certify Your Command of British English Today!</h1>
          <p>{showText && contentText.substring(0, textIndex)}</p>
          <div className='btnBox'>
            <Link to='/about' className='readMore'>Explore Course</Link>
          </div>
        </div>
        <img className='landing-img' src="https://img.freepik.com/premium-photo/cheerful-arab-male-tutor-teaching-english-language-explaining-new-theme-students_116547-22482.jpg" alt="Main section background" />
      </div>
      <section className="services" id="services">
        <div className='explore-course'>
          <h2 >Explore Courses</h2>
         
        </div>
        <ul className="cards-landing">
          <li className="card-landing">
            <img src="https://cursin.net/wp-content/uploads/2023/07/ingles-basico-cursin.jpg.webp" alt="Service 1" />
            <h3>Basic English Language Skills</h3>
            <p>A foundational course covering essential English language skills for beginners.</p>
          </li>
          <li className="card-landing">
            <img src="https://www.northwestcareercollege.edu/wp-content/uploads/2023/08/What-is-ESL-and-Why-is-it-Important.webp" alt="Service 2" />
            <h3>Intermediate English Language Skills</h3>
            <p>Advance your English proficiency with intermediate-level vocabulary, grammar, and communication skills.</p>
          </li>
          <li className="card-landing">
            <img src="https://www.1training.org/wp-content/uploads/2022/03/Teaching-English-Language-Level-2-.jpg" alt="Service 3" />
            <h3>Advanced English Language Skills</h3>
            <p>Master complex English concepts, including advanced grammar, vocabulary, and communication strategies for fluency.</p>
          </li>
        </ul>
           
        <ul className="cards-landing">
          <li className="card-landing">
            <img src="https://techbehindit.com/wp-content/uploads/2023/08/woman-teaching-students-english-lesson-online.jpg" alt="Service 1" />
            <h3>Business Writing Skills</h3>
            <p>Develop effective business writing skills, including emails, reports, proposals, and professional correspondence.</p>
          </li>
          <li className="card-landing">
            <img src="https://gsep.pepperdine.edu/blog/images/teaching-english-as-a-second-language-3-steps-to-get-started.png" alt="Service 2" />
            <h3>Business Communication Skills</h3>
            <p>Enhance your ability to communicate confidently and professionally in various business settings and contexts.</p>
          </li>
          <li className="card-landing">
            <img src="https://gsep.pepperdine.edu/blog/images/benefits-of-teaching-english-in-the-united-states.jpg" alt="Service 3" />
            <h3>English for Presentations and Meetings</h3>
            <p>Learn how to deliver effective presentations and participate confidently in meetings using clear English.</p>
          </li>
        </ul>

        <ul className="cards-landing">
          <li className="card-landing">
            <img src="https://vietnamteachingjobs.com/wp-content/uploads/2023/07/why-do-you-want-to-be-a-teacher-1.jpg" alt="Service 1" />
            <h3>English for Tourism and Hospitality</h3>
            <p>Gain English language skills essential for success in the tourism and hospitality industry.</p>
          </li>
          <li className="card-landing">
            <img src="https://www.uwa.edu.au/seek-wisdom/-/media/project/uwa/uwa/other/rsz_1gettyimages-107983589.jpg?w=1440&hash=EC9C7EAB5023F840A03E53A29C223198" alt="Service 2" />
            <h3>English for Healthcare Professionals</h3>
            <p>Specialized English training tailored to healthcare professionals' needs and communication contexts.</p>
          </li>
          <li className="card-landing">
            <img src="https://www.irishexaminer.com/cms_media/module_img/7479/3739855_3_seoimage4x3_Copy_20of_20iStock-1433288757.jpg" alt="Service 3" />
            <h3>English for IT Professionals</h3>
            <p>Master technical English language skills necessary for success in the IT industry.</p>
          </li>
        </ul>

        <ul className="cards-landing">
          <li className="card-landing">
            <img src="https://d19d5sz0wkl0lu.cloudfront.net/dims4/default/b2928d2/2147483647/resize/800x%3E/quality/90/?url=https%3A%2F%2Fatd-brightspot.s3.amazonaws.com%2F7f%2F38%2Fb37d0d6148e48fea8f76209eb3bb%2Fbigstock-pretty-teacher-smiling-at-came-69887626-1.jpg" alt="Service 1" />
            <h3>IELTS Preparation Course</h3>
            <p>Prepare effectively for the IELTS exam with comprehensive test-taking strategies and practice materials.</p>
          </li>
          <li className="card-landing">
            <img src="https://www.moneymagpie.com/wp-content/uploads/2023/03/MoneyMagpie_English-lesson.jpg.webp" alt="Service 2" />
            <h3>TOEFL Preparation Course</h3>
            <p>Get ready for the TOEFL exam with targeted practice exercises and expert guidance.</p>
          </li>
          <li className="card-landing">
            <img src="https://media.istockphoto.com/id/1342027604/photo/arab-male-english-teacher-explaining-rules-near-blackboard-standing-with-clipboard-smiling-at.jpg?s=612x612&w=0&k=20&c=uH6EdaZKnvOK3nxXeinoDqUbDKmS07TsUmJFRTXym9g=" alt="Service 3" />
            <h3>Cambridge English: First (FCE) Preparation</h3>
            <p>Prepare for the Cambridge English: First exam with comprehensive study materials and exam strategies.</p>
          </li>
        </ul>
      </section>

      <div>
      <button className='landing-viewmore'>View More Courses</button>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
