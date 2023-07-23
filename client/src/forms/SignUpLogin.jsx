import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { clearError, loginRequest, resetStatus, signUpRequest, userInfoRequest } from '../redux/features/UserAuthSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

const SignUpLogin = ({signUp, setSignUp, setOpenModal}) => {
  const {error, status, loading} = useSelector(store => store.userAuthReducer);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { getValues, register, handleSubmit, reset, formState: { errors }, } = useForm();

  // Regex pattern for email validation
  const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const {pathname} = useLocation()
  // Function to handle form submission
  const onSub = (bodyData) => {
      if (signUp) {
          delete bodyData.confirmPassword;
          dispatch(signUpRequest(bodyData));
      }
      else{
          delete bodyData.name;
          delete bodyData.confirmPassword;
          dispatch(loginRequest(bodyData));         
      }
  }

  // case request fullfiled
  useEffect(() => {
    if(status){
       if (signUp) {
          setTimeout(() => {
             setSignUp(false);
             dispatch(clearError());
             dispatch(resetStatus());
             reset();
          }, 3000); 
       }
       else{
          setOpenModal(false);
          dispatch(clearError());
          dispatch(resetStatus());
          dispatch(userInfoRequest());        
       }
    }
  },[status]);

  return (
    <div>
      {signUp && !status && <h1 className='text-[2.5em] font-serif text-orange-950 text-center mb-3'>SignUp:</h1>}
         {!signUp && <h1 className='text-[2.5em] font-serif text-orange-950 text-center mb-3'>Login:</h1>}
         {!status &&
         <form onSubmit={handleSubmit(onSub)}>
              {signUp && <div className="sm:col-span-4 w-[80%] mx-auto py-1">
                <div>
                   <label>Full Name:</label>
                   <input
                   {...register('name', {
                   required: { value: true, message: 'Full Name is required...' },
                   minLength: { value: 2, message: 'min 2 chars...' },
                   maxLength: { value: 20, message: 'max 20 chars...' },
                   })}
                   placeholder='Type Your Full Name...'
                   className={`block w-full px-3 outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${errors.name ? 'focus:ring-red-600' : 'focus:ring-indigo-600'} sm:text-sm sm:leading-6`}
                   />
                   {errors.name && <p className='m-0 text-red-600'>{errors.name.message}</p>}
                </div>
              </div>}
              <div className="sm:col-span-4 w-[80%] mx-auto py-1">
                <div>
                   <label>Email Address:</label>
                   <input
                   {...register('email', {
                   required: { value: true, message: "email is required" },
                   pattern: { value: emailReg, message: "invalid email" }
                   })}
                   placeholder='Type Email address...'
                   className={`block w-full px-3 outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${errors.email ? 'focus:ring-red-600' : 'focus:ring-indigo-600'} sm:text-sm sm:leading-6`}
                   />
                   {errors.email && <p className='m-0 text-red-600'>{errors.email.message}</p>}
                </div>
              </div>
              <div className="sm:col-span-4 w-[80%] mx-auto py-1">
                <div>
                   <label>Password:</label>
                   <input
                   {...register('password', {
                   required: { value: true, message: 'Password is required...' },
                   minLength: { value: 4, message: 'min 4 chars...' },
                   maxLength: { value: 20, message: 'max 20 chars...' },
                   })}
                   type='password'
                   placeholder='Type Password...'
                   className={`block w-full px-3 outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${errors.password ? 'focus:ring-red-600' : 'focus:ring-indigo-600'} sm:text-sm sm:leading-6`}
                   />
                   {errors.password && <p className='m-0 text-red-600'>{errors.password.message}</p>}
                </div>
              </div>
              {signUp && 
              <div className="sm:col-span-4 w-[80%] mx-auto py-1">
                <div>
                   <label>Confirm Password:</label>
                   <input
                   type='password'
                   {...register('confirmPassword', {
                   required: { value: true, message: 'Confirm Password is required...' },
                   validate: { value: (val) => getValues('password') == val || 'Password do not match..' }
                   })}
                   placeholder='Confirm Password...'
                   className={`block w-full px-3 outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset ${errors.confirmPassword ? 'focus:ring-red-600' : 'focus:ring-indigo-600'} sm:text-sm sm:leading-6`}
                   />
                   {errors.confirmPassword && <p className='m-0 text-red-600'>{errors.confirmPassword.message}</p>}
                </div>               
              </div>}
              {error && 
              <div className="sm:col-span-4 w-[80%] mx-auto py-1">
               <p className='m-0 text-red-600 my-0.5'>*{error}</p>
               </div>} 
              <div className='bg-slate-100 mt-2 w-[100%]'>
                <div className="sm:col-span-4 w-[80%] mx-auto py-3">
                   {/* Submit Button */}
                   {loading ? <button className={`inline-flex w-full sm:mx-2 justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm pointer-events-none bg-blue-600 hover:bg-blue-500 sm:ml-3 sm:w-auto`}>
                     <p className='mx-2'>Loading</p> <img className='mx-auto' width={'18px'} src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" alt="loading" />
                     </button> :
                     <button type='submit' className={`inline-flex w-full sm:me-2 justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm cursor-pointer bg-blue-600 hover:bg-blue-500 sm:w-auto `}>
                        {signUp ? "SignUp" : "Login"}
                     </button>
                    }
                   <button
                   type="button"
                   className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                   onClick={()=>{ 
                     setOpenModal(false);
                     dispatch(clearError());
                  }}
                   >
                   Cancel
                   </button>
                </div>
              </div>   
         </form>}
         
         {/* After successfully signUp */}
         {status &&  
         <div className="py-8">
            <h3 className=' text-center text-[2em] font-semibold mb-2'>Thank you !</h3>
            <p className='text-xl text-center flex justify-center'>
               you will be transferd to login in 3 seconds
               <img className='ms-2 w-[10px] sm:w-[20px]' src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" alt="loading" />
            </p>
         </div>}
    </div>
  )
}

export default SignUpLogin