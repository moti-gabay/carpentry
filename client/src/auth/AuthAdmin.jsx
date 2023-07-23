import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiGet } from '../constants/Requests';
import { CHECK_ADMIN_TOKEN } from '../constants/url';

const AuthAdmin = () => {
  const nav = useNavigate();
  
  const checkToken = async () => {
        try {
            const { data } = await apiGet(CHECK_ADMIN_TOKEN);
        } catch (error) {
            nav("*"); 
        }
  }

  useEffect(() => {
    checkToken();
  },[])
  return (
    <></>
  )
}

export default AuthAdmin