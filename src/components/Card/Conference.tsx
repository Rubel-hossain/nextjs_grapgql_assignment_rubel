import Image from "next/image";
import { FC, ReactNode } from "react";

type CardWrapperT = {
  imageUrl: string;
  title: string;
  content: string;
  icons?: ReactNode;
}

type ScheduleCardWrapperT = {
  titleLeft: string;
  titleRight: string;
  content: ReactNode;
}

export const CardWrapper: FC<CardWrapperT> = ({ imageUrl, title, content, icons }) => {

  return (
    <div className=" flex gap-4 sm:gap-6 md:gap-10 p-4 bg-white rounded-lg">
      <Image src={imageUrl} alt={title} width={140} height={140} className=" max-w-[96px] max-h-24 md:max-w-[140px] md:max-h-[140px] object-contain mb-auto" />
      <section className=" flex w-full flex-col justify-start sm:justify-center gap-1 sm:pr-5">

        <section className=" flex justify-start align-top sm:justify-between flex-col sm:flex-row gap-1">
          <div className=" text-secondary text-heading_5 md:text-heading_3 font-bold">
            {title}
          </div>
          {icons}
        </section>

        <section className=" text-heading_7 sm:text-heading_6  md:text-heading_5 text-gray">
          {content}
        </section>

      </section>
    </div>
  )
}
export const ScheduleCardWrapper: FC<ScheduleCardWrapperT> = ({ titleLeft, titleRight, content }) => {

  return (
    <div className=" flex gap-4 sm:gap-6 md:gap-10 p-4 bg-white rounded-lg">
      <section className=" flex w-full flex-col justify-start sm:justify-center gap-2 sm:pr-5">

        <section className=" flex justify-between w-full gap-1 ">
          <span className=" text-secondary text-heading_5 md:text-heading_3 font-bold">
            {titleLeft}
          </span>
          <span className=" pt-1 text-heading_7 sm:text-heading_6">
            {titleRight}
          </span>
        </section>

        <section className=" text-heading_7 sm:text-heading_6  md:text-heading_5 text-gray">
          {content}
        </section>

      </section>
    </div>
  )
}