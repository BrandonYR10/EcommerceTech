// *********************
// Role of the component: Component that displays current page location in the application 
// Name of the component: Breadcrumb.tsx
// Developer: 
// Version: 1.0
// Component call: <Breadcrumb />
// Input parameters: No input parameters
// Output: Page location in the application
// *********************

import Link from "next/link";
import React from "react";
import { FaHouse } from "react-icons/fa6";

const Breadcrumb = () => {
  return (
    <div className="text-lg breadcrumbs pb-10 py-5 max-sm:text-base animate-slide-in-up">
      <ul className="flex flex-wrap items-center gap-2">
        <li className="flex items-center">
          <Link href="/" className="flex items-center hover:text-blue-600 transition-colors duration-200">
            <FaHouse className="mr-2" />
            <span className="max-sm:hidden">Inicio</span>
          </Link>
        </li>
        <li className="flex items-center">
          <Link href="/shop" className="hover:text-blue-600 transition-colors duration-200">
            Tienda
          </Link>
        </li>
        <li className="flex items-center">
          <Link href="/shop" className="hover:text-blue-600 transition-colors duration-200">
            Todos los productos
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
