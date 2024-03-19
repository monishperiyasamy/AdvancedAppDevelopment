import React from 'react';
import '../assets/AdminCard.css'
import { Link } from 'react-router-dom';
function AdminCard() {
  return (
    <div>
      <div className="aa1card card">
        <img className="aa1im product-image" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/add-course-2797514-2317961.png" alt="Denim Jeans" />
        <div className="aa1contain">
          <h1>Add Courses</h1>
         <Link to="/adminadd/edit"><button className="viewbut">View</button></Link> 
        </div>
      </div>

      <div className="aa2card card">
        <img className="aa2im product-image" src="https://cdn-icons-png.flaticon.com/512/3423/3423647.png" alt="Denim Jeans" />
        <div className="aa2contain">
          <h1>Edit Courses</h1>
          <Link to="/adminadd/edit"><button className="viewbut">View</button></Link>
        </div>
      </div>

      <div className="aa3card card">
        <img className="aa3im product-image" src="https://icons.veryicon.com/png/o/education-technology/plush-three-year-old-icon-gallery/course-management-2.png" alt="Denim Jeans" />
        <div className="aa3contain">
          <h1>View Courses</h1>
         <Link to ="/admintable"><button className="viewbut">View</button></Link> 
        </div>
      </div>

      <div className="aa4card card">
        <img className="aa4im product-image" src="https://cdn-icons-png.flaticon.com/256/1/1201.png" alt="Denim Jeans" />
        <div className="aa4contain">
          <h1>Delete Courses</h1>
          <button className="viewbut">View</button>
        </div>
      </div>
    </div>
  );
}

export default AdminCard;
