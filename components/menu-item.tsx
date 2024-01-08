"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface MenuItemProps {
  onClick?: () => void;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const MenuItem = ({
  children,
  className,
  href,
  onClick,
}: MenuItemProps) => {
  return (
    <Link
      href={href || "#"}
      onClick={onClick}
      className={cn(
        "w-full px-8 py-3 hover:bg-neutral-100 transition font-semibold",
        className
      )}
    >
      {children}
    </Link>
  );
};
