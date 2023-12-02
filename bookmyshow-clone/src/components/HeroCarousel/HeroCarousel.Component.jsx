import axios from '../../axios';
import React, { useEffect, useState } from 'react'
import HeroSlider from 'react-slick';
import { API_KEY , imageUrl } from '../../constants/constants';
import { NextArrow, PrevArrow } from './Arrows.Component';


const HeroCarousel = () => {
  const [images , setImages] = useState([]);
  useEffect(()=>{
    axios.get(`/discover/tv?api_key=${API_KEY}&with_networks=213`).then((response)=>{
      setImages(response.data.results[2]);
    })
  })


  const settingsLg = {
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
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 4,
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
            
            <div className='w-full h-56 md:h-80 py-3 '>
              <img src={`${imageUrl+images.backdrop_path}`} alt="Hero Banner" className='w-full h-full rounded-md object-cover' />
            </div>
         
        }
      </HeroSlider>
    </div>
    <div className='hidden lg:block'>
      <HeroSlider {...settingsLg}>
        {
            
            <div className='w-full h-96 px-2 py-2 '>
              <img src={`${imageUrl+images.backdrop_path}`} alt="Hero Banner" className='w-full h-full rounded-md object-cover' />
            </div>
         
        }
      </HeroSlider>
    </div>
  </>
}

export default HeroCarousel;