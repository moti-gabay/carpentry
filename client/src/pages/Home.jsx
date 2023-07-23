import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {SlArrowDown} from 'react-icons/sl'
import HomePage from '../components/HomePage';
import Sale from '../components/Sale';
import Order from '../forms/Order';
import { setProduct } from '../redux/features/ProductSlice';
import axios from 'axios';

const Home = () => {
 const {status, error, user} = useSelector(store => store.userAuthReducer);
 const {products} = useSelector(store => store.productsReducer);
 const [openOrder, setOpenOrder] = useState(false);
 const dispatch = useDispatch();

 const handleOpenOrder = (product) => {
    if (product.inStock) {
       dispatch(setProduct(product));
       setOpenOrder(true);
       const element = document.querySelector("#order");
       const offsetTop = element.offsetTop - 100;
       window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
 }

 
//  const example = async () => {
//     const url = "https://woodwork.fandom.com/api/v1/";
//     const response = await axios.get(url);
//     // const  = await response.json();
//     console.log(response);
//  }

//  useEffect(() => {
//   example()
//  },[])

  return (
    <div className="min-h-screen">
      <HomePage/>
      <div className="text-center font-semibold mt-[5%] mb-[2%]">
        <h2 className='text-3xl sm:text-5xl lg:text-6xl mb-1 sm:mb-2'>Build By Your Own</h2>
        <h3 className='text-xl sm:text-3xl lg:text-4xl'>Choose Wood Type</h3>   
        <h3><SlArrowDown className='mx-auto mt-5 text-2xl sm:text-4xl lg:text-5xl'/> </h3>
      </div>
      {!user && <Sale/>}
      <div className="text-3xl text-center">
          <p className='sm:hidden'>sm</p>
          <p className='hidden sm:block md:hidden'>md</p>
          <p className='hidden md:block lg:hidden'>lg</p>
          <p className='hidden lg:block xl:hidden'>xl</p>
          <p className='hidden xl:block'>xxl</p>
        </div>
      {/* prudoct list */}
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mx-[10%] sm:mx-[12%] md:mx-[10%] xl:mx-[12%] gap-y-6 lg:gap-y-10 xl:gap-y-14">
      {products?.map((item, i) => (
        <li 
        key={i}>
          <div 
          onClick={() => handleOpenOrder(item)}
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: 'cover',  
          }}
          className={`w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 xl:w-44 xl:h-44 mx-auto overflow-hidden rounded-full border-slate-500 relative shadow-xl ${item.inStock ? "hover:scale-110 hover:duration-300 cursor-pointer" : 'opacity-50 pointer-events-none'}`}>
            <div className="bg-black bg-opacity-60 w-full h-[40%] absolute bottom-0">
              <p className="text-slate-50 p-0.5 xl:p-2 text-sm sm:text-base lg:text-xl text-center mx-auto">{item.name}</p>
            </div>
          </div>
          {!item.inStock && <div className="text-center text-base lg:text-lg text-red-600 font-bold mt-0.5">Out Of Stock!</div>}
        </li>
      ))}
      </ul>
      {/* order product */}
      <div id='order'>
      {openOrder && <Order setOpenOrder={setOpenOrder} />}
      </div>
    </div>
  )
}

export default Home

//      {/* cc */}
//       const [isOpen, setIsOpen] = useState(false);
//  const toggleOpen = () => {
//    setIsOpen(!isOpen);
//  };
//  const contentStyles = {
//   position: 'absolute',
//   top: '0',
//   left: '0',
//   width: '100%',
//   height: '100%',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   animationName: isOpen ? 'slide-in' : 'slide-out',
//   animationDuration: '1s',
//   animationTimingFunction: 'ease-out',
//   backgroundColor: '#ffffff',
//   padding: '1rem',
//   borderRadius: '0.5rem',
//   boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
//   transformOrigin: 'top',
// };

// const animationKeyframes = `@keyframes slide-in {
//   0% {
//     transform: translateY(-100%);
//     opacity: 0;
//   }
//   100% {
//     transform: translateY(0);
//     opacity: 1;
//   }
// }

// @keyframes slide-out {
//   0% {
//     transform: translateY(0);
//     opacity: 1;
//   }
//   100% {
//     transform: translateY(-100%);
//     opacity: 0;
//   }
// }`;
//       <div className="relative">
//       <button
//         className="bg-blue-500 text-white py-2 px-4 rounded"
//         onClick={toggleOpen}
//       >
//         Toggle
//       </button>
//       {isOpen && (
//         <div style={contentStyles}>
//           <style>{animationKeyframes}</style>
//           <h2 className="text-xl mb-2">Content</h2>
//           <p>This is the content that will animate.</p>
//           <button
//             className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
//             onClick={toggleOpen}
//           >
//             Close
//           </button>
//         </div>
//       )}
//     </div>   
//     {/* cc */}