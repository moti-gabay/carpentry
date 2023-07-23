import React, { useEffect, useRef, useState } from 'react'
import {MdOutlineCancel} from 'react-icons/md'
import { BsTrash3} from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux'
import { changeItemAmountInCartRequest, removeItemFromCartRequest } from '../redux/features/UserAuthSlice';
import { guestChangeItemAmount, guestDeleteFromCart, guestResetCart } from '../redux/features/GuestSlice';

const CartPayment = () => {
  const {user} = useSelector(store => store.userAuthReducer);
  const {guestCart} = useSelector(store => store.guestReducer);
  const [cart,setCart] = useState([]);
  const [cartLen, setCartlen] = useState(0);
  const dispatch = useDispatch()

  const handeleRemoveItem = (id) => {
    if (user) {
      dispatch(removeItemFromCartRequest(id))
    }
    else {
     dispatch(guestDeleteFromCart(id))
    }

  }
  const handeleChangeAmount = (id, amount) => {
    if (amount > 0 && amount < 11) {
      if (user) { 
          dispatch(changeItemAmountInCartRequest({id, amount}))
        } 
      else{
        dispatch(guestChangeItemAmount({id, amount}))
      }
    }
  };
  useEffect(() => {
    let len = 0;
    if (user) {
      setCart(user.cart);
      user.cart.forEach(item => (len += item.amount))
    }
    else {
      setCart(guestCart);
      guestCart.forEach(item => (len += item.amount))
    } 
    
    setCartlen(len)
  },[user,guestCart])

  return (
    <div className='min-h-screen w-[95%] mx-auto'>
      <h1 className='text-center text-2xl sm:text-3xl md:text-5xl lg:text-5xl font-semibold pb-1 mt-[4%]'>My cart ({cartLen})</h1>
      <div className="text-3xl text-center">
          <p className='sm:hidden'>sm</p>
          <p className='hidden sm:block md:hidden'>md</p>
          <p className='hidden md:block lg:hidden'>lg</p>
          <p className='hidden lg:block xl:hidden'>xl</p>
          <p className='hidden xl:block'>xxl</p>
        </div>
        {cart.length > 0 ? 
        <table className="table-auto hidden sm:block text-start border border-collapse w-[99%] sm:w-[90%] md:w-[80%] mx-auto shadow-lg text-xs sm:text-base md:text-lg"> 
              <thead className="border bg-slate-200">
                <tr className=''>
                  <th className="w-[3%]">No.</th>
                  <th className="text-start py-3 w-[25%] sm:w-[20%] ps-3">Product</th>
                  <th className="text-start w-[30%] sm:w-[25%]">Sizes</th>
                  <th className="w-[10%] sm:w-[15%]">Amount</th>
                  <th className="w-[10%] sm:w-[15%]">Price</th>
                  <th className="w-[5%]"></th>
                </tr>
              </thead>
              <tbody>
                    {cart?.map(({name,thickness,length,width,amount,price,_id},i) => (
                      <tr 
                      key={i}
                      className="bg-slate-50">
                      <td className="border-b text-center border-e">{i+1}</td>
                      <td className="border-b ps-3 font-semibold">{name}</td>
                      <td className="py-3 border-b">
                        <p>Thickness: {thickness}</p>
                        <p>Length: {length}</p>
                        <p>Width: {width}</p>
                      </td>
                      <td className="border-b text-center">
                        <span className="flex justify-center overflow-hidden border border-slate-300 rounded-md h-8 md:w-[85%] lg:w-[70%] mx-auto">
                          <button 
                          onClick={() => handeleChangeAmount(_id, amount-1)}
                          className='w-[30%] font-semibold bg-slate-100 border-e border-slate-300'>-</button>
                          <input 
                          value={amount}
                          min={1} 
                          max={10} 
                          readOnly
                          className='w-[40%] text-center' 
                          type="text"/>
                          <button 
                          onClick={() => handeleChangeAmount(_id, amount+1)}
                          className='w-[30%] font-semibold bg-slate-100 border-s border-slate-300'>+</button>
                        </span>
                      </td>
                      <td className="border-b text-center">{price}</td>
                      <td className="border-b text-center">
                        <BsTrash3 
                        onClick={() => handeleRemoveItem(_id)}
                        className="text-center cursor-pointer mx-auto text-lg sm:text-xl md:text-2xl text-red-600 hover:scale-125 hover:duration-100"/>
                      </td>
                    </tr>
                    ))}
              </tbody>
        </table> :
             <div className="text-center mt-5">
              <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>Your Cart Is Empty...</h2>
             </div>} 
             {/* product list for mobile */}
             {cart.length > 0 && <div className="sm:hidden w-[90%] mx-auto">
              {cart?.map(({name,thickness,length,width,amount,price,_id},i) => (
                <div 
                key={i}
                className=" bg-slate-50 py-4 mb-1.5">
                  <div className="flex justify-around items-center">
                    <div className="font-semibold text-base">
                      <p>Product:</p>
                      <p className='font-serif'>"{name}"</p>
                    </div>
                    <div className="text-sm">
                      <p>Thickness: {thickness}</p>
                      <p>Length: {length}</p>
                      <p>Width: {width}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center h-8 my-1 mx-3">
                    <div className="">
                      <p>
                        <span className='font-semibold'>Price: </span> {price}$
                      </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="border border-slate-300 rounded-md overflow-hidden">
                        <button 
                        onClick={() => handeleChangeAmount(_id, amount-1)}
                        className='w-6 h-8 bg-slate-100 border-e border-slate-300 font-semibold'>-</button>
                        <input 
                        value={amount}
                        min={1} 
                        max={10} 
                        readOnly
                        className='w-8 h-8 text-center' type="text" />
                        <button 
                        onClick={() => handeleChangeAmount(_id, amount+1)}
                        className='w-6 h-8 bg-slate-100 border-s border-slate-300 font-semibold'>+</button>
                      </div>
                      <BsTrash3 
                      onClick={() => handeleRemoveItem(_id)}
                      className="text-center cursor-pointer mx-auto text-lg sm:text-xl md:text-2xl text-red-600 hover:scale-125 hover:duration-100"/>
                    </div>
                    </div>
                </div>
              ))}
              </div>} 
              <button onClick={() => dispatch(guestResetCart())} className='btn btn-lg'>RESET</button>
    </div>
  )
}

export default CartPayment