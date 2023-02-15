import React, { useContext, useEffect, useState } from 'react'
import { Context } from "../context/ContextAPI"
import { useParams } from 'react-router-dom';
import { fetchDataFromApi } from '../utils/api';
import { BsArrowLeft} from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import SliderButton from './SliderButton';
import { BsHandbagFill } from "react-icons/bs";
import Footer from './Footer';

function ProductDetails() {
  const { imageGallery ,setBasket} = useContext(Context);
  const [qty,setQty] =useState("");
  const { code } = useParams();
  const [productDetails, setProductDetails] = useState({});
  const [index, setindex] = useState(0);

  useEffect(() => {
    fetchProductDetails();
  }, [code])

  const fetchProductDetails = () => {
    fetchDataFromApi(`products/detail?lang=en&country=in&productcode=${code}`).then((res) => {
      setProductDetails(res.product);
    })
  }
  const handleLeftArrow = () => {
    setindex((index) => { return index - 1 });
  }

  const handleRightArrow = () => {
    setindex((index) => { return index + 1 });
  }
  const handleSliderBar=(id)=>{
    setindex(id);
  }

  const handleOnChange=(event)=>{
    let num=event.target.value;
    setQty(num);
  }

  const addItemtoBag=()=>{
    setBasket((basket)=>{
      return [...basket,
        {
          "pic":imageGallery[0].url,
          "name": productDetails?.name,
          "price" : productDetails?.whitePrice?.price,
          "qty":qty,
          "code" : code
        }
      ]
    })
  }
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 mt-[3rem] mb-[3rem]'>
      {/* imageGallery */}
      <div className="flex flex-col w-[80%] lg:ml-[1rem]">
        <div className='flex flex-row items-center'>
          {/* left arrow key */}
          <div className="">
            {index!==0 && <BsArrowLeft className={"text-lg md:text-xl xl:text-2xl pointer"} onClick={handleLeftArrow}></BsArrowLeft>}
          </div>

          {/* img */}
          <img src={imageGallery[index]?.url} alt="" className='h-[500px] md:h-[650px]  ml-[1rem]min-w-[80%] rounded-full' />

          {/* right arrow key */}
          <div>
            {index !== imageGallery.length - 1 &&
              <BsArrowRight className="text-lg md:text-xl xl:text-2xl pointer" onClick={handleRightArrow}></BsArrowRight>}
          </div>


        </div>
        {/* Slider */}
        <div className='flex flex-row h-[50px] justify-center items-center w-full xl:w-[65%]'>
          {imageGallery.map((Element,id) => {
            return <SliderButton key={id} className={id === index ? " bg-[#ff0000]" : ""} action={()=>{handleSliderBar(id)}}/>
          })}
        </div>
      </div>

      {/* details */}

      <div className='flex flex-col max-h-[800px]  mt-[4rem] font-[serif]'>
        <h1 className='font-semibold text-xl ml-[1rem] lg:ml-[0rem]'>{productDetails?.name}</h1>
        <p className='mt-[2rem] ml-[1rem] lg:ml-[0rem] text-xl md:text-3xl' >Rs. {productDetails?.whitePrice?.price}</p>

        
        <p className='mt-[1rem] ml-[1rem] lg:ml-[0rem] text-xl'>Qty: <input type="number" className='w-[40px] bg-[#f5f5f5] border-[1px] border-[#000000] px-[2px]' onChange={handleOnChange} value={qty} placeholder='1'/></p>
        <button onClick={addItemtoBag} className=' ml-[1rem] lg:ml-[0rem] flex flex-row justify-center  border-[1px] border-[#44DBBD] items-center px-5 py-1 w-2/3 lg:w-[40%] bg-[#44DBBD] mt-[1rem]  hover:bg-white transition-colors duration-300'>
          <BsHandbagFill className='mr-[6px]'/>
          Add To Bag
        </button>
        

        {/* product description */}
        <div className='mt-[5rem]'>
        <h2 className='text-xl font-semibold ml-[1rem] lg:ml-[0rem]'>Product Details</h2>
        <p className='mt-[1rem] text-lg max-w-[400px] ml-[1rem] lg:ml-[0rem]'>{productDetails?.description}</p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default ProductDetails