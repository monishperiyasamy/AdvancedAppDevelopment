import React from 'react';
import '../assets/AdminTable.css';
import AdminNavBar from '../component/AdminNavBar';
import { Link } from 'react-router-dom';

const courseData = [
    {
      courseName: 'Data Science Fundamentals',
      description: 'Explore the basics of data science and analytics',
      duration: '40 hours',
      cost: 8000,
      actions: ['Edit', 'Delete'],
    },
    {
      courseName: 'Mobile App Development',
      description: 'Learn to develop mobile applications for iOS and Android',
      duration: '50 hours',
      cost: 10000,
      actions: ['Edit', 'Delete'],
    },
    {
      courseName: 'Graphic Design Essentials',
      description: 'Master the fundamentals of graphic design and visual communication',
      duration: '30 hours',
      cost: 6000,
      actions: ['Edit', 'Delete'],
    },
    {
      courseName: 'Digital Marketing Strategies',
      description: 'Learn effective digital marketing techniques and strategies',
      duration: '45 hours',
      cost: 9000,
      actions: ['Edit', 'Delete'],
    },
  ];
  

function AdminTable() {
  return (
    <div>
      <div>
        <AdminNavBar />
      </div>

      <table className="course-table">
        <thead className="course-table__header">
          <tr>
            <th className="course-table__header-row">Course Name</th>
            <th className="course-table__header-row">Description</th>
            <th className="course-table__header-row">Duration</th>
            <th className="course-table__header-row">Cost</th>
            <th className="course-table__header-row">Actions</th>
          </tr>
        </thead>
        <tbody className="course-table__body">
          {courseData.map((course) => (
            <tr key={course.courseName} className="course-table__row">
              <td className="course-table__cell">{course.courseName}</td>
              <td className="course-table__cell">{course.description}</td>
              <td className="course-table__cell">{course.duration}</td>
              <td className="course-table__cell">{course.cost}</td>
              <td className="course-table__cell">
              {course.actions.map((action, index) => (
           action === 'Edit' ? (
                    <Link
                    key={index}
                  to="/adminadd/edit"
                   className={`course-table__action-button edit`}
                       >
                {action}
              </Link>
                  ) : (
              <button
             key={index}
            className={`course-table__action-button delete`}
               >
               {action}
                </button>
  )
))}

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminTable;
