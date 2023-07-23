import React from 'react'
import { useSelector } from 'react-redux';

const AdminProfile = ({setOpenModal}) => {
  const {user} = useSelector(store => store.userAuthReducer);

  return (
    <div className='p-3'>
        <h1 className='text-center text-3xl font-serif mb-2'>Your Profile:</h1>
        <ul className="leading-8">
          <li>
            <span className="font-semibold me-1.5">Name:</span>
            {user.name}
          </li>
          <li>
            <span className="font-semibold me-1.5">Email:</span>
            {user.email}
          </li>
          <li>
            <span className="font-semibold me-1.5">Created At:</span>
            {user.createdAt.substring(2,10)}
          </li>
        </ul>

        <div className="text-end">
            <button
            type="button"
            className="mt-1 rounded-md bg-gray-400 px-4 py-1.5 font-semibold hover:scale-105 hover:bg-gray-500 hover:text-slate-50"
            onClick={()=> setOpenModal(false)}
            >
            Exit
            </button>
        </div>
    </div>
  )
}

export default AdminProfile