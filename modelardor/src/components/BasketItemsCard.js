import React,{useContext} from 'react'
import { AiFillDelete } from "react-icons/ai";
import {Context} from "../context/ContextAPI"

const BasketItemsCard = (props) => {
    const {basket,setBasket} = useContext(Context);
    const deleteAnItem=(id)=>{
        let temp=[];
        for (let index = 0; index < basket.length; index++) {
            const element = basket[index];
            if(element.code!==id){
                temp.push(element);
            }
        }
        setBasket(temp);
    }
   
  return (
    <>
   <div className='flex flex-row h-[150px]'>
    <img src={props.pic} alt="" className='h-full w-[150px] px-4 py-4 rounded-[2rem]'/>
    <div className='flex flex-col w-[80%] px-4 py-4 '>
        <h2 className='text-xl font-semibold mt-[0.5rem]'>{props.name}</h2>
        <p className=' mt-[0.5rem]'>Rs. {props.price}</p>
        <p className=' mt-[0.5rem]'>Qty : {props.qty}</p>
        <div className='flex flex-row items-center'>
            <span className='mr-[0.5rem]'>Remove</span>
            <AiFillDelete className="cursor-pointer" onClick={()=>{return deleteAnItem(props.code)}}/>
        </div>
    </div>
   </div>
   <hr className='h-[2px] w-[60%]' />
   </>
  )
}

export default BasketItemsCard
