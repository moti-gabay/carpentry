import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import AuthAdmin from '../auth/AuthAdmin'
import AdminHeader from '../components/admin/AdminHeader'
import axios from 'axios';
import AdminFooter from '../components/admin/AdminFooter';

const LayoutAdmin = () => {
// const options = {
//   method: 'GET',
//   url: 'https://getrit-furniture-store.p.rapidapi.comhttps//getrit.com/API/Token',
//   params: {Token: 'Demo'},
//   headers: {
//     'X-RapidAPI-Key': '5fa2f02eebmshf21a219959daf96p1bde6ejsne5bf58551296',
//     'X-RapidAPI-Host': 'getrit-furniture-store.p.rapidapi.com'
//   }
// };
// const api = async () => {
//   try {
//     const {data} = await axios.request(options);
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }
// useEffect(() => {
//   api()
// })

  return (
    <div>
      <AuthAdmin/>   
      <AdminHeader/>
      <Outlet/>
      <AdminFooter/>
    </div>
  )
}

export default LayoutAdmin