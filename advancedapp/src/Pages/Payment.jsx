import React, { useState } from 'react';
import UserNavBar from '../component/UserNavBar';
import '../assets/Payment.css';

const Payment = () => {
  const [studentId, setStudentId] = useState('');
  const [courseId, setCourseId] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentDate, setPaymentDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Student ID:', studentId);
    console.log('Course ID:', courseId);
    console.log('Payment Method:', paymentMethod);
    console.log('Payment Date:', paymentDate);
    // Implement your payment logic here
  };

  return (
    <div>
    <UserNavBar/>
    <div className="payment-container">
      <h2>Make Payment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="studentId">Student ID:</label>
          <input
            type="text"
            id="studentId"
            name="studentId"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="courseId">Course ID:</label>
          <input
            type="text"
            id="courseId"
            name="courseId"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="totalAmount">Total Amount:</label>
          <p>₹6000</p>
        </div>
        <div className="form-group">
          <label htmlFor="paymentMethod">Mode of Payment:</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="">Select a mode of payment</option>
            <option value="creditCard">Credit Card</option>
            <option value="debitCard">Debit Card</option>
            <option value="netBanking">Net Banking</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="paymentDate">Payment Date:</label>
          <input
            type="date"
            id="paymentDate"
            name="paymentDate"
            value={paymentDate}
            onChange={(e) => setPaymentDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Payment</button>
      </form>
    </div>
    </div>
  );
};

export default Payment;
