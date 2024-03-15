import mainLogo from "@/assets/images/brand-icon/white-logo.png";
import facebookLogo from "@/assets/images/socila-icon/facebook.png";
import linkedInLogo from "@/assets/images/socila-icon/linked-in.png";
import WWLogo from "@/assets/images/socila-icon/world-wide.png";
import x from "@/assets/images/socila-icon/x.png";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-[#111D5E] text-white  grid justify-items-center grid-flow-row items-center">
      <Image src={mainLogo} alt="logo" className="py-16" />
      <div className="grid grid-flow-col justify-items-center">
        <Link href="#" className="text-white hover:underline">
          <Image className="w-6" src={x} alt="x" />
        </Link>
        <Link href="#" className="text-white ml-4">
          <Image className="w-6" src={linkedInLogo} alt="linked-in" />
        </Link>
        <Link href="#" className="text-white ml-4">
          <Image className="w-6" src={facebookLogo} alt="linked-in" />
        </Link>
        <Link href="#" className="text-white ml-4">
          <Image className="w-6" src={WWLogo} alt="world-wide" />
        </Link>
      </div>
      <h3 className="my-5">© 2024 Lemon hive. All rights reserved.</h3>
    </footer>
  );
};

export default Footer;
