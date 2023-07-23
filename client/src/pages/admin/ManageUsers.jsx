import React, { useEffect } from 'react'
import { BsTrash3} from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, deleteUserRequest, usersListRequest } from '../../redux/features/UserAuthSlice';


const ManageUsers = () => {
  const {users,loading, error} = useSelector(store => store.userAuthReducer);
  const dispatch = useDispatch();

  const handleDelete = (id, name) => {
    const confirmed = window.confirm(`Are you sure you want to delete ${name}?`);
    if (confirmed) {
      dispatch(deleteUserRequest(id));
    }
  }

  useEffect(() => {
      dispatch(usersListRequest());
  },[])

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearError())
    }
  },[error])

  

  return (
    <div className='md:min-h-screen'
    style={{
      backgroundImage: `url('https://images.pexels.com/photos/62693/pexels-photo-62693.jpeg?auto=compress&cs=tinysrgb&w=800')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat' 
    }}>
      <div className="pb-[10%]">
      {loading && <h1 className='text-[3em] text-center'>
        Loading
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-md"></span>
        </h1>}
        {users && !loading &&
        <div className="">
          <h1 className='text-center text-2xl sm:text-5xl lg:text-7xl font-serif py-[4%]'>Manage your users:</h1>
          <table className="table-auto  text-start border border-collapse w-[99%] sm:w-[90%] md:w-[80%] mx-auto shadow-lg text-[11px] sm:text-base md:text-lg"> 
              <thead className="border bg-slate-200">
                <tr>
                  <th className="w-[4%]">No.</th>
                  <th className="text-start py-3 w-[20%] ps-3">Name</th>
                  <th className="text-start w-[25%]">Email</th>
                  <th className="text-start w-[12%]">Role</th>
                  <th className="text-start w-[13%]">CreatedAt</th>
                  <th className="text-center w-[10%]">Delete</th>
                </tr>
              </thead>
              <tbody>
                {users.map(({name, email, role, createdAt, _id},i) => (
                    <tr 
                    key={i}
                    className=" bg-slate-50">
                      <td className="text-center py-1.5 border-b border-e">{i+1}</td>
                      <td className="border-b ps-3">{name}</td>
                      <td className="border-b">{email}</td>
                      <td className={`border-b ${role === "admin" ? "font-semibold" : ""}`}>{role}</td>
                      <td className="border-b">{createdAt.substring(2,10)}</td>
                      <td className="border-b text-center">
                        <BsTrash3 onClick={()=>handleDelete(_id, name)} className="text-center cursor-pointer mx-auto text-lg sm:text-xl md:text-2xl text-red-600 hover:scale-125 hover:duration-100"/>
                      </td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>}
        </div>
    </div>
  )
}

export default ManageUsers