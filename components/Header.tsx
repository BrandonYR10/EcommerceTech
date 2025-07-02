// *********************
// Role of the component: Header component
// Name of the component: Header.tsx
// Developer: 
// Version: 1.0
// Component call: <Header />
// Input parameters: no input parameters
// Output: Header component
// *********************

"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import HeaderTop from "./HeaderTop";
import Image from "next/image";
import SearchInput from "./SearchInput";
import Link from "next/link";
import { FaBell } from "react-icons/fa6";

import CartElement from "./CartElement";
import HeartElement from "./HeartElement";
import { signOut, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { useWishlistStore } from "@/app/_zustand/wishlistStore";

const Header = () => {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const { wishlist, setWishlist, wishQuantity } = useWishlistStore();

  const handleLogout = () => {
    setTimeout(() => signOut(), 1000);
    toast.success("¡Sesión cerrada exitosamente!");
  };

  // getting all wishlist items by user id
  const getWishlistByUserId = async (id: string) => {
    const response = await fetch(`http://localhost:3001/api/wishlist/${id}`, {
      cache: "no-store",
    });
    const wishlist = await response.json();
    const productArray: {
      id: string;
      title: string;
      price: number;
      image: string;
      slug:string
      stockAvailabillity: number;
    }[] = [];
    
    wishlist.map((item: any) => productArray.push({id: item?.product?.id, title: item?.product?.title, price: item?.product?.price, image: item?.product?.mainImage, slug: item?.product?.slug, stockAvailabillity: item?.product?.inStock}));
    
    setWishlist(productArray);
  };

  // getting user by email so I can get his user id
  const getUserByEmail = async () => {
    if (session?.user?.email) {
      
      fetch(`http://localhost:3001/api/users/email/${session?.user?.email}`, {
        cache: "no-store",
      })
        .then((response) => response.json())
        .then((data) => {
          getWishlistByUserId(data?.id);
        });
    }
  };

  useEffect(() => {
    getUserByEmail();
  }, [session?.user?.email, wishlist.length]);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 animate-slide-in-down">
      <HeaderTop />
      {pathname.startsWith("/admin") === false && (
        <div className="h-32 bg-white flex items-center justify-between px-6 lg:px-16 max-w-screen-2xl mx-auto max-lg:flex-col max-lg:gap-y-4 max-lg:justify-center max-lg:h-auto max-lg:py-6">
          <Link href="/" className="animate-fade-in">
            <div className="text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300 cursor-pointer transform hover:scale-105">
              tiendaShopTest
            </div>
          </Link>
          <div className="animate-slide-in-up animation-delay-200">
            <SearchInput />
          </div>
          <div className="flex gap-x-6 lg:gap-x-10 animate-slide-in-right animation-delay-400">
            <HeartElement wishQuantity={wishQuantity} />
            <CartElement />
          </div>
        </div>
      )}
      {pathname.startsWith("/admin") === true && (
        <div className="flex justify-between h-24 lg:h-32 bg-white items-center px-4 lg:px-16 max-w-screen-2xl mx-auto animate-fade-in">
          <Link href="/">
            <div className="text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300 cursor-pointer transform hover:scale-105">
              tiendaShopTest
            </div>
          </Link>
          <div className="flex gap-x-3 lg:gap-x-5 items-center">
            <FaBell className="text-lg lg:text-xl hover:text-blue-600 transition-colors duration-200 cursor-pointer" />
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="w-8 lg:w-10">
                <Image
                  src="/randomuser.jpg"
                  alt="random profile photo"
                  width={30}
                  height={30}
                  className="w-full h-full rounded-full hover:ring-2 hover:ring-blue-500 transition-all duration-200"
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href="/admin">Panel de Control</Link>
                </li>
                <li>
                  <a>Perfil</a>
                </li>
                <li onClick={handleLogout}>
                  <a href="#">Cerrar Sesión</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
