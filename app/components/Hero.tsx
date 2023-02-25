import { playfair_display } from "@/public/assets/fonts/font";
import Image from "next/image";
import Link from "next/link";
import curveText from "public/assets/images/hero-text.png";
import hero from "public/assets/images/hero3.png";
import star from "public/assets/images/star.png";
import { BsGlobe2 } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="relative w-full ">
      <Image src={star} alt="star" className="absolute top-0 left-[25em]" />
      <Image
        src={star}
        alt="star"
        className="absolute top-[10em] right-[35em]"
      />
      <Image src={hero} alt="hero_img" className="w-full" />

      <div className="absolute top-14 right-1/2 translate-x-1/2">
        <Image src={curveText} alt="curve_text" />

        <div className="absolute right-1/2 top-1/2 flex h-20 w-20 translate-x-1/2 items-center justify-center rounded-b-full bg-[#D21F1B] text-white">
          <BsGlobe2 className="text-3xl" />
        </div>
      </div>

      <h1
        className={`absolute right-1/2 top-[4em] translate-x-1/2 text-center text-[64px] font-bold text-[#1C1C1C] ${playfair_display.className}`}
      >
        Connecting <br /> Cultures, Trading <br /> Treasures
      </h1>

      <Link href={"/explore/all"}>
        <button className="absolute right-[50%] bottom-[10px] aspect-square w-[7%] translate-x-1/2 rounded-full bg-[#AF7A0F] text-[#F4F1E7]">
          Explore
        </button>
      </Link>
    </div>
  );
};

export default Hero;
