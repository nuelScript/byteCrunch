import { User } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified" | "image"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
  image: string;
};

export type Banner = {
  _id: string;
  _createdAt: Date;
  buttonText: string;
  product: string;
  desc: string;
  smallText: string;
  midText: string;
  largeText1: string;
  largeText2: string;
  discount: string;
  saleTime: string;
  image: string;
};

export type Product = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string[];
  details: string;
  price: number;
  size: string[];
};

export type Vendor = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  image: string;
  details: string;
  product: {
    name: string;
    slug: string;
    price: number;
    details: string;
    image: string[];
    size: string[];
  }[];
};
