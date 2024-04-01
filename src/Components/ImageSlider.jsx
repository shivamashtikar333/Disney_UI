import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft,HiChevronRight } from 'react-icons/hi2'


function ImageSlider() {

   const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/'
    const [movieList, setMovieList] = useState([])

    const elementRef = useRef(null);

   

useEffect(()=>{
   getTrending();
},[])

const sliderRight = () => {
    elementRef.current.scrollLeft += 800;
};

const sliderLeft = () => {
    elementRef.current.scrollLeft -= 800;
};

const getTrending = ()=>{
    GlobalApi.getTrendingMovies.then((resposnse)=>{
        // console.log(resposnse.data.results)
        setMovieList(resposnse.data.results)
    }).catch((e)=>{
        console.log(e)
    })
}


  return (
   
    <div>
    <HiChevronLeft
    className='hidden md:block text-white text-[35px] absolute mx-8 mt-[205px] cursor-pointer z-[1]'
    onClick={() => elementRef.current && sliderLeft()}
/>
<HiChevronRight
    className='hidden md:block text-white text-[35px] absolute mx-8 mt-[205px] cursor-pointer right-0 z-[1]'
    onClick={() => elementRef.current && sliderRight()}
/>
   
<div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none cursor-pointer hover:scale-95 transition-all duration-100 ease-in  z-0 scroll-smooth ' ref={elementRef}>
    {movieList.map((item,index)=>(
        <img key={index} src={IMAGE_BASE_URL+item.backdrop_path} className='min-w-full md:h-[410px] object-cover object-left-top mr-7 rounded-lg border-2 border-gray-300 hover:border-4 hover:border-blue-500 transition-border duration-100 ease-in shadow-xl shadow-black'/>
        ))}
</div>
    
   </div>
  
  )
}

export default ImageSlider