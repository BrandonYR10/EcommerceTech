// *********************
// Role of the component: Product item component 
// Name of the component: ProductItem.tsx
// Developer: 
// Version: 1.0
// Component call: <ProductItem product={product} color={color} />
// Input parameters: { product: Product; color: string; }
// Output: Product item component that contains product image, title, link to the single product page, price, button...
// *********************

import Image from "next/image";
import React from "react";
import Link from "next/link";
import ProductItemRating from "./ProductItemRating";

const ProductItem = ({
  product,
  color,
}: {
  product: Product;
  color: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-y-2 hover-lift p-4 rounded-lg transition-all duration-300 animate-fade-in">
      <Link href={`/product/${product.slug}`} className="group">
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src={
              product.mainImage
                ? `/${product.mainImage}`
                : "/product_placeholder.jpg"
            }
            width="0"
            height="0"
            sizes="100vw"
            className="w-auto h-[300px] max-md:h-[250px] max-sm:h-[200px] object-cover group-hover:scale-110 transition-transform duration-300"
            alt={product?.title}
          />
        </div>
      </Link>
      <Link
        href={`/product/${product.slug}`}
        className={
          color === "black"
            ? `text-xl text-black font-normal mt-2 uppercase hover:text-blue-600 transition-colors duration-200 max-md:text-lg max-sm:text-base`
            : `text-xl text-white font-normal mt-2 uppercase hover:text-blue-300 transition-colors duration-200 max-md:text-lg max-sm:text-base`
        }
      >
        {product.title}
      </Link>
      <p
        className={
          color === "black"
            ? "text-lg text-black font-semibold max-md:text-base"
            : "text-lg text-white font-semibold max-md:text-base"
        }
      >
        ${product.price}
      </p>

      <ProductItemRating productRating={product?.rating} />
      <Link
        href={`/product/${product?.slug}`}
        className="block flex justify-center items-center w-full uppercase bg-white px-4 py-3 text-base border border-black border-gray-300 font-bold text-blue-600 shadow-sm hover:bg-black hover:bg-gray-100 focus:outline-none focus:ring-2 transform hover:scale-105 transition-all duration-300 rounded-lg max-md:text-sm max-sm:text-xs"
      >
        <p>Ver producto</p>
      </Link>
    </div>
  );
};

export default ProductItem;
