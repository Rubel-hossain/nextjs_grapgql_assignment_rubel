import fetchDatas from "@/util/fetchDatas";

export async function getConferencesDatas() {

  const query = `query {
    conferences {
      id
      name
      startDate
      endDate      
      slogan
    }
  }`;

  const res = await fetchDatas(query);
  return {...res};
}
