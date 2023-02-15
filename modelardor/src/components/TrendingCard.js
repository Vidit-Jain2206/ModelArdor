import React from 'react'
import { useContext } from 'react'
import {Context} from "../context/ContextAPI"
import { Link } from 'react-router-dom';

function TrendingCard(props) {
  const {setImageGallery} = useContext(Context);
  const handleOnClick=()=>{
    setImageGallery(props?.imageGallery)
  }
  return (
    <Link to={`/product/${props.code}`} className='font-sans flex-flex-col shadow-xl hover:shadow-lg hover:shadow-[#44DBBD] transition-all duration-300' onClick={handleOnClick}>
      <img src={props.pic} alt="" className='max-height-3/4 px-4 py-3 md:px-[5rem] lg:px-4'/>
      <div className="flex flex-col mt-[0.5rem]">
        <h4 className='font-semibold px-4 py-1 text-[1rem]'>{props.name}</h4>
        <p className='px-4 py-2'>{props.price}</p>
      </div>
    </Link>
  )
}

export default TrendingCard
