import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './Pages/Register';
import Login from './Pages/Login';
import NavigationBar from './component/NavigationBar';
import Contact from './component/Contact';
import About from './component/About';
import Services from './component/Services';
import Policy from './component/Policy';

import LandingPage from './Pages/LandingPage';
import AdminCard from './component/AdminCard';
import AdminPage from './Pages/AdminPage';
import AdminAddCoursePage from './Pages/AdminAddCoursePage';
import AdminTable from './Pages/AdminTable';
import StudentPage from './Pages/StudentPage';
import AdminPayment from './Pages/AdminPayment';
import AdminEnquiry from './Pages/AdminEnquiry';
import UserPage from './Pages/UserPage';
import Enquiry from './Pages/Enquiry';
import Cart from './Pages/Cart';
import Payment from './Pages/Payment';
import Content1 from './Pages/Content1';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/nav" element={<NavigationBar/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/policy" element={<Policy/>}/>
          <Route path="/admin" element={<AdminPage/>}/>
          <Route path="/adminadd/edit" element={<AdminAddCoursePage/>}/>
          <Route path="/admintable" element={<AdminTable/>}/>
          <Route path="/student" element={<StudentPage/>}/>
          <Route path="/adminpayment" element={<AdminPayment/>}/>
          <Route path="/adminenquiry" element={<AdminEnquiry/>}/>
          <Route path="/user" element={<UserPage/>}/>
          <Route path="/enquiry" element={<Enquiry/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/userpay" element={<Payment/>}/>
          <Route path="/content1" element={<Content1/>}/>
          
          

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
