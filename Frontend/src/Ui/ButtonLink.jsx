import React from 'react'
import { Link } from 'react-router-dom'

const ButtonLink = ({to, children}) => {
  return (
    <Link className="bg-primary-100 hover:bg-white transition-all hover:border-2 border-2 border-transparent hover:border-primary-100 hover:text-primary-100 text-white py-2 block text-center rounded mt-4" to={to}>{children}</Link>
  )
}

export default ButtonLink