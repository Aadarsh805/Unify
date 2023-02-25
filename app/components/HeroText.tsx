import type { FC } from "react";
import earth from "public/assets/images/earth.png";
import hand from "public/assets/images/hand.png";
import Image from "next/image";
import { open_sans } from "@/public/assets/fonts/font";
import { noto_serif } from "@/public/assets/fonts/font";

type HeroTextProps = {};

const HeroText: FC<HeroTextProps> = () => {
  return (
    <>
      <div className="my-20 flex items-center justify-between px-14">
        <div className="relative h-[210px] w-[256px] border-2 border-[#1E1E1E] border-opacity-[16%]">
          <Image
            src={earth}
            alt="earth_img"
            className=" absolute -top-20 left-1/2 -translate-x-1/2 "
          />
          <div className="absolute bottom-5 right-1/2 w-full translate-x-1/2 text-center">
            <span
              className={`text-5xl font-bold text-[#1C1C1C] opacity-[.72] ${noto_serif.className}`}
            >
              20+
            </span>
            <p
              className={`mt-2 font-medium uppercase text-[#1C1C1C] opacity-[.72] ${open_sans.className}`}
            >
              cultures represented
            </p>
          </div>
        </div>
        <div className="mx-auto w-[850px] text-center">
          <h1
            className={`text-5xl font-medium text-[#1C1C1C] opacity-[.92] ${open_sans}`}
          >
            Uniting Cultures Through the <br /> Exchange of Traditional
            Treasures
          </h1>
          <p className="mt-5 text-[20px]  leading-[27px] text-[#1C1C1C] opacity-[.57] ">
            Discover a world of cultural treasures with our platform. Share and
            showcase your traditional items while exploring other users'
            cultural artifacts. From ancestral heirlooms to souvenirs from
            exotic travels, there's always something unique and fascinating to
            discover. Expand your horizons and connect with people from all
            around the world.
          </p>
        </div>
        <div className="flex h-[182px] w-[161px] flex-col items-center justify-center rounded-b-full border-2 border-[#1E1E1E] border-opacity-[16%] ">
          <Image src={hand} alt="hand_img" />
          <span
            className={`mt-2 text-center text-xs font-bold uppercase text-[#1C1C1C]  opacity-[.72] ${open_sans.className}`}
          >
            our cultural <br /> blog
          </span>
        </div>
      </div>
      <hr className=" mx-auto w-[1701px] border-[#1E1E1E] border-opacity-[16%] px-24 " />
    </>
  );
};

export default HeroText;
