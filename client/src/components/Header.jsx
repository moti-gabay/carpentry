import React, { Children, useEffect, useState } from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { Link, useSearchParams } from 'react-router-dom';
import MenuBar from './MenuBar';
import Modal from '../modal/Modal';
import { useSelector } from 'react-redux';
import SignUpLogin from '../forms/SignUpLogin';
import Logout from '../forms/Logout';


const Header = () => {
    const {user} = useSelector(store => store.userAuthReducer);
    const {guestCart} = useSelector(store => store.guestReducer);
    const [cartLen, setCartlen] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [signUp, setSignUp] = useState(false);
    const [logout, setLogout] = useState(false);
    const homeQuery = window.location.pathname === "/";
    //const [login, setLogin] = useState(false);
    
    const handleSignUp = () => {
        setOpenModal(true);
        setLogout(false);
        setSignUp(true);
    }
    const handleLogin = () => {
        setSignUp(false);
        setLogout(false);
        setOpenModal(true);
    }
    const handleLogout = () => {
        if (user) {
            setSignUp(false);
            setLogout(true);
            setOpenModal(true);
        }
    }
    const getInitialsFullName = (fullName) => {
      const names = fullName.split(' ');
      const initials = names.map(name => name.charAt(0).toUpperCase());
      return initials.join('.');
    }

    useEffect(() => {
      let len = 0;
      if (user) {
        user.cart.forEach(item => (len += item.amount))
      } else  {
        guestCart.forEach((item => len+=item.amount));
      }
      setCartlen(len);
    },[user,guestCart])

  return (
    <div className={`${homeQuery ? "pb-[9%] lg:pb-[6%]" : "pb-[25%] sm:pb-[16%] md:pb-[15%] lg:pb-[12%] xl:pb-[10%]"}`}>
    <div className='shadow-lg fixed z-10'>
      <div className=" bg-gray-900 text-slate-100 text-xs sm:text-sm md:text-base text-center py-0.5">Free shipping on purchases over $100</div>
        <nav 
        style={{
            backgroundImage: 'url(https://images.pexels.com/photos/301717/pexels-photo-301717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
            backgroundSize: 'cover'
        }}
        className="text-sm md:text-base lg:text-lg h-16 sm:h-20 md:h-24 flex justify-between items-center text-gray-800 font-semibold w-[100vw] px-[3%]">
          <div className="w-[25%] sm:w-[55%] md:w-[55%] lg:w-[50%] xl:w-[47%]">
              <ul className='hidden sm:flex justify-between items-center'>
                <li className='w-[19%] md:w-[18%] lg:w-[16%] xl:w-[14%]'>
                  <img className='rounded-full' src="../../images/logo4.jpeg" alt="" />
                </li>
                <li className='hover:scale-110'>
                    <Link to={"/"}>Home</Link> 
                </li>
                <li className='hover:scale-110'>
                   <Link to={"/buildGuides"}>Build Guides</Link> 
                </li>
                {/* {user && <li className='hover:scale-105'>
                    <Link to={"/contactUs"} className=''>My Favorite Guides</Link>
                </li>} */}
                <li className='hover:scale-110'>
                    <Link to={"/about"}>About</Link>
                </li>
                <li className='hover:scale-105'>
                    <Link to={"/contactUs"} className='bg-amber-800 bg-opacity-75 p-2 md:p-2.5 rounded-md text-slate-100'>Contact</Link>
                </li>
              </ul>
              {/* menu bar for small screens */}
              <MenuBar handleSignUp={handleSignUp} handleLogin={handleLogin}/>
          </div>
          <div className="w-[25%] sm:w-[35%] md:w-[32%] lg:w-[27%] xl:w-[22%]">
            <ul className='grid grid-cols-2 sm:grid-cols-4 items-center gap-1 sm:gap-0'>
                <li className='hidden sm:block col-span-2 mx-auto'>
                  <button
                  className='hover:scale-110'
                  onClick={handleSignUp}>SignUp
                  </button> 
                  <span className='mx-1.5'>/</span> 
                  <button 
                  className='hover:scale-110'
                  onClick={handleLogin}>Login
                  </button> 
                </li>
                <li className='mx-auto relative'>
                  <Link to={"/cartPayment"}>
                    <FaShoppingCart className='text-2xl sm:text-3xl hover:scale-110'/>
                    {cartLen > 0 && <span className='absolute top-[-8px] end-[-11px] bg-orange-400 rounded-full text-xs w-4 h-4 sm:text-sm sm:w-5 sm:h-5 text-center'>{cartLen}</span>}
                  </Link>
                </li>
                <li>
                    <button
                    onClick={handleLogout}
                    className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center hover:shadow-xl mx-auto ${user ? "bg-green-600" : "bg-gray-500 pointer-events-none"}`}>
                       <p className='text-xs sm:text-base text-slate-50'>{user ? getInitialsFullName(user.name) : "Guest"}</p> 
                    </button>
                </li>
              </ul>
          </div>
        </nav>
        <Modal 
        openModal={openModal} 
        setOpenModal={setOpenModal} 
        signUp={signUp}
        setSignUp={setSignUp}
        >
          {logout ? <Logout/> : <SignUpLogin/> }
        </Modal>
    </div>
    
    </div>
  )
}

export default Header