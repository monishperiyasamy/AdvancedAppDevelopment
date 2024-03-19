import React, { useState } from 'react';
import '../assets/AdminAddCourse.css';

function AdminAddCourse() {
  const [courseName, setCourseName] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [cost, setCost] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Form submitted:', { courseName, description, duration, cost });
  };

  return (
    <div className='add-aform'>
    <form onSubmit={handleSubmit}>
      <h2>Course Details</h2>
      <div className="form-group">
        <label htmlFor="courseName">Course Name:</label>
        <input
          type="text"
          id="courseName"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="duration">Duration:</label>
        <input
          type="text"
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="cost">Cost:</label>
        <input
          type="number"
          id="cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          required
        />
      </div>
      <button className='admin-abutton' type="submit">Confirm</button>
    </form>
    </div>
  );
}

export default AdminAddCourse;
