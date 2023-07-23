import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/features/UserAuthSlice';
import { useNavigate } from 'react-router-dom';

const Logout = ({setOpenModal}) => {
  const {user, loading} = useSelector(store => store.userAuthReducer);
  const dispatch = useDispatch();
  const nav = useNavigate();
  
  return (
      <div>
        <h1 className='text-[2.5em] font-serif text-orange-950 text-center mb-4'>Logout:</h1>
            <div className="text-center">
               <h2 className='text-lg'>Hello
                  <span className='font-semibold ms-2'>"{user ? user.name : ""}"</span>
               </h2>
               <p className='mt-2'>are you sure you want to logout ?</p>
            </div>
            <div className='bg-slate-100 mt-5 w-[100%]'>
              <div className="sm:col-span-4 w-[80%] mx-auto py-3">
                 {/* Submit Button  */}
                 {loading ?
                  <button className={`inline-flex w-full sm:mx-2 justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm cursor-pointer bg-blue-600 hover:bg-blue-500 sm:ml-3 sm:w-auto`}>
                    <p className='mx-2'>Loading</p> 
                    <img className='mx-auto' width={'18px'} src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" alt="loading" />
                  </button> : 
                  <button 
                  className='inline-flex w-full sm:me-2 justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm cursor-pointer bg-blue-600 hover:bg-blue-500 sm:ml- sm:w-auto'
                  onClick={() => {
                     setOpenModal(false);
                     dispatch(logoutUser())
                     nav("/"); 
                  }}
                  >
                  Logout
                  </button>
                 } 
                 <button
                 type="button"
                 className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  onClick={()=> setOpenModal(false)}
                 >
                 Cancel
                 </button>
              </div>
            </div>
         </div>
  )
}
export default Logout