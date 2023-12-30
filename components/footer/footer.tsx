import Link from "next/link";
import SectionList from "./SectionList";

const Footer = () => {
  return (
    <div className="flex h-[40vh] w-screen bg-neutral-950 text-white">
      <div className="flex w-2/5 flex-col items-center justify-center">
        <p className="text-3xl font-bold">Byte & Crunch</p>
        <div className="flex flex-col my-4 text-white md:flex-row [&>*]:mx-4">
          <Link className="mt-4 md:mt-0" href={""}></Link>
          <Link className="mt-4 md:mt-0" href={""}></Link>
          <Link className="mt-4 md:mt-0" href={""}></Link>
          <Link className="mt-4 md:mt-0" href={""}></Link>
        </div>
      </div>
      <div className="w-1/5 ">
        <SectionList className="my-4" title="Services">
          <Link className="hover:text-gray-500" href={""}>
            Faq
          </Link>
          <Link className="hover:text-gray-500" href={""}>
            Our Partners
          </Link>
          <Link className="hover:text-gray-500" href={""}>
            Contact Us
          </Link>
          <Link className="hover:text-gray-500" href={""}>
            What do we offer?
          </Link>
        </SectionList>
      </div>
      <div className="w-1/5">
        <SectionList className="my-4" title="Info" />
      </div>
      <div className="w-1/5 ">
        <SectionList title="Contact Us">
          <p className="my-4">Lorem ipsum dolor sit amet consectetur</p>
          <p className="my-4">Lorem ipsum dolor sit amet consectetur</p>
        </SectionList>
      </div>
    </div>
  );
};

export default Footer;
