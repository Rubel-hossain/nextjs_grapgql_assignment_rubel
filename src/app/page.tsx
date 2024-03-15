import HeroArea  from "@/components/HeroArea";
import { Conferences } from "./Conferences";
import Sponsor from "@/components/Sponsor";


export default function Home() {
  return (
    <main >
      <HeroArea />
      <Conferences />
      <Sponsor />
    </main>
  )
}
