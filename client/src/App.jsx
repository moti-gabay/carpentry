import { useEffect, useState } from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { useDispatch } from 'react-redux'
import { getGuides } from './redux/features/GuidesSlice'
import AuthUserInfo from './auth/AuthUserInfo'
import { productListRequest } from './redux/features/ProductSlice'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
        dispatch(getGuides());
        dispatch(productListRequest())
  },[])

  return (
    <div>
     <AuthUserInfo/>
     <AppRoutes/>
    </div>
  )
}

export default App
