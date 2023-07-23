import React, { useState } from 'react'
import {RiAdminFill} from 'react-icons/ri';
import { Fragment } from 'react'
import { Transition,Menu } from '@headlessui/react';
import {GrLogout} from 'react-icons/gr';
import Modal from '../../modal/Modal'
import Logout from '../../forms/Logout';
import AdminProfile from './AdminProfile';

const AdminAccountDropDown = () => {
  const [openModal, setOpenModal] = useState(false);
  const [logout, setLogout] = useState(false);

  const openProfile = () => {
    setOpenModal(true);
    setLogout(false);
  }
  const openLogout = () => {
    setOpenModal(true);
    setLogout(true);
  }
  return (
    <div>
      <Menu as="div" className="absolute top-4 right-4">
        <div>
          <Menu.Button className="flex rounded-full bg-gray-600 hover:shadow-lg">
            {/* User avatar */}
            <div className="avatar placeholder">
              <div className="w-10 h-10 sm:w-14 sm:h-14">
              <span className='text-xl sm:text-2xl text-white'><RiAdminFill/></span>
              </div>
            </div>
          </Menu.Button>
        </div>
        {/* Dropdown menu transition */}
        <Transition
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          {/* Dropdown menu items */}
          <Menu.Items className="absolute right-1 mt-2 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <ul className='w-[35vw] sm:w-[20vw] md:w-[15vw] lg:w-[12vw] xl:w-[10vw] px-1 py-1 text-lg text-start '>
              <li 
              onClick={() => openProfile()}
              className='hover:bg-slate-200 hover:scale-105 border-b cursor-pointer'>
                  Profile
                </li>
                <li 
                onClick={() =>openLogout()} 
                className='hover:bg-slate-200 hover:scale-105 cursor-pointer'>
                <span className='pe-2'>Logout</span>
                <GrLogout className='inline'/>
                </li> 
              </ul>
          </Menu.Items>
        </Transition>
          <div>
            <Modal
            openModal={openModal} 
            setOpenModal={setOpenModal}
            logout={logout}>
              {logout ? <Logout/>
               : <AdminProfile/>}
            </Modal>
          </div>
        </Menu>
    </div>
  )
}

export default AdminAccountDropDown