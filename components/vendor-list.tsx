import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Vendor } from "@/types/types";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { TbCurrencyNaira } from "react-icons/tb";
import { Toggle } from "@/components/ui/toggle";

interface VendorListProps {
  vendors: Vendor[];
}

const VendorList = ({ vendors }: VendorListProps) => {
  return (
    <div className="p-4 w-full">
      <Tabs defaultValue="hello" className="w-full">
        <TabsList className="flex justify-between w-full">
          {vendors.map((vendor) => (
            <TabsTrigger
              key={vendor._id}
              className="bg-none text-center text-base font-medium data-[state=active]:underline w-full"
              value={vendor.name}
            >
              {vendor.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {vendors.map((vendor) => (
          <TabsContent
            key={vendor._id}
            className="flex space-x-8 w-full"
            value={vendor.name}
          >
            {vendor.product.map((p) => (
              <Card key={p.slug} className="rounded-2xl border-none shadow-xl">
                <CardContent className="flex h-[480px] w-[350px] flex-col items-center justify-start p-0">
                  <Image
                    width={350}
                    height={250}
                    className="mb-8 h-[310px] w-[350px] rounded-t-2xl bg-[#ebebeb] object-cover object-center transition"
                    src={p.image && p.image[0]}
                    alt={p.name}
                  />
                  <div className="flex w-full flex-col gap-y-4 px-4 pb-4">
                    <div className="flex justify-between ">
                      <p className="text-lg font-medium">{p.name}</p>
                      <p className="text-lg font-medium flex gap-x-2">
                        {p.size.map((size, i) => (
                          <span
                            key={size}
                            className="rounded-lg bg-[#F79327] w-8 h-8 flex items-center justify-center cursor-pointer"
                          >
                            <Toggle
                              aria-label={p.details}
                              variant="default"
                              size="default"
                            >
                              {p.size[i]}
                            </Toggle>
                          </span>
                        ))}
                      </p>
                    </div>
                    <div className="leading-tight">{p.details}</div>
                    <div className="flex justify-between ">
                      <span className="border-2 border-black rounded-2xl px-4 py-2 flex items-center justify-center">
                        <TbCurrencyNaira className="mr-2 inline w-6 h-6" />
                        {p.price}
                      </span>
                      <span className="bg-[#F79327] text-white text-lg font-light flex items-center justify-center rounded-3xl px-4 hover:scale-105 cursor-pointer">
                        Order Now
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default VendorList;
