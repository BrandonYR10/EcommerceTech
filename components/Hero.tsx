// *********************
// Role of the component: Classical hero component on home page
// Name of the component: Hero.tsx
// Developer: 
// Version: 1.0
// Component call: <Hero />
// Input parameters: no input parameters
// Output: Classical hero component with two columns on desktop and one column on smaller devices
// *********************

import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-[700px] w-full bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 max-lg:h-[900px] max-md:h-[750px] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-ping"></div>
      </div>
      
      <div className="grid grid-cols-3 items-center justify-items-center px-10 gap-x-10 max-w-screen-2xl mx-auto h-full max-lg:grid-cols-1 max-lg:py-10 max-lg:gap-y-10 relative z-10">
        <div className="flex flex-col gap-y-5 max-lg:order-last col-span-2 animate-fade-in">
          <h1 className="text-6xl text-white font-bold mb-3 max-xl:text-5xl max-md:text-4xl max-sm:text-3xl leading-tight animate-slide-in-left">
            EL PRODUCTO DEL FUTURO
          </h1>
          <p className="text-white max-sm:text-sm text-lg leading-relaxed animate-slide-in-left animation-delay-200">
            Descubre la tecnología más avanzada en electrónica. Productos innovadores 
            que transforman tu experiencia digital con calidad premium y diseño moderno.
          </p>
          <div className="flex gap-x-4 max-lg:flex-col max-lg:gap-y-3 animate-slide-in-left animation-delay-400">
            <button className="bg-white text-blue-600 font-bold px-12 py-4 max-lg:text-xl max-sm:text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-lg">
              COMPRAR AHORA
            </button>
            <button className="bg-transparent text-white font-bold px-12 py-4 max-lg:text-xl max-sm:text-lg border-2 border-white hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300 rounded-lg">
              SABER MÁS
            </button>
          </div>
        </div>
        
        <div className="col-span-1 max-lg:order-first animate-fade-in animation-delay-300">
          <div className="relative group">
            <Image
              src="/headphones 1.png"
              alt="Auriculares"
              width={400}
              height={400}
              className="relative z-10 transform group-hover:scale-110 transition-transform duration-300 max-lg:w-80 max-md:w-64 max-sm:w-48"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
