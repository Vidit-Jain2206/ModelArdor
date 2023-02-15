import React,{useContext, useState,useEffect} from 'react'
import {Context} from "../context/ContextAPI"
import BasketItemsCard from './BasketItemsCard';
import Footer from './Footer';
import Confetti from "react-confetti";

const Cart = () => {
    const {basket,login,setBasket} = useContext(Context);
    const [price,setPrice] = useState(0);
    const[orderPlaced,setOrderPlaced]= useState(false);
    
    useEffect(()=>{
        calculatePrice();
    },[basket])

    const calculatePrice=()=>{
        let price1=0;
        for (let index = 0; index < basket.length; index++) {
            let element = basket[index];
            price1+=element.qty*element.price;
        }
        setPrice(price1);
    }
    const orderPlacedbutton=()=>{
        if(!login){
            alert("Please Login")
        }
        else{
            let temp=[];
            setOrderPlaced(true);
            setBasket(temp)
        }
    } 

    
  return (
    <>
    <div className='grid grid-cols-1 lg:grid-cols-3 group mt-[3rem] mb-[3rem] font-serif'>
        {orderPlaced && <Confetti/>}
        {orderPlaced && <div className='container xl:ml-[9rem] col-span-2'>
            <h1 className='text-3xl xl:px-4 py-2 '>Order Placed</h1>
            </div>}
        {/* basketItems   */}
        { !orderPlaced && basket.length!==0 && <div className='container xl:ml-[9rem] col-span-2'>
            <h1 className='text-3xl xl:px-4 py-2'>Cart Items</h1>
            <div className="grid grid-cols-1 gap-2 ">
            {basket.map((Element,index)=>{
                return <BasketItemsCard key={index} pic={Element.pic} name={Element.name} price={Element.price} qty={Element.qty} code={Element.code}/>
            })}
            </div>
        </div>}

        {!orderPlaced && basket.length===0 && <h1 className='col-span-2 text-3xl text-center'>Cart Is Empty</h1>}

        {/* summary */}

        <div className='flex flex-col w-[70%] shadow-2xl shadow-[#44DBBD] rounded-xl ml-[3rem] md:ml-[0rem] mt-[2rem] max-h-[270px]'>
            <h2 className='text-xl font-semibold px-3 py-3'>Summary</h2>
            <table className='border-separate border-spacing-2'>
                <tbody>
                <tr className='mt-[1rem]'>
                    <td className='text-lg '>Total</td>
                    <td>Rs. {price}</td>
                </tr>
                <tr className='mt-[1rem]'>
                    <td className='text-lg '>Discount</td>
                    <td>Rs. 0</td>
                </tr>
                <hr className='h-[2px] bg-black' />
                <tr className='mt-[1rem]'>
                    <td className='text-lg '>SubTotal</td>
                    <td>Rs. {price}</td>
                </tr>
                </tbody>
            </table>

            <button className='px-4 py-1 mt-[1rem] ml-[1rem] bg-[#44DBBD] border-2 mb-[1.5rem] border-[#44DBBD] w-[90%] hover:bg-white' onClick={orderPlacedbutton}>Proceed</button>
            {orderPlaced && login && alert("Order Placed Successfully")}
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Cart
