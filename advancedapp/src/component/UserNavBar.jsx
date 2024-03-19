import React from 'react';
import '../assets/UserNavBar.css';
import { Link } from 'react-router-dom';

const UserNavBar = () => {
  return (
    <div className="navbar">
      <div className="left-section">
        <img src="https://logodix.com/logo/1737108.png" alt="App Logo" className="logo" />
      </div>
      <div className="search-section">
        <input type="text" className="search-bar" placeholder="What do you want to learn?" />
      </div>
      <div className="right-section">

      <Link to="/user"> Courses</Link> 
      <Link to="/enquiry">Add Enquiry</Link>
        <a href="#learning">View Enquiry</a>
        <a href="#learning">WishList</a>
        <Link to="/cart">Cart</Link>
        <a href="#cart">Student</a>
        <Link to="/">Logout</Link>
      </div>
    </div>
  );
}

export default UserNavBar;
