import React from 'react'
import {FaPencilRuler} from 'react-icons/fa';
import {BsFillPatchCheckFill, BsFillChatFill} from 'react-icons/bs';
import {IoShieldCheckmark} from 'react-icons/io5'
import {FaShippingFast, FaComments, FaPhoneSquareAlt } from 'react-icons/fa'

const HomePage = () => {
  return (
    <div className="h-[55vh] sm:h-[68vh] md:h-[73vh] lg:h-[78vh] relative">
    <div
    style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1626081063434-79a2169791b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FycGVudHJ5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60)',
      backgroundSize: 'cover',
       position: 'relative'
      }}
    className="text-center flex items-center justify-center h-[50vh] sm:h-[62vh] md:h-[67vh] lg:h-[72vh]">
      <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // backround opacity
      }}
      />
      <div className='absolute text-slate-100'>
        <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-1 sm:mb-4 font-semibold'>TreeCraft Carpentry</h1>
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>multiple woods at all sizes</h2>
      </div>
      </div>
      <div className="absolute bottom-0 ">
        <div className="flex justify-evenly text-amber-900 w-[100vw] lg:justify-center lg:gap-20">
          <div className="bg-slate-100 text-center py-0.5 px-1 sm:py-1 sm:px-3 md:py-2 md:px-4 rounded-sm">
              <FaShippingFast className='text-3xl md:text-4xl mx-auto'/>
              <span className='text-[10px] sm:text-sm md:text-lg'>Fast Shipping</span>
          </div>
          <div className="bg-slate-100 text-center py-0.5 px-1 sm:py-1 sm:px-3 md:py-2 md:px-5 rounded-sm">
              <BsFillPatchCheckFill className='text-3xl md:text-4xl mx-auto'/>
              <span className='text-[10px] sm:text-sm md:text-lg'>High Quality</span>
          </div>
          <div className="bg-slate-100 text-center py-0.5 px-1 sm:py-1 sm:px-3 md:py-2 md:px-4 rounded-sm">
              <FaPencilRuler className='text-3xl md:text-4xl mx-auto'/>
              <span className='text-[10px] sm:text-sm md:text-lg'>Costume made</span>
          </div>
          <div className="bg-slate-100  text-center py-0.5 px-1 sm:py-1 sm:px-3 md:py-2 md:px-4 rounded-sm">
              <BsFillChatFill className='text-3xl md:text-4xl mx-auto'/>
              <span className='text-[10px] sm:text-sm md:text-lg'>Help & Suppurt</span>
          </div>
    </div>
  </div>
 
 </div>
  )
}

export default HomePage