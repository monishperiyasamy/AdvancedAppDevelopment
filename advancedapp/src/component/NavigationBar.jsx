import React, { useState } from 'react';
import '../assets/NavigationBar.css';

function NavigationBar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const hideDropdown = () => {
    setShowDropdown(false);
  };

  return (
    <div>
      <header>
        <nav className="navbar">
          <h2 className="logo">
          
          </h2>
          <input type="checkbox" id="menu-toggler" />
          <label htmlFor="menu-toggler" id="hamburger-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              width="24px"
              height="24px"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M3 18h18v-2H3v2zm0-5h18V11H3v2zm0-7v2h18V6H3z" />
            </svg>
          </label>
          <div className="all-links">
            <div>
              <button >Home</button>
            </div>
            <div className="login-drop">
              <div onClick={toggleDropdown}>Login</div>
              {showDropdown && (
                <div className="dropdown" onClick={hideDropdown}>
                  <a href="/login">Admin</a>
                  <br></br>
                  <a href="/login">Student</a>
                </div>
              )}
            </div>
            
          </div>
        </nav>
      </header>
    
    </div>
  );
}

export default NavigationBar;
