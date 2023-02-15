import React, { useContext} from "react";
import { Link} from "react-router-dom";
import { Context } from "../context/ContextAPI";
import { VscAccount } from "react-icons/vsc";
import { CgClose } from "react-icons/cg";
import { SlMenu } from "react-icons/sl";


function Header() {
  const { login, mobileMenu, setMobileMenu, basket, setLogin } =
    useContext(Context);
  const mobileMenuToggle = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleLogout = () => {
    setLogin(false);
  };

  const handleLogin = () => {
    setLogin(true);
  };

  return (
    <>
      <div className="sticky top-0 z-10 flex items-center justify-between h-14 px-1 md:px-2 bg-black/[0.7]">
        {/* logo */}
        <Link
          to="/"
          className="px-2 py-2 italic font-bold font-serif text-white w-[165px] rounded-2xl text-xl md:text-2xl "
        >
          <span className="">ModelArdor</span>
        </Link>

        <div className="flex flex-row justify-end font-serif items-center w-[400px]">
          {/* home,about contact us */}
          <div className="hidden sm:flex h-full justify-center items-center text-white">
            <Link to="/">
              <p className="px-2 text-sm font-serif">Home</p>
            </Link>
            <Link to="/">
              <p className="px-2 text-sm font-serif">About</p>
            </Link>
            <Link to="/">
              <p className="px-2 text-sm font-serif">Contact Us</p>
            </Link>
          </div>
          {/* register,login */}
          <div className="flex flex-row font-serif">
            {/* register/login */}
            {!login && (
              <div className="hidden sm:flex flex-row h-full ">
                <div className="flex items-center jusify-center text-[#44DBBD] px-1">
                  <VscAccount className="text-xl"></VscAccount>
                </div>
                <Link
                  to="/login"
                  className=" py-1 text-sm rounded-none md:px-1 md:py-1 text-[#44DBBD]"
                >
                  <p className="font-serif">Login</p>
                </Link>
              </div>
            )}
            {/* profile picture */}
            {login && (
              <div className="hidden sm:flex items-center jusify-center text-[#44DBBD]">
                <VscAccount className="text-xl"></VscAccount>
                <Link
                  to="/"
                  className=" py-1 text-sm rounded-none md:px-1 md:py-1 text-[#44DBBD]"
                  onClick={handleLogout}
                >
                  <p className="font-serif">Logout</p>
                </Link>
              </div>
            )}

            {/* cart */}
            <div className="flex justify-center items-center w-full">
              <Link to="/cart" className="text-sm text-[#44DBBD] px-2 font-serif">
                CART
              </Link>
              <Link
                to="/cart"
                className="text-base bg-[#44DBBD] text-white rounded-full w-[20px]  text-center"
              >
                {basket.length}
              </Link>
            </div>
          </div>
          <div className="flex h-5 items-center">
            <div
              className="flex sm:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-black/[0.8] "
              onClick={mobileMenuToggle}
            >
              {mobileMenu ? (
                <CgClose className=" text-xl text-white" />
              ) : (
                <SlMenu className="text-xl text-white" />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
