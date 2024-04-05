"use client";

import ProductComponent from "@/components/product";
import { Product } from "@/types/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Star1 } from "iconsax-react";
import Quantity from "./quantity";
import { TbCurrencyNaira } from "react-icons/tb";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

interface ProductionPagehydrationProps {
  product: Product;
  products: Product[];
}

export const ProductPageHydration = ({
  product,
  products,
}: ProductionPagehydrationProps) => {
  const [index, setIndex] = useState<number>(0);
  const [isMounted, setIsMounted] = useState(false);
  const { qty, addItem } = useCart();
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div>
      <div className="m-10 mt-[60px] flex gap-10 text-[#324d67]">
        <div>
          <div>
            <Image
              src={product.image && product.image[index]}
              alt={product.details}
              className="h-[400px] w-[400px] cursor-pointer rounded-2xl object-cover transition hover:bg-[#f02d34] md:w-[350px]"
              width={500}
              height={500}
            />
          </div>
          <div className="mt-5 flex gap-3">
            {product.image?.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={product.details}
                onClick={() => setIndex(i)}
                className={
                  i === index
                    ? "h-[70px] w-[70px] scale-100 cursor-pointer rounded-lg bg-[#ebebeb] bg-cover"
                    : "h-[70px] w-[70px] cursor-pointer rounded-lg bg-[#ebebeb] bg-cover hover:scale-110"
                }
                width={500}
                height={500}
              />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <div className="mt-3 flex items-center gap-1 text-[#f02d34]">
            <div className="flex">
              <Star1 variant="Bold" color="#f02d34" />
              <Star1 variant="Bold" color="#f02d34" />
              <Star1 variant="Bold" color="#f02d34" />
              <Star1 variant="Bold" color="#f02d34" />
              <Star1 variant="Outline" color="#f02d34" />
            </div>
            <p className="mt-0 text-[#324d67]">(20)</p>
          </div>
          <h3 className="mt-1">Details: </h3>
          <p className="mt-1">{product.details}</p>
          <p className="flex items-center mt-8 text-2xl font-bold text-black">
            <TbCurrencyNaira size={35} />
            {product.price}
          </p>
          <Quantity />
          <div className="flex gap-8">
            <button
              type="button"
              className="mt-10 w-[200px] scale-100 cursor-pointer border border-solid border-black bg-white px-5 py-3 text-lg font-medium text-black transition hover:scale-105 md:w-[150px]"
              onClick={() => addItem(product, qty)}
            >
              Add to Cart
            </button>
            <button
              type="button"
              className="mt-10 w-[200px] scale-100 cursor-pointer border-none bg-[#F79327] px-5 py-3 text-lg font-medium text-white transition hover:scale-105 md:w-[150px]"
              onClick={() => router.push("/cart")}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[120px]">
        <h2 className="m-[50px] text-center text-xl font-semibold text-black">
          You may also like
        </h2>
        <div className="relative h-[400px] w-full overflow-x-hidden">
          <div className="absolute mt-5 flex w-[180%] animate-marquee gap-8 whitespace-nowrap will-change-transform">
            {products?.map((item) => (
              <ProductComponent key={product._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
