import React from 'react'
import Slider from "react-slick";
function HeroSection() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      arrows:false,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (
    <div className='container mx-auto'>
        <Slider {...settings}>
          <div>
            <img src='https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg'></img>
          </div>
          <div>
            <img src='https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg'></img>
          </div>
          <div>
            <img src='https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg'></img>
          </div>
          <div>
            <img src='https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg'></img>
          </div>
         
        </Slider>
  </div>
  )
}

export default HeroSection