// *********************
// Role of the component: Wishlist icon with quantity located in the header
// Name of the component: HeartElement.tsx
// Developer: 
// Version: 1.0
// Component call: <HeartElement />
// Input parameters: no input parameters
// Output: wishlist icon with quantity
// *********************

"use client";
import { useWishlistStore } from "@/app/_zustand/wishlistStore";
import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa6";

const HeartElement = ({wishQuantity}: {wishQuantity: number}) => {
  return (
    <div className="relative group">
      <Link href="/wishlist" className="flex items-center">
        <FaHeart className="text-xl lg:text-2xl text-black group-hover:text-red-500 transition-colors duration-200" />
        <span className="block w-5 h-5 lg:w-6 lg:h-6 font-bold bg-blue-600 text-white rounded-full flex justify-center items-center absolute top-[-12px] lg:top-[-17px] right-[-18px] lg:right-[-22px] text-xs lg:text-sm animate-bounce-in">
          { wishQuantity }
        </span>
      </Link>
    </div>
  );
};

export default HeartElement;
