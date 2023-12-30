import { getProduct, getProducts } from "@/sanity/sanity-utils";
import { ProductPageHydration } from "./hydration";

const fetchData = async (slug: string) => {
  return {
    product: await getProduct(slug),
    products: await getProducts(),
  };
};

export default async function ProductPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { product, products } = await fetchData(slug);
  return <ProductPageHydration product={product} products={products} />;
}
