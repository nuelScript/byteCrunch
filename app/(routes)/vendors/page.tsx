import { Button } from "@/components/ui/button";
import VendorList from "@/components/vendor-list";
import { getVendors } from "@/sanity/sanity-utils";

export default async function Vendors() {
  const vendors = await getVendors();
  return (
    <div className="flex h-full w-full flex-col gap-y-16">
      <div className="flex w-full h-full justify-around bg-gradient-to-b from-primarycolor2">
        <VendorList vendors={vendors} />
      </div>
      <div className="flex w-full justify-end">
        <Button className="mr-16 rounded-xl bg-[#F79327] px-12 text-center">
          Check Out
        </Button>
      </div>
    </div>
  );
}
