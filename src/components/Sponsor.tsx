import cts from "@/assets/images/sponsor/catalog-silver.png";
import cirb from "@/assets/images/sponsor/circooles-bronze.png";
import cirs from "@/assets/images/sponsor/circooles-silver.png";
import gofo from "@/assets/images/sponsor/gofore-silver.png";
import {
  default as layer,
  default as layerb,
} from "@/assets/images/sponsor/layers-bronze.png";
import qut from "@/assets/images/sponsor/quotient-bronze.png";
import sis from "@/assets/images/sponsor/sisyphus-gold.png";
import sisb from "@/assets/images/sponsor/sysyphus-bronze.png";
import Image from "next/image";

const Sponsor = () => {
  return (
    <section className="bg-[#F9FAFB] mt-10 w-full">
      <div className="py-10">
        <h1 className="text-center font-bold md:text-5xl text-xl">
          Our Sponsor
        </h1>
        <div className="w-full mx-auto">
          <h4 className="text-center md:text-base text-xs md:my-8 my-6">
            🥇 Gold Sponsor
          </h4>
          <div className="flex justify-center gap-10">
            <Image src={layer} className="md:w-56 w-28 " alt="layer" />
            <Image src={sis} className="md:w-56 w-28 " alt="layer" />
          </div>
        </div>
        <div className="w-full mx-auto">
          <h4 className="text-center md:text-base text-xs  md:my-8 my-6">
            🥈 Silver Sponsors
          </h4>
          <div className="flex justify-center flex-wrap gap-10 px-5">
            <Image src={cirs} className="md:w-56 w-28 " alt="cirs" />
            <Image src={cts} className="md:w-56 w-28 " alt="cts" />
            <Image src={gofo} className="md:w-56 w-28 " alt="gofo" />
          </div>
        </div>
        <div className="w-full mx-auto">
          <h4 className="text-center md:text-base text-xs md:my-8 my-6">
            🥉 Bronze Sponsors
          </h4>
          <div className="flex justify-center flex-wrap gap-10 px-8">
            <Image src={sisb} className="md:w-56 w-28 " alt="sisb" />
            <Image src={qut} className="md:w-56 w-28 " alt="qut" />
            <Image src={layerb} className="md:w-56 w-28 " alt="layerb" />
            <Image src={cirb} className="md:w-56 w-28 " alt="cirb" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
