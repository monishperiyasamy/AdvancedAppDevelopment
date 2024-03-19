// Enquiry.jsx
import React, { useState } from 'react';
import '../assets/Enquiry.css';

import UserNavBar from '../component/UserNavBar';

const Enquiry = () => {
  const [formData, setFormData] = useState({
    courseName: '',
    description: '',
    email: '',
    enquiryType: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      // Submit form data
      console.log('Form submitted:', formData);
    } else {
      setErrors(errors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.courseName.trim()) {
      errors.courseName = 'Course name is required';
    }
    if (!data.description.trim()) {
      errors.description = 'Description is required';
    }
    if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }
    if (!data.enquiryType.trim()) {
      errors.enquiryType = 'Enquiry type is required';
    }
    return errors;
  };

  return (
    <div>
    <UserNavBar/>
    <div className="enquiry-container">
      <h2>Add Enquiry Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Course Name:</label>
          <input
            type="text"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
          />
          {errors.courseName && <span className="error">{errors.courseName}</span>}
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
          {errors.description && <span className="error">{errors.description}</span>}
        </div>
        <div className="form-group">
          <label>Email ID:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Enquiry Type:</label>
          <input
            type="text"
            name="enquiryType"
            value={formData.enquiryType}
            onChange={handleChange}
          />
          {errors.enquiryType && <span className="error">{errors.enquiryType}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Enquiry;
