import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {BsTrash3} from 'react-icons/bs'
import {BiPlusMedical} from 'react-icons/bi'
import {FaEdit, FaPlus} from 'react-icons/fa'
import { changeInStockRequest, deleteProductRequest, resetProduct, setProduct } from '../../redux/features/ProductSlice'
import Modal from '../../modal/Modal'
import AddEditProduct from '../../forms/admin/AddEditProduct'


const ManageProducts = () => {
  const {products, loading} = useSelector(store => store.productsReducer);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);

  const handleAddition = () => {
    dispatch(resetProduct());
    setOpenModal(true);
  }

  const handleDelete = (id, name) => {
    const confirmed = window.confirm(`Are you sure you want to delete ${name}?`);
    if (confirmed) {
      dispatch(deleteProductRequest(id));
    }
  }

  const handleEdit = (item) => {
    dispatch(setProduct(item))
    setOpenModal(true)
  }

  const handleChangeInStock = (bodyData, name) => {
    const confirmed = window.confirm(`Are you sure you want to change ${name} to ${bodyData.inStock ? "Back in stock" : "Out of stock"}?`);
    if (confirmed) {
      dispatch(changeInStockRequest(bodyData));
    }
  }

  return (
    <div className='md:min-h-screen'
    style={{

      backgroundImage: `url('https://th.bing.com/th/id/OIG.Sxj.lVL37CYnxn5PA0uQ?w=270&h=270&c=6&r=0&o=5&dpr=2&pid=ImgGn')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat' 
    }}>
      <div className="pt-[2%] pb-[10%]">
      {loading && <h1 className='text-[3em] text-center'>
        Loading
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-md"></span>
        </h1>}
        {products && !loading &&
        <div className="">
          <div className="mb-[3%]">
            <h1 className='text-center text-2xl sm:text-5xl lg:text-7xl font-serif my-[1%] sm:mb-[2%] lg:mb-[2.5%]'>Manage your products:</h1>
            <button 
            onClick={() => handleAddition()}
            className="bg-green-400 text-xs sm:text-base md:text-lg px-2 sm:px-4 py-2 lg:px-5 lg:py-3 rounded-md font-semibold flex items-center justify-center gap-1 mx-auto font-serif hover:bg-green-500 hover:scale-105 hover:shadow-lg">
              Add New Product <FaPlus />
            </button> 
          </div>
          <table className="table-auto text-start border border-collapse w-[99%] sm:w-[90%] md:w-[80%] mx-auto shadow-lg text-xs sm:text-md md:text-lg"> 
              <thead className="border bg-slate-200">
                <tr>
                  <th className="w-[4%]">No.</th>
                  <th className="text-start py-3 w-[20%] ps-3">Wood type</th>
                  <th className="text-start w-[20%]">Price <br className='sm:hidden'/> (per cm)</th>
                  <th className="text-start w-[10%]">CreatedAt</th>
                  <th className="text-center w-[15%]">Delete / Edit</th>
                  <th className='text-center w-[15%]'>inStock</th>
                </tr>
              </thead>
              <tbody>
                {products?.map((item,i) => {
                  const {name, pricePerCm, inStock, createdAt, _id} = item;
                  return (
                    <tr 
                    key={i}
                    className={`bg-slate-50 ${inStock ? "" : " line-through"}`}>
                      <td className="text-center py-1.5 border-b border-e">{i+1}</td>
                      <td className="border-b ps-3">{name}</td>
                      <td className="border-b">{pricePerCm}</td>
                      <td className="border-b">{createdAt.substring(2,10)}</td>
                      <td className="border-b text-center">
                        <div className="flex justify-center gap-0.5 sm:gap-3">
                          <BsTrash3 
                          onClick={() => handleDelete(_id, name)}
                          className="cursor-pointer text-lg sm:text-xl md:text-2xl text-red-600 hover:scale-125 hover:duration-100"/> 
                          <FaEdit 
                          onClick={() => handleEdit(item)}
                          className="cursor-pointer text-lg sm:text-xl md:text-2xl text-green-600 hover:scale-125 hover:duration-100"/>
                        </div>
                      </td>
                      <td className="border-b text-center ">
                        <span 
                        onClick={() => handleChangeInStock({inStock:!inStock, _id}, name)}
                        className={`cursor-pointer hover:font-semibold ${inStock ? "text-green-600" : "text-red-600"}`}>
                          {inStock? "In stock" : "Out of stock"}
                        </span>
                      </td>
                    </tr>
                )})}
              </tbody>
            </table>
          </div>}
          <Modal setOpenModal={setOpenModal} openModal={openModal}>
            <AddEditProduct/>
          </Modal>
        </div>
    </div>
  )
}

export default ManageProducts