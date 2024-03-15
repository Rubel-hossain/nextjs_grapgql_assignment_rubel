import ConferenceInfo from "./ConferenceInfo";
import { getConferenceDatas } from "./fetchDatas";

export default async function Conference(
  { params: { conference_id } }:
    { params: { conference_id: string } }
) {


  const { error, data } = await getConferenceDatas(conference_id)
  return (
    <div className="py-12 sm:py-[100px] duration-150 ">
      <div className=" font-bold text-heading_2 sm:text-heading_1 pr-6"> {data?.conference?.name}</div>
      <div className=" text-gray pr-6"> {data?.conference?.slogan}</div>
      <ConferenceInfo conference={data?.conference} />
    </div>
  )
} 