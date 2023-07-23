import React, { useState } from 'react';
import {FiMenu} from "react-icons/fi";
import { Link } from 'react-router-dom';
import { Fragment } from 'react'
import { Transition,Menu } from '@headlessui/react';


const MenuBar = ({handleSignUp, handleLogin}) => {
  const [toggleBar, setToggleBar] = useState(false);
  
  return (
      <div className="sm:hidden grid grid-cols-2 items-center gap-2">
            <Menu as="div">
        <div>
          <Menu.Button className="flex">
            {/* User avatar */}
            <div className="avatar placeholder col-span-1">
              <FiMenu className='text-4xl sm:text-4xl cursor-pointer hover:shadow-sm hover:scale-110'/>
            </div>
          </Menu.Button>
        </div>
        {/* Dropdown menu transition */}
        <Transition
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 ease-in scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          {/* Dropdown menu items */}
          <Menu.Items className='absolute mt-1 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <ul
             className='bg-slate-50 rounded-md px-2 py-1 w-[95vw]'>
              <li className='p-0.5 border-b hover:bg-slate-200 cursor-pointer hover:font-semibold'>
               <Link to={"/"} className='block'>Home</Link> 
              </li>
              <li className='p-0.5 border-b hover:bg-slate-200 cursor-pointer hover:font-semibold'>
               <Link to={"/buildGuides"} className='block'>Buid Guides</Link> 
              </li>
              <li className='p-0.5 border-b hover:bg-slate-200 cursor-pointer hover:font-semibold'>
               <Link to={"/about"} className='block'>About</Link> 
              </li>
              <li 
              onClick={handleSignUp}
              className='p-0.5 border-b hover:bg-slate-200 cursor-pointer hover:font-semibold'
              >SignUp</li>
              <li 
              onClick={handleLogin}
              className='p-0.5 mb-1 border-b hover:bg-slate-200 cursor-pointer hover:font-semibold'
              >Login</li>
            </ul>
          </Menu.Items>
        </Transition>
        </Menu>
        <div className='col-span-1 h-14 w-14'>
          <img className='rounded-full ' src="../../images/logo4.jpeg" alt="" />
        </div>
      </div>    
  )
}

export default MenuBar