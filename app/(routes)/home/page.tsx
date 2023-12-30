import { getBanners, getProducts, getVendors } from "@/sanity/sanity-utils";
import { HomePageHydration } from "./hydration";

const fetchData = async () => {
  return {
    products: await getProducts(),
    banners: await getBanners(),
    vendors: await getVendors(),
  };
};

export default async function Home() {
  const { products, banners, vendors } = await fetchData();
  return (
    <HomePageHydration
      products={products}
      banners={banners}
      vendors={vendors}
    />
  );
}
