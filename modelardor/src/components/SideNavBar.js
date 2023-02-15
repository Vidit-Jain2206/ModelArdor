import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from '../context/ContextAPI'
import { VscAccount } from "react-icons/vsc";


function SideNavBar() {
    const {login,mobileMenu,setLogin} =useContext(Context);
    const handleLogout=()=>{
        setLogin(false);
      }
    
      const handleLogin=()=>{
        setLogin(true);
      }
  return (
    <div>
      <div className={` flex flex-col font-serif items-center justify-center sm:hidden w-full overflow-y-auto h-full py-4 bg-white absolute z-10 translate-x-[-628px] duration-1000 transition-all ${
                mobileMenu ? "translate-x-0" : ""
            }`}>

        <div className="h-[50px] flex justify-center">
        {!login && (
            
              <div className="flex items-center jusify-center text-[#44DBBD] w-[128px] px-2">
                <VscAccount className="text-xl px-1 w-[45px] "></VscAccount>
                <Link to="/login" className=" py-1 text-[1rem] rounded-none md:px-1 md:py-1 text-[#44DBBD]" onClick={handleLogin}><p>Login</p></Link>
              </div>

            
          )}
          {/* profile picture */}
          {login && (
            <div className="flex items-center jusify-center text-[#44DBBD] w-[128px] "><VscAccount className="text-xl w-[45px]"></VscAccount>
            <Link to="/" className=" py-1 text-[1rem] rounded-none md:px-1 md:py-1 text-[#44DBBD]" onClick={handleLogout}><p>Logout</p></Link>
            </div>
            
          )}
        </div>

        <div className="flex flex-col justify-center h-[110px]">
        <Link to="/" className="my-1"><span className="px-2 text-[1rem] text-[#44DBBD] my-2 ">Home</span></Link>
        <Link to="/" className="my-1"><span className="px-2 text-[1rem] my-2">About</span></Link>
        <Link to="/" className="my-1"><span className="px-2 text-[1rem] my-2" >Contact Us</span></Link>
        </div>
      </div>
    </div>
  )
}

export default SideNavBar
