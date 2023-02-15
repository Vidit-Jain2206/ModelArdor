import React,{useContext} from 'react'
import { Link } from "react-router-dom";
import {Context} from "../context/ContextAPI"
const Login = () => {
    const {setLogin} =useContext(Context);
    const handleOnClick=()=>{
        setLogin(true);
        
    }
  return (
    <div className='flex justify-center mt-[4rem]  '>
        <div className="flex-flex-col w-5/6 sm:w-1/2 md:w-1/2 xl:w-1/3 rounded-lg ">

            <div className='mx-[2rem] my-[2rem] shadow-xl shadow-[#44DBBD]/[0.4] rounded-lg bg-[#90909057] px-2 py-4'>
                <form action="">
            <label htmlFor="" className='px-4 py-2'>Enter Your Email</label><br />
            <input type="text" placeholder='Enter your email' required className='px-5 py-2 text-sm border-[1px]  bg-transparent border-[#000000] rounded-lg ml-[1rem] mt-[1rem] mb-[1.5rem] w-2/3' /><br />

            <label htmlFor="" className='px-4 py-2 mt-[2rem]'>Enter Your Password</label><br />
            <input type="password" placeholder='Enter your password' required className='px-5 py-2 text-sm border-[1px] bg-transparent  border-[#000000] rounded-lg ml-[1rem] mt-[1rem] mb-[1.5rem] w-2/3' /><br />

            <button className='ml-[1rem] bg-[#44DBBD] text-black w-1/2 px-5 py-1 hover:bg-transparent hover:text-black hover:border-[2px] hover:border-[#44DBBD] mb-[1rem]' onClick={handleOnClick}><Link to="/">Login</Link></button>
            </form>
            </div>
        </div>

      
    </div>
  )
}

export default Login
