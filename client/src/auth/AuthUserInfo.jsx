import React, { useEffect } from 'react'
import { userInfoRequest } from '../redux/features/UserAuthSlice'
import { useDispatch } from 'react-redux';
import { TOKEN_KEY } from '../constants/url';

const AuthUserInfo = () => {
  const dispatch = useDispatch();

  const checkToken = async () => {
    if (localStorage[TOKEN_KEY]) {
      dispatch(userInfoRequest());
    }
  }

  useEffect(() => {
    checkToken()
  },[])

  return (
    <></>
  )
}

export default AuthUserInfo