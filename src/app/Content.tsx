import Image from "next/image"
import { BackgroundElementLogo, ButtonIcon, HeadingLogo, HeroStarLogo, ScrollDownLogo, SideImageLogo } from "@/components/Logo/Content"
import Link from "next/link"
import { ButtonWrapper } from "@/components/Button/Button"

export const Content = () => {

  return (
    <div className=" px-8 md:pl-20 md:pr-16 py-[60px] sm:py-32  ">

      <div className="grid grid-cols-1 md:grid-cols-6 gap-8 relative max-w-[1500px] mx-auto" >

        {/* hero title */}
        <section className="row-start-1 md:row-span-2 md:col-start-1 md:col-span-4 leading-none">
          <section className=" text-right text-heading_1 md:text-hero_3 lg:text-hero_2 2xl:text-hero font-bold text-secondary flex justify-end">
            <span className=" relative -top-5 md:-top-8 left:2 md:left-4" >
              <HeadingLogo className=" h-8 w-8 md:h-16 md:w-16" />
            </span>
            React
          </section>

          <section className=" text-right text-heading_1 md:text-hero_3 lg:text-hero_2 2xl:text-hero font-bold text-secondary">Conference</section>

        </section>

        {/* left side image section */}
        <section className="relative row-start-4 md:row-start-3 md:col-start-1 md:col-span-2 pt-8 md:pt-0">
          <Image className=" w-fit mr-auto md:mx-auto" src={"/content/side_image.png"} alt="side_image" width={500} height={300} />
          <SideImageLogo className="absolute bottom-0 -right-28 md:-bottom-16 md:-right-8 -z-10 w-24 h-24 md:w-48 md:h-48 " />
        </section>

        {/* center text content with button */}
        <section className=" row-start-2 md:row-start-3 md:col-span-2 flex flex-col gap-8 md:gap-20 justify-center align-middle md:justify-start ">
          <text className=" text-heading_4">Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum. In quis diam turpis quam id fermentum.</text>
          <ButtonWrapper className="mx-auto md:mx-0 lg:w-1/2 w-fit font-semibold" >
            <>
              <span>Buy Tickets</span>
              <ButtonIcon className="pt-1" />
            </>
          </ButtonWrapper>
        </section>

        {/* hero image */}
        <section className=" row-start-3 md:row-start-2 md:row-span-2 col-span-2 flex items-center relative">
          <Image className=" w-full h-fit md:pr-5" src={"/content/hero_image.png"} alt="hero Image" width={600} height={600} />
          <HeroStarLogo className=" z-10 absolute w-24 h-24 md:w-32 md:h-32 -bottom-14 -right-2 md:bottom-20 md:-left-12" />
        </section>

        {/* scroll down button */}
        <Link href="#conferences" className=" cursor-pointer" >
          <section className=" hidden md:flex absolute left-1/2 bottom-10 -rotate-90 text-heading_6">
            <ScrollDownLogo className="rotate-90 mt-1 pt-1 " /> scroll down
          </section>
        </Link>

        <BackgroundElements />

      </div>
    </div>
  )
}

const BackgroundElements = () => {
  return (
    <>
      {/* bg green circle */}
      <div
        style={{ background: 'radial-gradient(ellipse farthest-corner at center center, #22B5BE 0%, rgba(0,255,0,0) 70%)' }}
        className="-z-20 absolute -left-20 sm:left-20 bottom-0 w-full h-full max-w-[412px] max-h-[412px] opacity-20 "
      >
      </div>
      {/*bg yellow circle */}
      <div
        style={{ background: 'radial-gradient(ellipse farthest-corner at center center, #FFC93E 0%, rgba(0,255,0,0) 70%)' }}
        className=" -z-20 absolute top-0 sm:top-auto bottom-auto sm:bottom-0 -right-20 sm:right-20 w-full h-full max-w-[412px] max-h-[412px] opacity-20"
      >
      </div>

      {/* bg curve line */}
      <div className="absolute w-full h-full md:h-fit flex justify-end -z-10"><BackgroundElementLogo /></div>
    </>
  )
}