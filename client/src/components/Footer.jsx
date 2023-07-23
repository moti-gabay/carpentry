import React from 'react'
import { Link } from 'react-router-dom';
import {FaShippingFast, FaComments, FaPhoneSquareAlt } from 'react-icons/fa'
import {IoShieldCheckmark} from 'react-icons/io5'
import { TiArrowSync } from "react-icons/ti";
import {SiGmail} from 'react-icons/si'

import { MdLocationPin } from 'react-icons/md'

const Footer = () => {
  return (
    <footer>
      <div className='bg-slate-700 text-slate-100 bg-opacity-85 grid grid-cols-1 md:grid-cols-3 gap-x-6 px-[3%] pt-[4%] md:pt-[2%] mt-[5%]'>
        <div className='mb-5'>
          <h3 className='md:text-center text-2xl font-semibold border-b-2 mb-3 pb-1'>Pages:</h3>
          <ul className='leading-6 text-sm sm:text-base'>
            <li>
               <Link to={"/"}
               className='hover:text-amber-700 hover:font-bold pb-4'>
                Home
               </Link>
            </li>
            <li>
               <Link to={"/buildGuides"} 
               className='hover:text-amber-700 hover:font-bold'>
                Build Guides
               </Link>
            </li>
            <li>
               <Link to={"/about"} 
               className='hover:text-amber-700 hover:font-bold'>
                About Us
               </Link>
            </li>
            <li>
               <Link to={"/cartPayment"} 
               className='hover:text-amber-700 hover:font-bold'>
                Your Cart
               </Link>
            </li>
            <li>
               <Link to={"/contactUs"} 
               className='hover:text-amber-700 hover:font-bold'>
                Contact Us
               </Link>
            </li>
            <li>
               <Link to={"/shippingReturnPolicy"} 
               className='hover:text-amber-700 hover:font-bold'>
                Shipping & return 
               </Link>
            </li>
            <li>
               <Link to={"/termsConditions"} 
               className='hover:text-amber-700 hover:font-bold'>
                Terms & Conditions
               </Link>
            </li>
            <li> 
               <Link to={"/privacyPolicy"} 
               className='hover:text-amber-700 hover:font-bold'>
                Privacy Policy
               </Link>
            </li>
          </ul>
        </div>
        <div>
            <h3 className='md:text-center text-2xl font-semibold border-b-2 mb-3 pb-1'>Customer Service:</h3>
            <div className='mb-5'>
                <ul className='leading-6 text-sm sm:text-base'>
                   <li className='flex items-center mb-1.5'>
                     <FaPhoneSquareAlt className='text-xl text-green-600 shadow-xl me-2.5'/>
                     {/* <a href='tel:---'>123456789</a> */}
                     <span>123456789</span>
                   </li>
                   <li className='flex items-center mb-1.5'>
                    <span className=' bg-red-500 p-0.5 rounded-sm me-2.5'>
                      <SiGmail className='text-md text-white shadow-xl'/>
                    </span>
                      <span>epkwy@gmail.com</span>
                    </li>
                   <li className='mb-'>
                     <h4 className='font-semibold'>Address for self pickup:</h4>                    
                     <p><MdLocationPin className='inline text-2xl text-orange-600 pb-1'/>749 estrn pkwy Brooklyn NY</p>
                   </li>
                   <li>
                     <h4 className='font-semibold'>open hours:</h4>
                     <p>Sun - Thu: 10AM - 7PM</p>
                   </li>
                </ul>
            </div>
        </div> 
        <div className='mb-5'>
            <h4 className='md:text-center text-2xl font-semibold border-b-2 mb-3 pb-1'>Contact Us:</h4>
        <div className=" bg-amber-700 w-[100%] py-50">
            <p>Email Here...</p>
        </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white text-xs sm:text-base text-center py-1">
        <p>© copyright 2023 by asherGoldberg & motiGabay</p>
        <p>Fullstack Developers | React | MongoDB | Node.js</p>
      </div>

    </footer>
  )
}

export default Footer