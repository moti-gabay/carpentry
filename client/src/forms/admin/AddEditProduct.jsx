import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addProductRequest, editProductRequest } from '../../redux/features/ProductSlice';

const AddEditProduct = ({setOpenModal}) => {
    const {product, loading} = useSelector(store => store.productsReducer);
    const dispatch = useDispatch();
    const imageUrlRegex = /\b(https?:\/\/\S+\.(?:png|jpe?g|gif|bmp|svg))\b/i;
    const { register, handleSubmit, reset, formState: { errors }, } = useForm(product ? 
        {defaultValues:{
        name:product.name,
        image:product.image,
        pricePerCm:product.pricePerCm,
        thickness:product.thickness
        }} : {});

    const onSub = (bodyData) => {
        bodyData.thickness = bodyData.thickness.filter(value => value !== '');
        bodyData.thickness.sort((a, b) => a - b);
        bodyData.thickness = bodyData.thickness.map((str) => parseFloat(str));
        bodyData.pricePerCm = parseFloat(bodyData.pricePerCm);
        if (product) {
            const id = product._id;
            const allData = {data:bodyData, id}
            dispatch(editProductRequest(allData));
        }
        else{
           console.log(bodyData);
           dispatch(addProductRequest(bodyData));
        }
        setOpenModal(false);
    }

  return (
    <div>
       <div className="p-1">
       <h2 className='text-center text-3xl sm:text-5xl font-serif mb-4'>{product ? "EditProduct" : "AddProduct"}</h2>
        <form onSubmit={handleSubmit(onSub)}>
            <div className="w-[80%] mx-auto">
                <div className="mt-1">
                   <label>Name:</label>
                   <input
                   {...register('name', {
                   required: { value: true, message: 'Name required' },
                   minLength: { value: 2, message: 'min 2 chars' },
                   maxLength: { value: 14, message: 'max 14 chars' },
                   })}
                   type='text'
                   placeholder='Name'
                   className='block w-full px-3 ps-2 py-1 outline-none rounded-md text-gray-900 shadow-sm border border-slate-300 focus:border-indigo-600 focus:border-2'
                   />
                   {errors.name && <p className='m-0 text-sm text-red-600'>{errors.name.message}</p>}
                </div>
                <div className="mt-1">
                   <label>Image (url):</label>
                   <input
                   {...register('image', {
                   required: { value: true, message: "url is required" },
                   pattern: { value: imageUrlRegex, message: "invalid url" }
                   })}
                   type="url"
                   placeholder='Image url'
                   className='block w-full px-3 ps-2 py-1 outline-none rounded-md text-gray-900 shadow-sm border border-slate-300 focus:border-indigo-600 focus:border-2'
                   />
                   {errors.image && <p className='m-0 text-sm text-red-600'>{errors.image.message}</p>}
                </div>
                <div className="mt-1">
                   <label>Price per cm:</label>
                   <input
                   {...register('pricePerCm', {
                   required: { value: true, message: 'Price required' },
                   min: { value: 0.0001, message: 'Minimum 0.0001' },
                   max: { value: 2, message: 'Maximum 2' },
                   })}
                   type="number"
                   step='0.0001'
                   placeholder='Price per cm'
                   className='block w-full px-3 ps-2 py-1 outline-none rounded-md text-gray-900 shadow-sm border border-slate-300 focus:border-indigo-600 focus:border-2'
                   />
                   {errors.pricePerCm && <p className='m-0 text-sm text-red-600'>{errors.pricePerCm.message}</p>}
                </div>
                <div className="mt-5 mb-2">
                    <h2 className='text-xl sm:text-2xl lg:text-3xl font-semibold'>Thickness:</h2>
                    <p className='text-xs sm:text-sm'>Enter a few thickness in cm (minimum 1 maximum 5)</p>
                </div>
                <div>
                    {[...Array(5)].map((item, i) => (
                     <div key={i} className="mt-1">
                      <label>Thickness {i+1} {i == 0 && '(required)'}:</label>
                      <input
                      {...register(`thickness[${i}]`, {
                        required: i === 0 ? { value: true, message: 'Thickness required' } : false,
                      })}
                      type='number'
                      step='0.1'
                      placeholder={`thickness ${i+1}`}
                      className='block w-full px-3 ps-2 py-1 outline-none rounded-md text-gray-900 shadow-sm border border-slate-300 focus:border-indigo-600 focus:border-2'
                      />
                      {errors.thickness && errors.thickness[i] && (
                      <p className="m-0 text-sm text-red-600">{errors.thickness[i].message}</p>
                      )}
                     </div>
                    ))}
                </div>
                </div>
              <div className='bg-slate-100 mt-2 w-[100%]'>
                <div className="w-[80%] mx-auto py-3">
                   {/* Submit Button */}
                    {loading ? <button className={`inline-flex w-full sm:mx-2 justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm pointer-events-none bg-blue-600 sm:ml-3 sm:w-auto`}>
                     <p className='mx-2'>Loading</p> <img className='mx-auto' width={'18px'} src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" alt="loading" />
                    </button> :
                     <button type='submit' className={`inline-flex w-full sm:me-2 justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm cursor-pointer bg-blue-600 hover:bg-blue-500 sm:w-auto `}>
                        {product ? "Edit" : "Add"}
                     </button>}
                   <button
                   type="button"
                   className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                   onClick={()=>{ 
                     setOpenModal(false);
                   }}
                   >
                   Cancel
                   </button>
                </div>
              </div>   
         </form>
        </div>
    </div>
  )
}

export default AddEditProduct