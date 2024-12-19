import React from 'react'
import Div from '../Div'
import Slider from "react-slick";
import PortfolioItem from "@/Frontend/Components/Portfolio/PortfolioItem";

export default function LogoList({partner_data}) {
    const logos = partner_data.logos
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0",
      slidesToShow: 5,
      speed: 500,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
              },
          },
      ],
  };
  return (
    <>
    {/* <Div className="cs-partner_logo_wrap ">
      {logos.map((partnerLogo, index)=><div className="cs-partner_logo flex-wrap" key={index}><img src={partnerLogo} alt="Partner" /></div>)}
    </Div> */}
      <Slider {...settings} className="cs-slider cs-style3 cs-gap-24">
              {logos.map((partnerLogo, index) => (
                  <Div key={index}>
                    <div className="cs-partner_logo flex-wrap bg-white px-4 py-2 rounded d-flex justify-content-center align-items-center" style={{aspectRatio:'16/4'}} key={index}><img src={partnerLogo} alt="Partner" /></div>
                  </Div>
              ))}
      </Slider> 
    </>
  )
}
