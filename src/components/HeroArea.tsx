"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import heroTopIcon from "@/assets/hero-section/hero-top-icon.png";
import heroStar from "@/assets/hero-section/star.png";
import heroLeftImg from "@/assets/hero-section/hero-left-img.png";
import heroRoundedImg from "@/assets/hero-section/round-hero-img.png";
import heroRoundedImgTwo from "@/assets/hero-section/round-hero-two-img.png";
import heroArrowIcon from "@/assets/hero-section/hero-arrow-icon.jpg";
import heroBgTwo from "@/assets/hero-section/hero-bg-two.png";
import heroBgThree from "@/assets/hero-section/hero-bg.png";
import heroRightImg from "@/assets/hero-section/hero-right-img.png";
import heroBgFour from "@/assets/hero-section/to-bg.png";

const HeroArea = () => {
  const handleClick = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="lg:py-20 hero-area-wrapper">
      <Image
        className="absolute top-0 left-0"
        src={heroBgFour}
        width={290}
        height={228}
        alt="To-bg"
      />

      <div className="grid lg:grid-cols-8 md:grid-cols-6 grid-cols-1 gap-11 lg:px-24 px-5 pt-14">
        <div className="relative lg:mt-[11rem] lg:order-1 order-3 lg:col-span-2 md:col-span-3 col-span-1 md:mb-0 mb-[19rem]">
          <div className="relative">
            <Image
              className="absolute left-0 top-0 z-20 lg:w-[329px] lg:h-[419px] md:h-[348px] md:w-full w-[157px] h-[200px] lg:object-contain"
              src={heroLeftImg}
              alt="Hero Image"
              width={329}
              height={419}
            />
            <Image
              className="absolute lg:left-[60%] lg:-bottom-[30rem] lg:-right-[.75rem] -bottom-[10.25rem] left-[80%] object-contain z-0 md:w-[196px] md:h-[189px] w-[130px] h-[130px] lg:block md:hidden block "
              src={heroRoundedImg}
              alt="Hero Image"
              width={196}
              height={189}
            />
          </div>

          <Image
            className="absolute -right-[1rem] -bottom-[10.25rem] md:hidden block"
            src={heroRoundedImgTwo}
            alt="Hero Image"
            width={60}
            height={60}
          />
        </div>

        {/*<------ Middle Info ------>*/}
        <div className="relative order-1 lg:col-span-3 md:col-span-6 col-span-1">
          <div className="relative">
            <h1 className="absolute top-0 right-0 lg:text-[114px] md:text-[90px] text-[48px] lg:leading-[90px] md:leading-[70px] leading-[55px] text-secondary font-bold text-right capitalize z-20">
              <span className="absolute lg:left-[42%] lg:-top-[3.8rem] md:left-[16rem] md:-top-[3.8rem] -top-[3rem] left-[5rem]">
                <Image
                  src={heroTopIcon}
                  alt="Hero Top"
                  width={85}
                  height={82}
                />
              </span>
              react <br /> conference
            </h1>
          </div>
          <p className="text-lg text-[#000] text-justify lg:mt-[14rem] md:mt-44 mt-36 mb-12">
            Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id
            fermentum..id fermentum.In quis diam turpis quam id fermentum.
          </p>

          <div className="flex lg:justify-start justify-center items-center">
            <Link
              href={"/"}
              className="bg-primary py-4 md:w-[293px] w-[177px] rounded-full flex justify-center items-center"
            >
              buy tickets <GoArrowUpRight />
            </Link>
          </div>

          <button
            className="lg:block hidden"
            onClick={() => handleClick("conferences")}
          >
            <span className="flex items-center gap-2 rotate-90 absolute right-0 -bottom-[-6rem] cursor-pointer">
              <span className="text-secondary text-[14px] rotate-180">
                Scroll Down
              </span>
              <Image
                className="-rotate-90"
                src={heroArrowIcon}
                width={16}
                height={16}
                priority
                alt=""
              />
            </span>
          </button>
        </div>
        <div className="relative lg:mt-[8rem] lg:order-3 order-2 lg:col-span-3 md:col-span-3 col-span-1">
          <Image
            className="absolute md:-top-[23.75rem] md:-right-[25rem] -top-[25.75rem] -right-[1rem] lg:hidden block"
            src={heroBgTwo}
            alt="Hero Image"
            width={342}
            height={432}
          />

          <div className="hero-img-wrapper relative">
            <Image
              className="absolute lg:-left-[50%] lg:-top-[8.75rem] z-0 lg:h-[560px] lg:block hidden"
              src={heroBgThree}
              alt="Hero Image"
              width={940}
              height={832}
            />
            <Image
              src={heroRightImg}
              alt="Hero Image"
              width={549}
              height={559}
              className="relative left-0"
            />
            <Image
              className="absolute bottom-[-20px] lg:-left-4 -right-[1.25rem] md:w-[60px] md:h-[50px] w-[64px] h-[74px] lg:block md:hidden block"
              src={heroStar}
              alt="Hero Image star"
              width={80}
              height={80}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
