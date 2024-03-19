import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/NavigationBar.css'
function AdminNavBar() {
  return (
    <div>
        <header>
      <div className='container container-flex'>
        <div className='logo-container'>
          <h1><img src="https://logodix.com/logo/1737108.png" alt="Logo" /></h1>
        </div>
        <nav >
          <div className='nav-list'>
            <Link to='/' className='nav-listItem' activeclassname='activeNavitem'>Home</Link>
            <Link to='/admin' className='nav-listItem' activeclassname='activeNavitem'>Admin</Link>
            <Link to='/' className='nav-listItem' activeclassname='activeNavitem'>Logout</Link>
          </div>
        </nav>
       
      </div>
    </header>
    </div>
  )
}

export default AdminNavBar