import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../assets/Footer.css';

function Footer() {
  return (
    <footer>
      <div className='container container-flex'>
        <div className='icons'>
         <Link to="https://www.instagram.com/accounts/login/" ><FontAwesomeIcon className='f-icon' icon={faInstagram} /></Link>
         <Link to ="https://twitter.com/i/flow/login"><FontAwesomeIcon className='f-icon' icon={faTwitter} /></Link>
         <Link to= "https://www.facebook.com/login/"> <FontAwesomeIcon className='f-icon' icon={faFacebook} /></Link>
         <Link to="https://www.linkedin.com/login/"> <FontAwesomeIcon className='f-icon' icon={faLinkedin} /></Link>
         <Link to ="https://github.com/github-login/"> <FontAwesomeIcon className='f-icon' icon={faGithub} /></Link>
        </div>
        <div className='line'>
          <hr />
        </div>
        <div className='copyright'>
          <p>© 2024 BEC Inc. All rights reserved.</p>
          <p>Made with BEC</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
