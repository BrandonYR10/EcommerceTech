// *********************
// Role of the component: Signup to the newsletter component by leaving email adress
// Name of the component: Newsletter.tsx
// Developer: 
// Version: 1.0
// Component call: <Newsletter />
// Input parameters: no input parameters
// Output: Newsletter signup component
// *********************

import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-gray-50 py-16 animate-slide-in-up">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 max-md:text-2xl max-sm:text-xl">
            Suscríbete a nuestro boletín
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-md:text-base max-sm:text-sm">
            <span className="inline sm:block lg:inline xl:block max-sm:text-xl">
              Recibe las últimas ofertas y novedades en tu correo.
            </span>
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex gap-3 max-sm:flex-col">
              <input
                type="email"
                placeholder="Tu dirección de correo electrónico"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent max-sm:w-full"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl max-sm:w-full"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
