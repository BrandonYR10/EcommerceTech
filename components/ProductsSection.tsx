// *********************
// Role of the component: products section intended to be on the home page
// Name of the component: ProductsSection.tsx
// Developer: 
// Version: 1.0
// Component call: <ProductsSection slug={slug} />
// Input parameters: no input parameters
// Output: products grid
// *********************

import React from "react";
import ProductItem from "./ProductItem";
import Heading from "./Heading";

const ProductsSection = async () => {
  // sending API request for getting all products
  const data = await fetch("http://localhost:3001/api/products");
  const products = await data.json();
  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-600 border-t-4 border-white">
      <div className="max-w-screen-2xl mx-auto pt-20 px-4">
        <Heading title="PRODUCTOS DESTACADOS" />
        <div className="grid grid-cols-4 justify-items-center max-w-screen-2xl mx-auto py-10 gap-x-4 px-6 gap-y-8 max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 animate-slide-in-up">
          {products.map((product: Product) => (
            <ProductItem key={product.id} product={product} color="white" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
