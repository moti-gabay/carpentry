import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCartRequest } from '../redux/features/UserAuthSlice';
//import { guestAddToCartRequest } from '../redux/features/GuestSlice';
import { guestAddToCart } from '../redux/features/GuestSlice';

const Order = ({setOpenOrder}) => {
  const { register, handleSubmit, reset, formState: { errors }, } = useForm();
  const {product} = useSelector(store => store.productsReducer);
  const {user} = useSelector(store => store.userAuthReducer);
  const dispatch = useDispatch();
  
  const onSub = (bodyData) => {
    console.log(bodyData);
    const {thickness, length, width, amount} = bodyData;
    bodyData.pricePerCm = product.pricePerCm;
    bodyData.price = +((thickness * length * width * amount) * bodyData.pricePerCm).toFixed(2);
    bodyData.name = product.name;
    bodyData.thickness = parseFloat(bodyData.thickness);
    bodyData.length = parseFloat(bodyData.length);
    bodyData.width = parseFloat(bodyData.width);
    bodyData.amount = parseFloat(bodyData.amount);
    console.log(bodyData);
    if (user) {
      dispatch(addItemToCartRequest(bodyData));
    } else {
     // dispatch(guestAddToCartRequest(bodyData))
     dispatch(guestAddToCart(bodyData));
    }
   
    reset(); 
  }
  const onClose = () => {
    setOpenOrder(false);
    window.scrollTo({ top: 0, behavior: 'smooth'});
  }

  useEffect(() => {
    reset();
  },[product])

  return (
    <div className='mt-8 sm:mt-12'>
      <h2 className='text-3xl sm:text-4xl md:text-5xl text-center mb-6 font-semibold'>Order: <span className=' font-serif'>"{product.name}"</span></h2>
      <form onSubmit={handleSubmit(onSub)}
      className='w-[80%] mx-auto'>
              <div className="">
                <h3 className='text-2xl sm:text-3xl xl:text-4xl font-semibold mb-2'>Choose Thickness</h3>
                <div>                 
                   <label className='font-semibold text-sm sm:text-base md:text-lg lg:text-xl'>Thickness: (cm)</label>
                   <select
                   {...register('thickness', {
                   validate: (value) => value !== 'title' || 'Choose an option',
                   })}
                   className={`select select-sm block w-[55%] sm:w-[40%] md:w-[35%] lg:w-[30%] xl:w-[25%] ps-2 mt-1 mb-1 border-slate-300 text-gray-900 shadow-sm ${errors.name ? 'focus:border-red-600' : 'focus:border-indigo-600'}`}
                   >
                    <option value="title">Choose option</option>
                    {product.thickness.map((item, i) => (
                      <option key={i} value={item}>{item}</option>
                    ))}
                   </select>
                   {errors.thickness && <p className='m-0 text-red-600'>{errors.thickness.message}</p>}
                </div>
              </div>
              <div >
                <h3 className="text-2xl sm:text-3xl xl:text-4xl font-semibold mb-2 mt-7">Type Length & Width</h3>
                <div className='mb-2'>
                   <label className='font-semibold text-sm sm:text-base md:text-lg lg:text-xl'>Length:</label>
                   <input
                   {...register('length', {
                   required: { value: true, message: "Length required" },
                   min: { value: 5, message: 'minimum 5 cm' },
                   max: { value: 300, message: 'maximum 300 cm' },
                   })}
                   type='number'
                   step={0.1}
                   className={`block w-[30%] sm:w-[20%] md:w-[17%] lg:w-[15%] xl:w-[12%] ps-2 py-0.5 outline-none rounded-sm text-gray-900 shadow-sm border border-slate-300 focus:border-indigo-600 focus:border-2`}
                   />
                   {errors.length && <p className='m-0 text-red-600'>{errors.length.message}</p>}
                </div>
              </div>
              <div className="">
                <div className='mb-2'>
                   <label className='font-semibold text-sm sm:text-base md:text-lg lg:text-xl'>Width:</label>
                   <input
                   {...register('width', {
                   required: { value: true, message: 'Width required' },
                   min: { value: 5, message: 'minimum 5 cm' },
                   max: { value: 300, message: 'maximum 300 cm' },
                   })}
                   type='number'
                   step={0.1}
                   className={`block w-[30%] sm:w-[20%] md:w-[17%] lg:w-[15%] xl:w-[12%] ps-2 py-0.5 outline-none rounded-sm text-gray-900 shadow-sm border border-slate-300 focus:border-indigo-600 focus:border-2`}
                   />
                   {errors.width && <p className='m-0 text-red-600'>{errors.width.message}</p>}
                </div>
                <div className='mb-3'>
                   <label className='font-semibold text-sm md:text-base lg:text-lg'>Amount:</label>
                   <input
                   {...register('amount', {
                   required: { value: true, message: 'Amount required' },
                   min: { value: 1, message: 'minimum 1' },
                   max: { value: 10, message: 'maximum 10' },
                   })}
                   type='number'
                   defaultValue={1}
                   min={1}
                   max={10}
                   className={`block text-center w-[15%] sm:w-[10%] md:w-[9%] lg:w-[7%] xl:w-[5%] py-0.5 ps-[2%] lg:ps-[1%] outline-none rounded-sm text-gray-900 shadow-sm border border-slate-300 focus:border-indigo-600 focus:border-2`}
                   />
                   {errors.amount && <p className='m-0 text-red-600'>{errors.amount.message}</p>}
                </div>
                <div className="">
                  <p className='sm:text-lg xl:text-xl'>
                    <span className=' font-semibold'>Price Per SM: </span>
                    {(product.pricePerCm * 10000).toFixed(0)}
                  </p>
                </div>
              </div>
              <div className='bg-slate-100 mt-2 p-4 sm:ps-6  w-[100%]'>
                   {/* Submit Button */}
                     {/* <button className={`inline-flex w-full sm:mx-2 justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm bg-amber-800 hover:bg-amber-700 hover:shadow-lg sm:w-auto`}>
                     <p className='mx-2'>Loading</p> <span className="loading loading-spinner loading-sm"></span>
                     </button> :  */}
                     <button type='submit' className={`w-full sm:me-2 justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm bg-amber-800 hover:bg-amber-700 hover:shadow-lg sm:w-auto`}>
                        Add to cart
                     </button>
                   <button
                   type="button"
                   className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                   onClick={()=>{ 
                     onClose();
                  }}
                   >
                   Cancel
                   </button>
              </div>   
         </form> 
         
    </div>
  )
}

export default Order