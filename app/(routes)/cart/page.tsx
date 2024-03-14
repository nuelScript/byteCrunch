"use client";

import { useRef } from "react";
import Container from "@/components/container";
import { AiOutlineShopping } from "react-icons/ai";
import Link from "next/link";
import { TbCurrencyNaira } from "react-icons/tb";
import { MdOutlineCancel } from "react-icons/md";
import Image from "next/image";
import useCart from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const CartPage = () => {
  const cartRef = useRef<HTMLDivElement>(null);
  const cart = useCart();
  const { totalPrice, totalQuantity, removeItem, removeAllItems, items } = cart;

  return (
    <Container className="my-8" ref={cartRef}>
      <div className="flex justify-between items-center">
        <div>
          <p className="my-4 inline-block text-xl font-semibold underline">
            Check Out
          </p>
          <span className="ml-3 text-buttoncolor">({totalQuantity} items)</span>
        </div>
        {items.length !== 0 && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={removeAllItems}
                  className="hover:bg-red-500/75"
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-red-500 border-none text-white">
                <p>Remove all Items</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>

      {cart.items.length < 1 && (
        <div className="m-10 flex flex-col items-center text-center">
          <AiOutlineShopping className="text-center text-9xl text-black" />
          <h3 className="text-lg">Your Shopping Cart is Empty</h3>
          <Link href={"/home"}>
            <button
              type="button"
              className="mt-10 w-full max-w-[400px] scale-100 cursor-pointer rounded-2xl border-none bg-buttoncolor px-5 py-[15px] text-sm uppercase text-white transition hover:scale-110"
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      )}

      <div className="mt-4 max-h-[70vh] overflow-auto px-3 py-5">
        {cart.items.length >= 1 &&
          cart.items.map((item) => (
            <div
              className="my-8 flex items-center border-b-2 border-dashed border-black py-4"
              key={item._id}
            >
              <div className="h-full w-1/5 pe-4">
                <Image
                  className="rounded-xl"
                  src={item.image[0]}
                  alt={item.name}
                  width={240}
                  height={320}
                />
              </div>
              <div className="flex h-full w-2/5">
                <div className="ps-10">
                  <p className="my-2 w-fit text-xl font-semibold">
                    {item.name}
                  </p>
                  <p className="my-2 font-light">Qty: {item.quantity}</p>
                </div>
              </div>
              <div className="h-full w-1/5 ">
                <span className="me-1">
                  <TbCurrencyNaira className="inline" size={20} />
                </span>
                <span>{item.price}</span>
              </div>
              <div className="h-full w-1/5 ">
                <MdOutlineCancel
                  onClick={() => removeItem(item._id)}
                  className="mx-auto hover:cursor-pointer"
                  size={25}
                />
              </div>
            </div>
          ))}
      </div>
      {cart.items.length >= 1 && (
        <div className="flex flex-col items-end">
          <div className="[&>p]:w-48">
            <p className="my-1 flex  text-neutral-500">
              Total:{" "}
              <span className="ml-auto text-right">
                <TbCurrencyNaira
                  className="mx-0 mb-0.5 inline-block"
                  size={21}
                />{" "}
                {totalPrice}
              </span>
            </p>
            <p className=" my-1 flex text-neutral-500">
              Delivery Fee: <span className="ml-auto text-right"></span>
            </p>
            <p className="my-4 flex text-lg font-semibold">
              Grand Total:
              <span className="ml-auto text-right">
                <TbCurrencyNaira
                  className="mx-0 mb-0.5 inline-block"
                  size={20}
                />{" "}
                {totalPrice}
              </span>
            </p>
          </div>
          <div className="mt-16 flex h-fit w-full justify-center">
            <button
              type="button"
              className="w-[220px] rounded-2xl bg-buttoncolor p-3 py-3.5 text-xl font-bold text-white"
            >
              Confirm Order
            </button>
          </div>
        </div>
      )}
    </Container>
  );
};

export default CartPage;
