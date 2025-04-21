import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <h1 className='text-3xl text-green-500'>Footer</h1>
    </>
  )
}

export default MainLayout
