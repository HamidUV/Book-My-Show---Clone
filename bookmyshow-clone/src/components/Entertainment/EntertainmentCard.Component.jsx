import React from 'react';

import Slider from "react-slick";


const EntertainmentCard = (props) => {
  return (
    <>
    <div className='w-full h-full rounded-lg'>
      <img src={props.src} alt="entertainment" className='w-full h-full rounded-lg' />
    </div>
    </>
  )
}

const EntertainmentCardSlider = () => {

  const EntertainmentImage = [
   
    'https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/adventure-collection-202010140844.png' ,
    'https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/adventure-collection-202010140844.png' ,
    // 'https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/adventure-collection-202010140844.png' 
  
  ] ;

  const settings = {
    dots:true,
    infinite: true,
    autoplay:true ,
    slidesToShow:5,
    slideToScroll:4,
    initialSlide:0,
    responsive:[
      {
        breakpoints:1024,
        settings:{
          slidesToShow:3,
          slideToScroll:2,
        }
      },
      {
        breakpoints:600,
        settings:{
          slidesToShow:3,
          slideToScroll:1,
          initialSlide:2,
        }
      },
      {
        breakpoints:480,
        settings:{
          slidesToShow:2,
          slideToScroll:1,

        }
      }
    ]
};

  return (
  <>
    <Slider {...settings}>
      {EntertainmentImage.map((image, index) => (
        <EntertainmentCard src={image} key={index} />
      ))}
    </Slider>
  </>
);

}


export default EntertainmentCardSlider  ;