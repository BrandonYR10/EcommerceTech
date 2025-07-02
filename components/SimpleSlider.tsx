// *********************
// Role of the component: Simple slider component
// Name of the component: SimpleSlider.tsx
// Developer: 
// Version: 1.0
// Component call: <SimpleSlider />
// Input parameters: no input parameters
// Output: Simple slider component
// *********************

"use client";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        dots: false,
        arrows: false,
      }
    }
  ]
};

function SimpleSlider() {
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 py-8">
      <Slider {...settings}>
        <div className="h-[500px] max-lg:h-[400px] max-md:h-[300px] max-sm:h-[250px] relative overflow-hidden rounded-xl">
          <div className="absolute left-[50%] translate-x-[-50%] translate-y-[30%] h-full text-center max-lg:translate-y-[25%] max-md:translate-y-[20%] max-sm:translate-y-[15%] z-10 animate-slide-in-up">
            <p className="text-xl font-light underline underline-offset-4 mb-5 max-[1162px]:text-lg max-lg:mb-2 max-md:text-base max-md:mb-1 text-white drop-shadow-lg">
              Auriculares
            </p>
            <h2 className="text-5xl font-light mb-5 max-[1162px]:text-4xl max-lg:mb-2 max-lg:text-3xl max-md:text-2xl max-md:mb-1 text-white drop-shadow-lg">
              Para hacer vibrar tu estado de ánimo
            </h2>
            <p className="mb-5 text-white text-lg font-medium max-[1162px]:text-base max-lg:mb-2 max-lg:text-sm max-md:mb-1 drop-shadow-lg">
              Ajusta tu experiencia auditiva usando el control deslizante de volumen 
              para adaptar la intensidad del sonido a tu preferencia.
            </p>
            <Link href="/shop" className="bg-custom-yellow btn w-52 h-14 text-black uppercase border border-black text-xl hover:bg-black hover:text-custom-yellow max-[1162px]:w-44 max-[1162px]:h-10 max-[1162px]:text-lg max-lg:text-base max-lg:w-36 max-md:text-sm max-md:w-32 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Comprar Ahora
            </Link>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-5"></div>
          <img src="/slider image 1.webp" alt="Auriculares" className="h-full w-full object-cover" />
        </div>
        
        <div className="h-[500px] max-lg:h-[400px] max-md:h-[300px] max-sm:h-[250px] relative overflow-hidden rounded-xl">
          <div className="absolute left-[50%] translate-x-[-50%] translate-y-[30%] h-full text-center max-lg:translate-y-[25%] max-md:translate-y-[20%] max-sm:translate-y-[15%] z-10 animate-slide-in-up">
            <p className="text-xl font-light underline underline-offset-4 mb-5 max-[1162px]:text-lg max-lg:mb-2 max-md:text-base max-md:mb-1 text-white drop-shadow-lg">
              Audífonos Inalámbricos
            </p>
            <h2 className="text-5xl font-light mb-5 max-[1162px]:text-4xl max-lg:mb-2 max-lg:text-3xl max-md:text-2xl max-md:mb-1 text-white drop-shadow-lg">
              Sin cables o sin hogar
            </h2>
            <p className="mb-5 text-white text-lg font-medium max-[1162px]:text-base max-lg:mb-2 max-lg:text-sm max-md:mb-1 drop-shadow-lg">
              Controla tu mundo de sonido sin problemas deslizando el volumen 
              a tu nivel perfecto.
            </p>
            <Link href="/shop" className="bg-custom-yellow btn w-52 h-14 text-black uppercase border border-black text-xl hover:bg-black hover:text-custom-yellow max-[1162px]:w-44 max-[1162px]:h-10 max-[1162px]:text-lg max-lg:text-base max-lg:w-36 max-md:text-sm max-md:w-32 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Comprar Ahora
            </Link>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-5"></div>
          <img src="/slider image 2.webp" alt="Audífonos Inalámbricos" className="h-full w-full object-cover" />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
