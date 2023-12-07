import axios from '../../axios';
import React, { useEffect, useState } from 'react'
import HeroSlider from 'react-slick';
import { API_KEY , imageUrl } from '../../constants/constants';
import { NextArrow, PrevArrow } from './Arrows.Component';


const HeroCarousel = () => {
  const [images , setImages] = useState([]);
  useEffect(()=>{
    axios.get(`/discover/tv?api_key=${API_KEY}&with_networks=213`).then((response)=>{
      setImages(response.data.results);
    })
  })


  const settingsLg = {
      dots:true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay : true,
      autoplaySpeed : 2000,
      cssEase : "linear",
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };

   const settings = {
      dots:true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay : true,
      autoplaySpeed : 2000,
      cssEase : "linear",
      nextArrow: <NextArrow /> ,
      prevArrow: <PrevArrow /> ,
    }; 
  return <>

    <div className='lg:hidden'>
      <HeroSlider {...settings}>
        {
            images.map((image , index)=>(
            <div className='w-full h-56 md:h-80 py-3 ' key={index}>
              <img src={`${imageUrl+image.backdrop_path}`} alt="Hero Banner" className='w-full h-full rounded-md object-cover' />
            </div>
         
       )) }
      </HeroSlider>
    </div>
    <div className='hidden lg:block'>
      <HeroSlider {...settingsLg}>
        {
            images.map((image , index)=>(
            <div className='w-full h-96 px-2 py-2' key={index}>
              <img src={`${imageUrl+image.backdrop_path}`} alt="Hero Banner" className='w-full h-full rounded-md object-cover' />
              
            </div>
)
        )} 
      </HeroSlider>
    </div>
  </>
}

export default HeroCarousel;