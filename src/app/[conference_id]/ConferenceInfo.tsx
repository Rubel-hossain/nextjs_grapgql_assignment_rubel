"use client";
import { FC, useState } from "react";
import OrganizerCards from "./OrganizerCards";
import ScheduleCards from "./ScheduleCards";
import { ButtonWrapper, Sidebar } from "./Sidebar";
import SpeakersCards from "./SpeakersCards";
import SponsorsCards from "./SponsorsCards";

type ConferenceInfoPropsT = {
  conference: {
    name: string;
    slogan: string;
    schedules: any[];
  } | undefined;
}
const ConferenceInfo: FC<ConferenceInfoPropsT> = ({ conference }) => {
  type ActiveInfoT = "organizer" | "speakers" | "schedules" | "sponsors";

  const [activeInfo, setActiveInfo] = useState<ActiveInfoT>("organizer")

  const handleClick = (value: ActiveInfoT): void => {
    setActiveInfo(() => value);
  }

  return (
    <div className="py-10 sm:py-[52px] ">
      {/* desktop view */}
      <div className="hidden sm:grid sm:grid-cols-12 gap-8 md:gap-12">
        <div className="sm:col-span-4">
          <Sidebar activeInfo={activeInfo} handleClick={handleClick} conference={conference} />
        </div>

        <div className=" sm:col-span-8">
          {activeInfo === "organizer" && <OrganizerCards />}
          {activeInfo === "speakers" && <SpeakersCards />}
          {activeInfo === "schedules" && <ScheduleCards datas={conference?.schedules || []} />}
          {activeInfo === "sponsors" && <SponsorsCards />}
        </div>
      </div>

      {/* mobile view */}
      <div className=" sm:hidden grid gap-8">
        <div className="grid gap-4" onClick={() => handleClick("organizer")}>
          <ButtonWrapper isActive={activeInfo === "organizer"}> Organizer</ButtonWrapper>
          {activeInfo === "organizer" && <OrganizerCards />}
        </div>

        <div className="grid gap-4" onClick={() => handleClick("speakers")}>
          <ButtonWrapper isActive={activeInfo === "speakers"}> Speakers</ButtonWrapper>
          {activeInfo === "speakers" && <SpeakersCards />}
        </div>
        <div className="grid gap-4" onClick={() => handleClick("schedules")}>
          <ButtonWrapper isActive={activeInfo === "schedules"}> Schedule</ButtonWrapper>
          {activeInfo === "schedules" && <ScheduleCards datas={conference?.schedules || []} />}
        </div>
        <div className="grid gap-4" onClick={() => handleClick("sponsors")}>
          <ButtonWrapper isActive={activeInfo === "sponsors"}> Sponsors</ButtonWrapper>
          {activeInfo === "sponsors" && <SponsorsCards />}
        </div>
      </div>
    </div>
  )
}

export default ConferenceInfo;