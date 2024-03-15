// "use client"
import { FC, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { dateFormate } from "@/util/dateFormate";
import { getConferencesDatas } from "./fetchDatas";
import dot from "@/assets/images/timeline/dot.png";
import thander from "@/assets/images/timeline/image.png";
import activeThander from "@/assets/images/timeline/active.png";

export const Conferences = async () => {

  const { error, data } = await getConferencesDatas();

  return (
    <div className="p-4 sm:p-6">
      <div id="conferences" className="text-center max-w-5xl w-full mx-auto">
        <section className=" text-heading_2 md:text-heading_1 pt-16 pb-16 font-bold">Conferences</section>
        <section className="grid gap-8 ">
          
          {(data?.conferences && Array.isArray(data.conferences)) && data.conferences.map((conference: { id: string, name: string, slogan: string, startDate: Date }, index: number) => (
            <Fragment key={conference.id}>
              {/* desktop view */}
              <Link href={`/${conference.id}`}  className={`${index % 2 === 0 ? "" : "flex-row-reverse"} hidden sm:flex justify-center relative gap-8 "`}>
                <section className="w-full ">
                  <ConferenceCard label={conference.name} content={conference.slogan} />
                </section>
                <section className="h-full hover:border-primary">
                  { index === 0 ? (
                   <Image src={activeThander} width={90} alt="active thander" />
                  ) : (
                    <Image src={thander} alt="thander" />
                  ) }
                 
                  <div className={`${data.conferences.length === index + 1 ? "hidden" : ""} ${index === 0 ? 'bg-primary' : 'bg-border_color'} h-full w-[2px] mx-auto  -z-10`} ></div>
                </section>

                <section className={`${index % 2 === 0 ? "text-left" : "sm:text-right "} text-gray text-heading_6 w-full pt-2`}>
                  {dateFormate(conference.startDate)}
                </section>
              </Link>

              {/* mobile view  */}
              <section key={conference.id} className={`flex sm:hidden  relative gap-3 `}>

                <section className=" h-full hover:border-primary mt-8">
                { index === 0 ? (
                   <Image src={activeThander} width={50} alt="active thander" />
                  ) : (
                    <Image src={thander} width={50} alt="thander" />
                  ) }
                  <div className={`${data.conferences.length === index + 1 ? "hidden" : ""} ${index === 0 ? 'bg-primary' : 'bg-border_color'} h-full w-[2px] mx-auto  -z-10`} ></div>
                </section>

                <Link href={`/${conference.id}`} className="h-full hover:border-primary w-full">
                  <section className={`text-left text-gray text-heading_6 w-full py-2`}>
                    {dateFormate(conference.startDate)}
                  </section>
                  <ConferenceCard label={conference.name} content={conference.slogan} />
                </Link>

              </section>
            </Fragment>
          ))}
        </section>
      </div>
    </div>
  )
}




type CardPropsT = {
  label: string;
  content: string
}
const ConferenceCard: FC<CardPropsT> = ({ label, content }) => {
  return (
    <div className=" border-t-4 border-border_color shadow hover:shadow-lg hover: hover:border-primary flex gap-4 px-[10px] py-6 duration-150 rounded-lg">
      <section className="pt-1">
        <Image src={dot} className="w-4 h-4 mt-2" alt="dot" />
      </section>
      <section className=" w-fit grid text-left">
        <text className=" text-heading_4 font-medium text-secondary">{label}</text>
        <text className=" text-heading_6 font-normal text-gray">{content}</text>
      </section>
    </div>
  )
}