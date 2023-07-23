import { useSelector } from 'react-redux';
import Logout from './Logout';
import SignUpLogin from './SignUpLogin';

const RegisterForms = ({ setOpenModal, signUp, setSignUp, logout}) => {
   const {status} = useSelector(store => store.authReducer);
   //  const [query] = useSearchParams();

  return (
    <div>
       <div className="mt-4">
         {/* signup & login form */}
         <SignUpLogin signUp={signUp} setSignUp={setSignUp} setOpenModal={setOpenModal} logout={logout}/>

         {/* After successfully signUp */}
         {status &&  
         <div className="py-8">
            <h3 className=' text-center text-[2em] font-semibold mb-2'>Tank you !</h3>
            <p className='text-xl text-center flex justify-center'>
               you will be transferd to login in 3 seconds
               <img className='ms-2' width={'20px'} src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" alt="loading" />
            </p>
         </div>}

         {/* logout */}
         <Logout setOpenModal={setOpenModal} logout={logout} />
       </div>
    </div>
    )
}

export default RegisterForms


