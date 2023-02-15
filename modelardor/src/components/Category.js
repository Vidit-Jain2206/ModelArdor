import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import {Context} from "../context/ContextAPI";

function Category() {

  let categoriesArray=[
    {name:"Ladies",
    code:"ladies_all"},
    {name:"Divided",
    code:"ladies_divided"},
    {name:"Men",
    code:"men_all"},
    {name:"Baby",
    code:"kids_newbornbaby_viewall"},
    {name:"Kids",
    code:"kids_all"},
    {name:"Gift Guide",
    code:"giftguide"},
    
  ]
 
  const {setSelectCategories} =useContext(Context);

 
  const handleOnClick=(query)=>{
    setSelectCategories(query);
  }

  return (
    <div className='flex flex-row flex-wrap justify-center items-center h-[50px] font-serif bg-[#f5f5f5]'>
      {categoriesArray.map((Element,index)=>{
        return <Link to={`/category/${Element.code}`} key={index} className='list-none px-3 py-2 pointer text-base md:text-lg hover:text-[#44DBBD] hover:underline'  onClick={()=>handleOnClick(Element.code)}>{Element.name}</Link>
      })}
    </div>
  )
}

export default Category