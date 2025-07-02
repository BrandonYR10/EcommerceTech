// *********************
// Role of the component: Cart icon and quantity that will be located in the header
// Name of the component: CartElement.tsx
// Developer: 
// Version: 1.0
// Component call: <CartElement />
// Input parameters: no input parameters
// Output: Cart icon and quantity
// *********************

"use client";
import Link from 'next/link'
import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { useProductStore } from "@/app/_zustand/store";

const CartElement = () => {
    const { allQuantity } = useProductStore();
  return (
    <div className="relative group">
            <Link href="/cart" className="flex items-center">
              <FaCartShopping className="text-xl lg:text-2xl text-black group-hover:text-blue-600 transition-colors duration-200" />
              <span className="block w-5 h-5 lg:w-6 lg:h-6 bg-blue-600 text-white rounded-full flex justify-center items-center absolute top-[-12px] lg:top-[-17px] right-[-18px] lg:right-[-22px] text-xs lg:text-sm font-medium animate-bounce-in">
                { allQuantity }
              </span>
            </Link>
          </div>
  )
}

export default CartElement
