import { logo } from "@/public/images";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/home" passHref>
      <Image
        alt="logo"
        className="hidden md:block cursor-pointer"
        height={100}
        width={100}
        src={logo}
      />
    </Link>
  );
};
