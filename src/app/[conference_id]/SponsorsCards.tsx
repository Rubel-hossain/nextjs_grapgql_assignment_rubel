import { CardWrapper } from "@/components/Card/Conference";

const SponsorsCards = () => {
  return (
    <div className=" bg-gray2 p-10 rounded-lg grid gap-6">
      <CardWrapper imageUrl="/sponsors/louis_vuitton.png" title="Louis Vuitton" content="Lorem ipsum dolor sit amet, con sec tetur ad." />
      <CardWrapper imageUrl="/sponsors/mastercard.png" title="MasterCard" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut." />
      <CardWrapper imageUrl="/sponsors/the_walt_disney_company.png" title="The Walt Disney Company" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut." />
    </div>
  )
}


export default SponsorsCards;