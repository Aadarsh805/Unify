import { noto_serif, open_sans } from "@/public/assets/fonts/font";
import Image from "next/image";
import downArrow from "public/assets/images/downArrow.png";
import lineDesign from "public/assets/images/lineDesign.png";
import { FC } from "react";

const Support: FC = () => {
  return (
    <div className="relative mx-auto flex w-[1297px] rounded-2xl border-4 border-[#AF7A0F] p-2">
      <div className="w-full rounded-2xl bg-[#BF8C25] bg-opacity-[.47] p-8">
        <div className="flex w-[40em] flex-col items-start gap-2">
          <h1
            className={`text-5xl font-bold capitalize leading-[1.2em] text-[#1C1C1C] opacity-[.92] ${noto_serif.className}`}
          >
            Support Connecting Cultures and Preserving Traditions
          </h1>
          <div className="flex items-start gap-5">
            <Image
              src={downArrow}
              alt="downArrow_img"
              className="w-[7em]"
            />
            <p
              className={`text-3xl font-medium capitalize text-[#232323] opacity-[.92] ${noto_serif.className}`}
            >
              Your contribution makes a difference in preserving cultural
              heritage for future generations.
            </p>
          </div>
          <button
            className={`rounded-md bg-[#AF7A0F] px-24 py-4 text-xl font-bold uppercase text-[#F4F1E7] ${open_sans.className}`}
          >
            Donate
          </button>
        </div>

        <div className="absolute -top-[5.5rem] -right-[35px] ">
          <Image src={lineDesign} alt="lineDesign_img" className="w-[25em]" />
        </div>
      </div>
    </div>
  );
};

export default Support;
