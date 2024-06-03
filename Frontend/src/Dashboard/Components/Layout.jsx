import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <div className='mr-0 lg:mr-[300px] bg-gray-100 min-h-[100vh]'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout