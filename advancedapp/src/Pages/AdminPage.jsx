import React from 'react'
import AdminCard from '../component/AdminCard'
import AdminNavBar from '../component/AdminNavBar'

import AdminSideBar from '../component/AdminSideBar'

function AdminPage() {
  return (
    <div>
        <AdminNavBar/>
        <AdminSideBar/>
        <AdminCard/>
    </div>
  )
}

export default AdminPage