import { CardWrapper } from "@/components/Card/Conference";

const OrganizerCards = () => {
  return (
    <div className=" bg-gray2 p-5 md:p-10 rounded-lg grid gap-6">
      <CardWrapper imageUrl="/organizer/siddhartha.png" title="Siddhartha" content="Lorem ipsum dolor sit amet, con sec tetur ad." />
      <CardWrapper imageUrl="/organizer/candide.png" title="Candide" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut." />
      <CardWrapper imageUrl="/organizer/the_title_prince.png" title="The Title Prince" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut." />
    </div>
  )
}


export default OrganizerCards