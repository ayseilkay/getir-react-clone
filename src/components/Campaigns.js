import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Banners from "api/banners.json";
import Title from "./ui/Title";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useWindowWidth } from "@react-hook/window-size";

function NextButton ({ onClick, className }) {
	return (
		<button className={` !text-purple-700 absolute top-1/2 -right-6 -translate-y-1/2`} onClick={onClick}>
			<IoIosArrowForward size={22} />
		</button>
	)
}
function PrevButton ({ onClick, className }) {
	return (
		<button className={` !text-purple-700 absolute top-1/2 -left-6 -translate-y-1/2`} onClick={onClick}>
			<IoIosArrowBack size={22} />
		</button>
	)
}

function Campaigns() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    arrows: true,
    nextArrow:<NextButton/>,
    prevArrow:<PrevButton/>,
    responsive:[
      {
        breakpoint:1280,
        settings:{
          slidesToShow:3
        }
      },
      {
        breakpoint:1024,
        settings:{
          slidesToShow:2,
          arrows:false
        }
      }
      ,
      {
        breakpoint:768,
        settings:{
          slidesToShow:1,
          arrows:false
        }
      }
    ]
  };
  const [banners, setBanner] = useState([]);
  const windowWidth = useWindowWidth();
  useEffect(() => {
    setBanner(Banners);
  }, []);
  return (
    <div className="container mx-auto pt-8">
      <div className="hidden md:block">
      <Title children="Kampanyalar"/>
      </div>
      <Slider className="h-full hidden sm:block md:-mx-2" {...settings}>
       {banners.length && banners.map((banner,index)=>(
         <div key={index} className="pr-4">
           <img
            className="w-full object-cover md:rounded-lg outline-none"
            src={banner.image}
          ></img>
         </div>
       ))}
      </Slider>
    </div>
  );
}

export default Campaigns;
