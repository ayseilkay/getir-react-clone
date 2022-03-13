import React from 'react'

function MobileApp() {
  return (
    <div className='container mx-auto flex justify-between items-center bg-primary-brand-color bg-mobile-app  rounded-lg my-6'>
      <div className='flex flex-col gap-y-3 p-10'>
        <h3 className='text-white text-2xl font-bold leading-9 tracking-tight'>Getir'i indirin!</h3>
        <p className='text-white text-xl tracking-wide'>İstediğiniz ürünleri dakikalar içinde kapınıza<br/> getirelim.</p>
        <nav className='flex pt-8 gap-x-2'>
          <a href='#'className='transition-all transform hover:scale-105'>
            <img src='https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg'/>
          </a>
          <a href='#'className='transition-all transform hover:scale-105'>
            <img src='https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg'/>
          </a>
          <a href='#'className='transition-all transform hover:scale-105'>
            <img src='https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg'/>
          </a>
        </nav>
      </div>
      <picture className='pt-6 object-contain'>
          <img src='https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png'/>
      </picture>
    </div>
  )
}

export default MobileApp