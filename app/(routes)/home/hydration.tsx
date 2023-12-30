"use client";

import HeroBanner from "@/components/banner";
import ProductComponent from "@/components/product";
import VendorComponent from "@/components/vendor";
import { Banner } from "@/types/Banner";
import { Product } from "@/types/Product";
import { Vendor } from "@/types/Vendor";
import Link from "next/link";
import { useEffect, useState } from "react";

interface HydrationProps {
  products: Product[];
  banners: Banner[];
  vendors: Vendor[];
}

export const HomePageHydration = ({
  products,
  banners,
  vendors,
}: HydrationProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <div>
        <HeroBanner
          banner={
            banners.length
              ? banners[0]
              : {
                  image: "",
                  desc: "",
                  buttonText: "",
                  product: "",
                  smallText: "",
                  midText: "",
                  largeText1: "",
                  largeText2: "",
                  discount: "",
                  saleTime: "",
                }
          }
        />
        <div className="mx-0 my-8 text-center text-black">
          <h2 className="text-3xl font-bold">Popular Meals</h2>
        </div>
        <div className="mt-5 flex w-full flex-wrap justify-center gap-8">
          {products?.map((product) => (
            <ProductComponent key={product._id} product={product} />
          ))}
        </div>
        <div className="mx-0 my-8 mt-20 text-center text-black">
          <Link href="/vendors">
            <h2 className="text-3xl font-bold hover:underline">Vendors</h2>
          </Link>
        </div>
        <div className="mt-5 flex w-full flex-wrap justify-center gap-8">
          {vendors?.map((vendor) => (
            <VendorComponent key={vendor._id} vendor={vendor} />
          ))}
        </div>
      </div>
    </>
  );
};
