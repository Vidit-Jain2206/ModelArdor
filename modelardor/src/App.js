
import React from 'react';
import { AppContext } from './context/ContextAPI';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./components/Home"
import Category from "./components/Category"
import ProductDetails from "./components/ProductDetails"
import SideNavBar from './components/SideNavBar';
import Login from "./components/Login"
import ProductList from "./components/ProductList"
import Cart from './components/Cart';
function App() {
  return (
    <AppContext>
    <BrowserRouter>
      <div className="flex flex-col h-full">
        <SideNavBar/>
        <Header />
        <Category/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/product/:code' element={<ProductDetails />} />
          <Route path='/category/:category' element={<ProductList />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  </AppContext>
  );
}

export default App;
