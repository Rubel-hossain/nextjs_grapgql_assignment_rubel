import fetchDatas from "@/util/fetchDatas";

export async function getConferenceDatas(conference_id: string) {
  // console.log(conference_id);
  // const query = `
  //   query {
  //     conference(id:"${conference_id}") {
  //       id
  //       name
  //       slogan
  //       organizer {
  //         aboutShort
  //         company
  //         tagline
  //         noPhotography
  //       }
  //       speakers {
  //         aboutShort
  //         company
  //         tagline
  //         noPhotography
  //       }
  //       schedules {
  //         description
  //       }
  //       sponsors {
  //         aboutShort
  //         company
  //         tagline
  //         noPhotography
  //       }
  //     }
  //   }`;

  const query = `
    query {
      conference(id:"${conference_id}") {
        name
        slogan
        schedules {
          description
          day
           location {
             name
             about
             city
             address
          }
        }
      }
    }`;

  const res = await fetchDatas(query);
  return res;
}
