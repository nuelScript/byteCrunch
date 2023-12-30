import { getVendor } from "@/sanity/sanity-utils";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Vendor({ params }: Props) {
  const slug = params.slug;
  const vendor = await getVendor(slug);

  return (
    <div>
      <Image width={500} height={500} src={vendor.image} alt={vendor.details} />
    </div>
  );
}
