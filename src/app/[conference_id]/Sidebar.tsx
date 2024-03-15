import DragAndDrop from "@/components/DragAndDrop/DragAndDrop";
import { FC } from "react";
import Image from "next/image";
import updownarrow from "@/assets/images/timeline/up-down-arrow.png";

type SidebarPropsT = {
  conference:
    | {
        name: string;
        slogan: string;
        schedules: any[];
      }
    | undefined;
  handleClick: (
    arg: "organizer" | "speakers" | "schedules" | "sponsors"
  ) => void;
  activeInfo: string;
};

export const ButtonWrapper = ({
  children,
  isActive,
}: {
  children: string;
  isActive: boolean;
}) => {
  return (
    <div
      style={isActive ? { boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.20)" } : {}}
      className={` ${
        isActive ? "bg-primary  text-white" : " border border-border_color"
      } rounded-lg cursor-pointer flex items-center p-2 text-center`}
    >
      <Image
        src={updownarrow}
        className={`w-14 box-border p-3 rounded-lg ${isActive && "bg-white"}`}
        alt="up-down-arrow"
      />
      <span className="w-full text-heading_4 sm:text-heading_3 font-bold">
        {children}
      </span>
    </div>
  );
};

export const Sidebar: FC<SidebarPropsT> = ({ handleClick, activeInfo }) => {
  return (
    <div className=" grid gap-6 sm:gap-8 ">
      <DragAndDrop
        isActive={activeInfo}
        handleClick={handleClick}
        datas={[
          {
            id: "organizer",
            value: (
              <ButtonWrapper isActive={activeInfo === "organizer"}>
                Organizer
              </ButtonWrapper>
            ),
          },
          {
            id: "speakers",
            value: (
              <ButtonWrapper isActive={activeInfo === "speakers"}>
                Speakers
              </ButtonWrapper>
            ),
          },
          {
            id: "schedules",
            value: (
              <ButtonWrapper isActive={activeInfo === "schedules"}>
                Schedule
              </ButtonWrapper>
            ),
          },
          {
            id: "sponsors",
            value: (
              <ButtonWrapper isActive={activeInfo === "sponsors"}>
                Sponsors
              </ButtonWrapper>
            ),
          },
        ]}
      />
    </div>
  );
};
