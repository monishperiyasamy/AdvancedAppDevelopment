import React from 'react'
import '../assets/AdminPayment.css'
import AdminNavBar from '../component/AdminNavBar'
function AdminEnquiry() {
  return (
    <div>
    <div>
           <AdminNavBar/>
    </div>
    <table className="payment-history-table">
      <thead>
        <tr>
          <th>Course Name</th>
          <th>Description</th>
          <th>Email</th>
          <th>Enquiry Type</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>British English Certification</td>
          <td> This course provides comprehensive training in British English, covering grammar, vocabulary, pronunciation, and cultural nuances. Students will learn essential language skills required for effective communication in both formal and informal contexts.</td>
          <td>bec@gmail.com</td>
          <td>Complaints</td>
          
        </tr>
      
        <tr>
          <td>English Certification</td>
          <td>This course provides comprehensive training in British English, covering grammar, vocabular.</td>
          <td>becc@gmail.com</td>
          <td>Complaints</td>
         
        </tr>
      
        
      
      </tbody>
    </table>
    </div>
  )
}

export default AdminEnquiry