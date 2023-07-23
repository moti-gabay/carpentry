import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AdminAccountDropDown from './AdminAccountDropdown';

const AdminHeader = () => {
  const {user} = useSelector(store => store.userAuthReducer);

  return (
    <div className="h-42 sm:h-56 pb-5 bg-gradient-to-br from-sky-600 to-indigo-700 text-center relative">
        <h1 className='text-5xl sm:text-6xl md:text-7xl font-serif text-center pt-4'>Admin</h1>
        <p className='text-2xl'>Welcome "{user?.name}"</p> 
        <div className="mt-4 flex justify-center gap-3 items-center">
          <Link to={"/admin"}>
            <p className="bg-green-400 text-xs sm:text-base md:text-lg py-1.5 px-3 rounded-md font-serif hover:bg-green-500 hover:scale-105 hover:shadow-lg">Manage users</p>
          </Link> 
          <Link to={"/admin/manageProducts"}>
            <p className="bg-green-400 text-xs sm:text-base md:text-lg p-1.5 rounded-md font-serif hover:bg-green-500 hover:scale-105 hover:shadow-lg">Manage products</p>
          </Link>  
        </div>
        <AdminAccountDropDown />
        <div className="">
          <p className='sm:hidden'>sm</p>
          <p className='hidden sm:block md:hidden'>md</p>
          <p className='hidden md:block lg:hidden'>lg</p>
          <p className='hidden lg:block xl:hidden'>xl</p>
          <p className='hidden xl:block'>xxl</p>
        </div>
    </div>
  )
}

export default AdminHeader