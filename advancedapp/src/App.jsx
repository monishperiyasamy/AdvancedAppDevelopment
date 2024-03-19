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
          

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
