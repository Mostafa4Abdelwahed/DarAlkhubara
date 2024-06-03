import React from 'react'
import { Link } from 'react-router-dom'

const Alert = () => {
  return (
    <div className='bg-primary-100 text-white flex items-center space-y-5 md:justify-around flex-col md:flex-row justify-between  py-7'>
        <h1 className='text-2xl'>هل تبحث عن منزل أو بيع عقار؟</h1>
        <Link to="/contact" className='bg-white text-lg py-2 px-5 text-black'>سجل الان</Link>
    </div>
  )
}

export default Alert