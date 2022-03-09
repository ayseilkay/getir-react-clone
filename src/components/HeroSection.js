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
    <div className='relative h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10'>
        <Slider {...settings}>
          <div>
            <img   className='w-full object-cover h-[500px] '  src='https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg'></img>
          </div>
          <div>
            <img className='w-full object-cover h-[500px]'  src='https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg'></img>
          </div>
          <div>
            <img className='w-full object-cover h-[500px]'  src='https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg'></img>
          </div>
          <div>
            <img className='w-full object-cover h-[500px]'  src='https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg'></img>
          </div>
         
        </Slider>
        <div className='container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20'>
              <div >
                <img src='https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg'>
                </img>
                <h3 className='mt-8 text-4xl font-semibold text-white'>Dakikalar içinde<br/> kapınızda</h3>
              </div>
              <div className='w-[400px] rounded-lg bg-gray-50 p-6'>
                   <h4 className='font-semibold text-primary-brand-color flex items-center justify-center text-2xl'>Giriş yap veya kayıt ol</h4>
              </div>
        </div>
  </div>
  )
}

export default HeroSection