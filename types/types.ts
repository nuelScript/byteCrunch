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
