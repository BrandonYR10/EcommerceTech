// *********************
// Role of the component: Footer component
// Name of the component: Footer.tsx
// Developer: 
// Version: 1.0
// Component call: <Footer />
// Input parameters: no input parameters
// Output: Footer component
// *********************

import { navigation } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import ComplaintBookButton from "./ComplaintBookButton";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-screen-2xl px-4 lg:px-8 py-12 lg:py-16">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        
        {/* Logo y navegación principal */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo */}
          <div className="lg:col-span-1">
            <div className="text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
              tiendaShopTest
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Tu tienda de confianza para productos electrónicos de calidad.
            </p>
          </div>

          {/* Navegación */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Ofertas */}
              <div className="animate-slide-in-up animation-delay-200">
                <h3 className="text-lg font-bold text-blue-600 mb-4">
                  Ofertas
                </h3>
                <ul className="space-y-3">
                  {navigation.sale.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sobre Nosotros */}
              <div className="animate-slide-in-up animation-delay-300">
                <h3 className="text-lg font-bold text-blue-600 mb-4">
                  Sobre Nosotros
                </h3>
                <ul className="space-y-3">
                  {navigation.about.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <ComplaintBookButton />
                </div>
              </div>

              {/* Comprar y Ayuda */}
              <div className="animate-slide-in-up animation-delay-400">
                <h3 className="text-lg font-bold text-blue-600 mb-4">
                  Comprar
                </h3>
                <ul className="space-y-3 mb-6">
                  {navigation.buy.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
                
                <h3 className="text-lg font-bold text-blue-600 mb-4">
                  Ayuda
                </h3>
                <ul className="space-y-3">
                  {navigation.help.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © 2024 tiendaShopTest. Todos los derechos reservados.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200">
                Términos de Uso
              </a>
              <a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
