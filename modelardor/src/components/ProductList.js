import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import TrendingCard from './TrendingCard';
import { fetchDataFromApi } from '../utils/api';
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner"
import Footer from './Footer';

const ProductList = () => {
    const {category} = useParams();
    const [productArray,setProductArray]=useState([]);
    const [pageNumber,setPageNumber] = useState(0);
    const [totalResults,setTotalResults] =useState(0);

    useEffect(()=>{
 
        fetchProductList();
    },[category])

    const fetchProductList=()=>{
        fetchDataFromApi(`products/list?country=in&lang=en&currentpage=${pageNumber}&pagesize=28&categories=${category}`).then((res)=>{
 
            setProductArray(res?.results);
            setTotalResults(res?.pagination?.totalNumberOfResults)
        })
    }
    const fetchMoreData=()=>{
        setPageNumber((pageNumber)=>{
            return pageNumber+1
        }) 
   
        fetchDataFromApi(`products/list?country=in&lang=en&currentpage=${pageNumber+1}&pagesize=28&categories=${category}`).then((res)=>{
            setProductArray(productArray.concat(res?.results));
        })
    }
  return (
    <>
    <div className='flex h-[calc(100%-200px)] mb-[3rem]'>
        {/* productList */}
        <div className='grow w-[calc(100%-240px)] h-full overflow-y-auto z-0'>
                <InfiniteScroll
                    dataLength={productArray.length}
                    next={fetchMoreData}
                    hasMore={productArray.length !== totalResults}
                    loader={<Spinner/>}
                > 
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5'>
                {productArray.map((Element,index)=>{
                    return <TrendingCard key={index} pic={Element?.images[0]?.url} code={Element.articles[0].code} name={Element.name} price={Element.price?.formattedValue} imageGallery={Element.galleryImages}/>
                })}
                </div>
                </InfiniteScroll>
            </div>
        
    </div>
    <Footer/>
    </>
  )
}

export default ProductList
