import React from 'react';
import '../assets/AdminPayment.css';
import AdminNavBar from '../component/AdminNavBar';

function AdminPayment() {
  return (
<div>
    <div>
           <AdminNavBar/>
    </div>
    <table className="payment-history-table">
      <thead>
        <tr>
          <th>Payment ID</th>
          <th>Student Id</th>
          <th>Status</th>
          <th>Total Amount</th>
          <th>Payment Date</th>
          <th>Mode of Payment</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>PENDING</td>
          <td>6000</td>
          <td>Nov 25, 2023</td>
          <td>UPI</td>
        </tr>
      
        <tr>
          <td>2</td>
          <td>3</td>
          <td>PAID</td>
          <td>6000</td>
          <td>Nov 25, 2023</td>
          <td>UPI</td>
        </tr>
      
        <tr>
          <td>3</td>
          <td>3</td>
          <td>NOT PAID</td>
          <td>6000</td>
          <td>Nov 25, 2023</td>
          <td>UPI</td>
        </tr>
      
      </tbody>
    </table>
    </div>
  );
}

export default AdminPayment;
