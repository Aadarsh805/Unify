import Image from "next/image";
import hero from "public/assets/images/hero3.png";
import curveText from "public/assets/images/hero-text.png";
import star from "public/assets/images/star.png";
import { BsGlobe2 } from "react-icons/bs";
import { playfair_display } from "@/public/assets/fonts/font";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full relative ">
      <Image src={star} alt="star" className="absolute top-0 left-[25em]" />
      <Image
        src={star}
        alt="star"
        className="absolute top-[10em] right-[35em]"
      />
      <Image src={hero} alt="hero_img" className="w-full" />

      <div className="absolute top-14 right-1/2 translate-x-1/2">
        <Image src={curveText} alt="curve_text" />

        <div className="absolute right-1/2 translate-x-1/2 top-1/2 bg-[#D21F1B] text-white w-20 h-20 flex items-center justify-center rounded-b-full">
          <BsGlobe2 className="text-3xl" />
        </div>
      </div>

      <h1
        className={`absolute right-1/2 translate-x-1/2 text-center top-[4em] text-[64px] text-[#1C1C1C] font-bold ${playfair_display.className}`}
      >
        Connecting <br /> Cultures, Trading <br /> Treasures
      </h1>

      <Link href={"/explore"}>
        <button className="bg-[#AF7A0F] text-[#F4F1E7] absolute w-[7%] aspect-square rounded-full right-[50%] translate-x-1/2 bottom-[10px]">
          Explore
        </button>
      </Link>
    </div>
  );
};

export default Hero;
