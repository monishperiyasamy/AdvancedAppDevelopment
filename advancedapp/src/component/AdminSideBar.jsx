import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/AdminSide.css';

function AdminSideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
       
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/adminpayment" className="sidebar-menuItem">View Payment</Link>
        </li>
        <li>
          <Link to="/adminenquiry" className="sidebar-menuItem">View Enquiry</Link>
        </li>
        <li>
          <Link to="/" className="sidebar-menuItem">Logout</Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminSideBar;
