import React,{useState,useEffect} from "react";
import pic from "../shared/homepage_pic.jpeg";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import {fetchDataFromApi} from "../utils/api"
import TrendingCard from "./TrendingCard";
import NewArrivalCategoryArrayButton from "./NewArrivalCategoryArrayButton";
import Footer from "./Footer";

function Home() {
  const [trendingArray,setTrendingArray] = useState([]);
  const[pageNumber ,setPageNumber] =useState(0);
  const[pageNumberArrivals ,setPageNumberArrivals] =useState(0);
  const[NewArrivalCategory,setNewArrivalCategory] =useState("ladies_all");
  const[CategoryArray,setCategoryArray] =useState([]);
  const[NewArrivalArray,setNewArrivalArray] =useState([]);

  useEffect(() => {
   fetchTrendingArray("men_all");
  },[pageNumber])

  useEffect(() => {
    fetchCategoryArray();
   },[])

   useEffect(() => {
    fetchNewArrivalCategoryProduct(NewArrivalCategory);
   },[NewArrivalCategory,pageNumberArrivals])

  const fetchCategoryArray=()=>{
    fetchDataFromApi(`categories/list?lang=en&country=in`).then((res)=>{
      setCategoryArray(res);
    })
  }

  const handleOnClick=(category)=>{
    setNewArrivalCategory(category)
  }

  const fetchNewArrivalCategoryProduct=(category)=>{
    fetchDataFromApi(`products/list?country=in&lang=en&currentpage=${pageNumberArrivals+1}&pagesize=4&categories=${category}`).then((res)=>{
      setNewArrivalArray(res?.results);
    })
  }
 
  const fetchTrendingArray=(category)=>{
    fetchDataFromApi(`products/list?country=in&lang=en&currentpage=${pageNumber}&pagesize=4&categories=${category}`).then((res)=>{
      setTrendingArray(res?.results);
    })
  }

  const handleLeftArrow=()=>{
    setPageNumber((pageNumber)=>{return pageNumber-1});
  }

  const handleRightArrow=()=>{
    setPageNumber((pageNumber)=>{return pageNumber+1});
  }

  const handleLeftArrivalsArrow=()=>{
    setPageNumberArrivals((pageNumberArrivals)=>{return pageNumberArrivals-1});
  }

  const handleRighArrivalstArrow=()=>{
    setPageNumberArrivals((pageNumberArrivals)=>{return pageNumberArrivals+1});
  }
  
  

  return (
    <>
    <div className="flex flex-col h-[calc(100% - 200px)] mt-[27px] min-[420px]:mt-[0px] mb-[3rem]">
      {/* home */}
      <div className="relative">
        <img
          src={pic}
          alt=""
          className="h-[calc(100% - 200px)] w-full relative"
        />

        <div className="absolute top-1/3 left-1/4 xl:top-1/3 xl:left-[30%] sm:top-1/3 sm:left-1/3  md:top-[12rem] md:left-1/3 lg:top-[18rem] lg:left-[20rem] flex flex-col bg-[#7d7b7b8a] justify-center items-center max-[640px]:w-1/2 ">
          <div>
            <h1 className="xl:text-[4rem] xl:mx-7 xl:my-5 sm:mx-5 sm:my-3 sm:text-3xl mx-2 text-lg my-3 font-bold text-white font-serif ">
              FALL & WINTER
            </h1>
          </div>

          <div className="xl:h-[70px] flex justify-center items-center ">
            <Link
              to="/category/men_all"
              className="bg-[#44DBBD] xl:px-[4rem] xl:py-2  xl:h-[40px] xl:text-xl sm:px-[2rem] sm:py-1 font-serif sm:text-lg py-[0.1rem] mb-2 px-3 text-sm   hover:text-black hover:bg-white transition-all duration-200 ease-in"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* about */}
      <div
        className="flex justify-center items-center"
        style={{ background: "linear-gradient(54deg,white,#5dd1ba63)" }}
      >
        <div className="my-[3rem] w-2/3">
          <h1 className="text-2xl text-center underline sm:text-3xl font-serif md:text-[2rem] lg:text-[2.4rem]">
            About
          </h1>
          <p className="text-center text-sm mt-[1rem] sm:text-base md:text-[1.25rem] lg:text-[1.2rem] font-serif">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            voluptatibus non commodi, aspernatur ab blanditiis tempora quidem
            aperiam inventore neque, eius facilis quo nobis ea quos qui omnis
            magnam temporibus. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Doloribus nemo ex unde maiores ducimus
            perspiciatis asperiores quam voluptate in! Ipsum dolorum vero illum
            numquam repudiandae molestiae voluptatem id laudantium labore!
          </p>
        </div>
      </div>

      {/* trending */}

      <div className="flex flex-col mt-[2rem] w-11/12 mb-[3rem]">
        <h3 className="text-start font-bold text-[1.4rem] md:text-xl italic md:pl-[4rem] lg:pl-[8.5rem] sm:text-2xl md:text-[1.5rem] lg:text-[2rem]">
          Trending Styles
        </h3>

        {/* designs */}
        <div className="flex w-full justify-between items-center md:pl-[4rem] lg:pl-[8.5rem] mt-[2rem] border-red-100">
          {/* left arrow key */}
          <div className="">
            {pageNumber!==0 && 
            <BsArrowLeft className="text-lg md:text-xl xl:text-2xl pointer "  onClick={handleLeftArrow}></BsArrowLeft>}
          </div>
          
          {/* designs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
            {trendingArray.map((Element,index)=>{
              return <TrendingCard key={index} pic={Element?.images[0]?.url} code={Element.articles[0].code} name={Element.name} price={Element.price?.formattedValue} imageGallery={Element.galleryImages}/>
            })}
          </div>

          {/* right arrow key */}
          <div>
            {pageNumber!==10 &&
            <BsArrowRight className="text-lg md:text-xl xl:text-2xl pointer" onClick={handleRightArrow}></BsArrowRight>}
          </div>
        </div>
      </div>

      {/* New Arrivals */}

      <div className="flex flex-col w-11/12">
        <h3 className="text-start font-bold text-[1.4rem] md:text-xl italic md:pl-[4rem] lg:pl-[8.5rem] sm:text-2xl md:text-[1.5rem] lg:text-[2rem]">New Arrivals</h3>
        {/* buttons */}
        <div className="md:pl-[3.5rem] lg:pl-[8rem] flex flex-wrap mt-[1rem]">
          {CategoryArray.map((Element,index)=>{
            return (Element.tagCodes.length!==0 &&  <NewArrivalCategoryArrayButton key={index} name={Element?.CatName} code={Element?.tagCodes[0]} action={()=>handleOnClick(Element?.tagCodes[0])} className={NewArrivalCategory === Element?.tagCodes[0]?" bg-red-600 text-white border-[#e50010]":""}/>)
          })}
        </div>

        {/* designs */}
        <div className="flex w-full justify-between items-center md:pl-[4rem] lg:pl-[8.5rem] mt-[2rem] border-red-100">
          {/* left arrow key */}
          <div className="">
            {pageNumberArrivals!==0 && 
            <BsArrowLeft className="text-lg md:text-xl xl:text-2xl pointer "  onClick={handleLeftArrivalsArrow}></BsArrowLeft>}
          </div>
          
          {/* designs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
            {NewArrivalArray.map((Element,index)=>{
              return <TrendingCard key={index} pic={Element?.images[0]?.url} code={Element.articles[0].code} name={Element.name} price={Element.price?.formattedValue} imageGallery={Element?.galleryImages}/>
            })}
          </div>

          {/* right arrow key */}
          <div>
            {pageNumberArrivals!==10 &&
            <BsArrowRight className="text-lg md:text-xl xl:text-2xl pointer" onClick={handleRighArrivalstArrow}></BsArrowRight>}
          </div>
        </div>
      </div>

      {/* contactUs */}
     
    </div>
    <Footer/>
    </>
  );
}

export default Home;
