import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import AuthUserInfo from '../auth/AuthUserInfo'
import Footer from '../components/Footer'
import { guestGetCart } from '../redux/features/GuestSlice'

const Layout = () => {
  const {user} = useSelector(store => store.userAuthReducer);
  const {guestCart} = useSelector(store => store.guestReducer);
  const nav = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.role == "admin") {
      nav("/admin")
    }
    dispatch(guestGetCart())
  },[user])

  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout