"use client";

import { SafeUser } from "@/types/types";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MenuItem } from "@/components/menu-item";
import { signOut } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import Image from "next/image";
import { placeholder } from "@/public/images";
import { useSession } from "next-auth/react";
import { Session } from "next-auth/types";

interface UserMenuProps {
  currentUser?: Session;
}

export const UserMenu = ({ currentUser }: UserMenuProps) => {
  console.log(currentUser);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative mx-4 flex flex-row items-center gap-10">
      <div className="hover:cursor-pointer" onClick={() => setIsOpen(true)}>
        <Avatar>
          <AvatarImage src={currentUser?.image} />
          <AvatarFallback>
            <Image
              src={placeholder}
              className="aspect-square rounded-full"
              width={40}
              height={40}
              alt="Avatar"
            />
          </AvatarFallback>
        </Avatar>
      </div>
      {isOpen && (
        <div className="absolute left-[-100%] top-[110%] overflow-hidden rounded-bl-xl rounded-br-xl bg-white text-sm shadow-md md:left-0">
          <div
            onMouseLeave={() => setIsOpen(false)}
            className="flex flex-col items-center w-fit cursor-pointer"
          >
            {currentUser ? (
              <>
                <MenuItem className="block md:hidden">
                  <Avatar>
                    <AvatarImage src={currentUser?.image} />
                    <AvatarFallback>
                      <Image
                        src={placeholder}
                        className="aspect-square h-full w-full"
                        width={30}
                        height={30}
                        alt="placeholder"
                      />
                    </AvatarFallback>
                  </Avatar>
                </MenuItem>
                <MenuItem href="/cart">Cart</MenuItem>
                <MenuItem
                  onClick={() =>
                    signOut({ callbackUrl: DEFAULT_LOGIN_REDIRECT })
                  }
                >
                  Logout
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem href="/auth/login">Login</MenuItem>
                <MenuItem href="/auth/register">Register</MenuItem>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
