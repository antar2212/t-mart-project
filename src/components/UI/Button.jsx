import React from 'react'
import { Link } from 'react-router'
const Button = ({ title, path }) => {
  return (
    <>
      <button className='text-base cursor-pointer'>
        <Link to={path}>{title}</Link>
      </button>
    </>
  )
}

export default Button
