"use client";

import Container from "@/components/container";
import { Logo } from "@/components/logo";
import { UserMenu } from "./user-menu";
import { Button } from "./ui/button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useStateContext } from "@/context/state-context";
import { useRouter } from "next/navigation";
import { SessionProvider, useSession } from "next-auth/react";

export const Navbar = () => {
  const { data } = useSession();
  const router = useRouter();
  const { showCart, setShowCart, totalQuantity } = useStateContext();

  const onCart = async () => {
    if (!data) {
      router.push("/auth/login");
    }
  };

  return (
    <SessionProvider>
      <div className="sticky top-0 z-10 w-full bg-white shadow-sm">
        <div className="border-b py-4">
          <Container>
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
              <Logo />
              <div className="flex">
                <UserMenu />
                <div className="flex items-center" onClick={onCart}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="relative cursor-pointer border-none bg-transparent text-2xl text-gray-500 transition-transform hover:scale-110 rounded-full"
                  >
                    <AiOutlineShoppingCart className="flex" />
                    <span className="absolute flex items-center justify-center -right-0 -top-0 h-[18px] w-[18px] rounded-full bg-red-500 text-center text-xs font-semibold text-white">
                      {totalQuantity}
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </SessionProvider>
  );
};
