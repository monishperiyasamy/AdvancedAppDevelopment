// NavigationBar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/NavigationBar.css';

function NavigationBar() {
  

  return (
    <header>
      <div className='container container-flex'>
        <div className='logo-container'>
          <h1><img src="https://logodix.com/logo/1737108.png" alt="Logo" /></h1>
        </div>
        <nav >
          <div className='nav-list'>
            <Link to='/' className='nav-listItem' activeclassname='activeNavitem'>Home</Link>
            <Link to='/about' className='nav-listItem' activeclassname='activeNavitem'>About</Link>
            <Link to='/services' className='nav-listItem' activeclassname='activeNavitem'>Services</Link>
            <Link to='/contact' className='nav-listItem' activeclassname='activeNavitem'>Contact</Link>
            <Link to='/policy' className='nav-listItem' activeclassname='activeNavitem'>Policy</Link>
            <Link to='/login' className='nav-listItem' activeclassname='activeNavitem'>Sign In</Link>
          </div>
        </nav>
       
      </div>
    </header>
  );
}

export default NavigationBar;
