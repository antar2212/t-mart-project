import React, { useState } from 'react'
import { CiSearch, CiUser } from 'react-icons/ci'
import { FaBars } from 'react-icons/fa'
import { TfiShoppingCart } from 'react-icons/tfi'
import { Link } from 'react-router' // Note: This should ideally be 'react-router-dom' for web apps

const Navbar = () => {

  const [show, setShow] = useState(false)

  return (
    <>
      <nav className="relative">
        {/* Responsive Fix: ছোট স্ক্রিনে Padding কমানো হয়েছে */}
        <div className="container flex justify-between items-center py-4 md:py-0">
          {/* Logo */}
          {/* py-[54px] কে শুধুমাত্র md স্ক্রিনের জন্য রাখা হয়েছে, ছোট স্ক্রিনে কম padding থাকবে */}
          <div className='py-4 md:py-[54px]'>
            <img src="/logo.png" alt="logo" />
          </div>

          {/* Desktop Menu (hidden on mobile by default) */}
          <div className='hidden md:block'>
            <ul className='text-base font-medium text-secondary flex gap-10'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Portfolio</Link></li>
              <li><Link to="/">Blog</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/">Pages</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Mobile Menu (Hidden on desktop) */}
          <ul className={`md:hidden text-base font-medium text-secondary flex flex-col items-center
                        fixed top-0 right-0 w-[250px] h-screen pt-20 bg-[#f1f1f1] gap-10
                        transition-transform duration-300 z-50 shadow-lg 
                        ${show ? "translate-x-0" : "translate-x-full"}`}>

            <li><Link to="/" onClick={() => setShow(false)}>Home</Link></li>
            <li><Link to="/" onClick={() => setShow(false)}>Portfolio</Link></li>
            <li><Link to="/" onClick={() => setShow(false)}>Blog</Link></li>
            <li><Link to="/shop" onClick={() => setShow(false)}>Shop</Link></li>
            <li><Link to="/" onClick={() => setShow(false)}>Pages</Link></li>
            <li><Link to="/contact" onClick={() => setShow(false)}>Contact</Link></li>
            <li><Link to="/login" onClick={() => setShow(false)}>Login</Link></li>

            {/* Mobile মেনুতে Login/Register বাটনগুলোর জন্য অতিরিক্ত স্টাইল যোগ করা হয়েছে */}
            <li className='mt-4'>
              <Link className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition block w-full text-center" to="/login" onClick={() => setShow(false)}>Login</Link>
            </li>
            <li className=''>
              <Link className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition block w-full text-center" to="/register" onClick={() => setShow(false)}>Register</Link>
            </li>
          </ul>


          <div className='flex gap-7 items-center'>
            <div className='hidden md:block'>
              <ul className='flex text-secondary gap-5'>
                <li><Link className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition" to="/login">Login</Link></li>
                <li><Link className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition" to="/register">Register</Link></li>
              </ul>
            </div>


            <ul className='flex gap-7 text-xl'>
              <li><Link><CiSearch /></Link></li>
              <li><Link><CiUser /></Link></li>
              <li><Link><TfiShoppingCart /></Link></li>
            </ul>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setShow(!show)}
              className='cursor-pointer md:hidden text-2xl'>
              <FaBars />
            </button>
          </div>


          {show && (
            <div
              className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
              onClick={() => setShow(false)}
            ></div>
          )}

        </div>
      </nav>
    </>
  )
}

export default Navbar