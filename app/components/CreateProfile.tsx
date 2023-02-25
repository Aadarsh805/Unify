import { FC } from "react";
import dog from "public/assets/images/dog.png";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { noto_serif, open_sans } from "@/public/assets/fonts/font";
import Link from "next/link";
import MysteryBox from "./MysteryBox";

const CreateProfile: FC = () => {
  return (
    <div className="relative z-20">
      <div className="flex items-center justify-center gap-24 pb-[35rem] ">
        <Image src={dog} alt="dog_img" className="w-[24em]" />
        <div className="flex flex-col items-start  gap-8">
          <h1
            className={`text-7xl font-bold leading-[1.2em] ${noto_serif.className}`}
          >
            Share Your <span className="text-[#D21F1B]">Culture:</span> <br />{" "}
            Create Your Profile and <br /> Showcase Your <br />
            <span className="text-[#D21F1B]">Traditional</span> Treasures
          </h1>

          <Link href={"account"} className="flex cursor-pointer items-center ">
            <span
              className={`rounded-full bg-[#D21F1B] px-9 py-4 text-lg font-bold uppercase text-[#F4F1E7] ${open_sans.className}`}
            >
              create your profile
            </span>
            <span className="flex h-16 w-16  items-center justify-center rounded-full border-2 border-[#D21F1B] font-bold">
              <FiArrowUpRight
                style={{ fontWeight: 700 }}
                className="cursor text-2xl font-bold text-[#D21F1B] "
              />
            </span>
          </Link>
        </div>
      </div>
      <hr className=" mx-auto mb-32 w-[1701px] border-[#1E1E1E] border-opacity-[16%] px-24" />

      <MysteryBox />
    </div>
  );
};

export default CreateProfile;
