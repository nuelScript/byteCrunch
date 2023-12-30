import React from "react";
import Link from "next/link";
import { TbCurrencyNaira } from "react-icons/tb";
import Image from "next/image";

interface ProductProps {
  product: {
    image: string | string[];
    name: string;
    slug: string;
    price: number;
    details: string;
  };
}

const ProductComponent = ({ product }: ProductProps) => {
  return (
    <div>
      <Link href={`/product/${product.slug}`}>
        <div className="relative flex h-[480px] w-[350px] scale-100 cursor-pointer flex-col justify-between rounded-2xl bg-white drop-shadow-lg transition hover:scale-110">
          <Image
            src={product.image && product.image[0]}
            width={350}
            height={250}
            className="block h-[300px] scale-100 rounded-t-2xl bg-[#ebebeb] object-cover transition"
            alt={product.name}
          />
          <div className="flex h-[150px] w-full flex-col justify-between rounded-b-2xl bg-white px-4">
            <p className="pl-2 font-medium">{product.name}</p>
            <p className="pl-2">{product.details}</p>
            <div className="flex w-full justify-between rounded-b-2xl">
              <div className="mb-4 h-fit w-fit rounded-full border-2 border-solid border-black px-6 py-2 text-center hover:border-gray-500 hover:text-gray-500">
                <TbCurrencyNaira className="mb-0.5 inline" size={20} />
                {product.price}
              </div>
              <Link href={`/product/${product.slug}`}>
                <button
                  type="button"
                  className="h-fit w-fit rounded-full bg-[#F79327] px-5 py-2 text-center text-lg font-medium text-white hover:opacity-70"
                >
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductComponent;
