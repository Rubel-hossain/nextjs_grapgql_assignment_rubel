import { ScheduleCardWrapper } from "@/components/Card/Conference";
import { FC } from "react";

type SchedulePropsT = {
  datas: any[];
};
type LocationsPropsT = {
  locations: any;
};

const Locations: FC<LocationsPropsT> = ({ locations }) => {
  let descriptions = [];
  for (const [key, value] of Object.entries(locations)) {
    descriptions.push(
      <div>
        <span className="capitalize">{key} : </span>
        {`${value}`}
      </div>
    );
  }
  return <div className=" grid gap-2">{descriptions}</div>;
};

const ScheduleCards: FC<SchedulePropsT> = ({ datas }) => {
  return (
    <div className=" bg-gray2 p-5 md:p-10 rounded-lg grid gap-6">
      {datas?.map((data, index) => (
        <div key={index}>
          <ScheduleCardWrapper
            titleLeft={data?.day}
            titleRight={data?.description}
            content={data?.location && <Locations locations={data?.location} />}
          />
        </div>
      ))}
    </div>
  );
};

export default ScheduleCards;
