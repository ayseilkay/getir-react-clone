import React from "react";
import Menu from "./ui/Menu";
import {FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa'
import {FiGlobe} from 'react-icons/fi'

function Footer() {
  const menus = [
    {
      title: "Getir'i keşfedin",
      items: [
        {
          title: "Hakkımızda"
        },
        {
          title: "Kariyer"
        },
        {
          title: "Teknoloji Kariyerleri"
        },
        {
          title: "İletişim"
        },
        {
          title: "COVID-19 Duyuru"
        },
        {
          title: "Sosyal Sorumluluk Projeleri"
        },
      ]
    },
    {
      title: "Yardıma mı ihtiyacınız var?",
      items: [
        {
          title: "Sıkça Sorulan Sorular"
        },
        {
          title: "Kişisel Verilerin Korunması"
        },
        {
          title: "Gizlilik Politikası"
        },
        {
          title: "Kullanım Koşulları"
        },
        {
          title: "Çerez Politikası"
        },
      ]
    },{
      title: "İş Ortağımız Olun",
      items: [
        {
          title: "Bayimiz Olun"
        },
        {
          title: "Deponuzu Kiralayın"
        },
        {
          title: "GetirYemek Restoranı Olun"
        },
        {
          title: "GetirÇarşı İşletmesi Olun"
        }
      ]
    }
  
  ];

  return (
    <div className=" bg-white mt-10">
      <div className="container mx-auto ">
        <div className="grid grid-cols-4 pt-10">
          <section>
            
            <nav className="grid gap-y-4">
            <h6 className="text-primary-brand-color font-normal text-lg">
              Getir'i indirin!
            </h6>
              <a href="#" className="transition-all transform hover:scale-105">
                <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
              </a>
              <a href="#" className="transition-all transform hover:scale-105">
                <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
              </a>
              <a href="#" className="transition-all transform hover:scale-105">
                <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
              </a>
            </nav>
          </section>
            { menus.map((menu,index)=>
              <Menu {...menu} key={index} />
            )}
        </div>
        <div className="flex justify-between items-center border-t border-gray-100 mt-6 py-8 ">
          <div className="text-x13 text-gray-700 flex gap-x-8">
          &copy; 2022 Getir
          <a href="#" className="text-primary-brand-color hover:underline relative before:w-1 before:h-1 before:bg-primary-brand-color before:absolute before:-left-3  before:top-1/2 before:-translate-y-1/2 before:rounded-full">
          Bilgi Toplumu Hizmetleri
          </a>
          </div>
          <nav className="flex gap-x-8">
            <a href="#" className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:text-primary-brand-color hover:bg-primary-brand-color hover:bg-opacity-10 flex items-center justify-center">
              <FaFacebook size={24}/>
            </a>
            <a href="#" className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:text-primary-brand-color hover:bg-primary-brand-color hover:bg-opacity-10 flex items-center justify-center">
            <FaTwitter size={24}/>
            </a>
            <a href="#" className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:text-primary-brand-color hover:bg-primary-brand-color hover:bg-opacity-10 flex items-center justify-center">
            <FaInstagram size={24}/>
            </a>
            <a href="#" className=" h-8 flex items-center text-x13 gap-x-2 rounded-lg border border-gray-100 p-2 text-gray-500  transition-colors hover:text-primary-brand-color hover:bg-primary-brand-color hover:bg-opacity-10 hover:border-transparent">
                <FiGlobe size={24}/>
                Türkçe (TR)
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Footer;
