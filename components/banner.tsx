import Image from "next/image";

interface BannerProps {
  banner: {
    image: string;
    desc: string;
    buttonText: string;
    product: string;
    smallText: string;
    midText: string;
    largeText1: string;
    largeText2: string;
    discount: string;
    saleTime: string;
  };
}

const HeroBanner = ({ banner }: BannerProps) => {
  return (
    <div className="w-full">
      <div className="flex w-full flex-row justify-between gap-8 bg-gradient-to-b from-[#FFF0AA] from-85% to-white p-6 ">
        <div className="flex h-[300px] w-full flex-col justify-evenly">
          <div className="h-[200px]">
            <h3 className="mb-8 w-[400px] text-3xl font-medium ">
              The Number{" "}
              <span className="text-[#F79327]">
                {" "}
                #1 <br />{" "}
              </span>
              choice to reduce <br /> waiting in line
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div>
            <button
              type="button"
              className="w-[150px] rounded-2xl bg-[#F79327] p-3 text-center font-normal text-white"
            >
              Order Now
            </button>
          </div>
        </div>
        <div className="h-full w-2/6">
          <Image
            src={banner.image}
            alt={banner.desc}
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
