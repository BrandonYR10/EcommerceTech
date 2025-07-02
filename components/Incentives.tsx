// *********************
// Role of the component: Incentives on home page like Free Shipping, 24/7 Customer Support, Fast Shopping Cart...
// Name of the component: Incentives.tsx
// Developer: 
// Version: 1.0
// Component call: <Incentives />
// Input parameters: no input parameters
// Output: Incentives section
// *********************

import { incentives } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const Incentives = () => {
  return (
    <div className="bg-gray-50 py-16">
      <h2 className='text-3xl lg:text-4xl text-center py-5 font-bold text-gray-900 animate-slide-in-up'>Mejores Beneficios para el Cliente</h2>
    <div className="mx-auto max-w-screen-2xl py-10 px-4 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
        {incentives.map((incentive, index) => (
          <div 
            key={incentive.name} 
            className="text-center sm:flex sm:text-left lg:block lg:text-center hover-lift p-6 rounded-lg bg-white shadow-sm animate-slide-in-up"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="sm:flex-shrink-0">
              <div className="flow-root">
                <Image 
                  width={48} 
                  height={48} 
                  className="mx-auto transform hover:scale-110 transition-transform duration-300" 
                  src={incentive.imageSrc} 
                  alt={incentive.name} 
                />
              </div>
            </div>
            <div className="mt-3 sm:ml-3 sm:mt-0 lg:ml-0 lg:mt-3">
              <h3 className="text-sm font-medium text-gray-900 lg:text-base">{incentive.name}</h3>
              <p className="mt-2 text-sm text-gray-500 lg:text-base">{incentive.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Incentives
