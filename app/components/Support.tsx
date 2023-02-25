import { FC } from "react";
import downArrow from "public/assets/images/downArrow.png";
import lineDesign from "public/assets/images/lineDesign.png";
import Image from "next/image";
import { noto_serif, open_sans } from "@/public/assets/fonts/font";

const Support: FC = () => {
  return (
    <div className="w-[1297px] flex mx-auto p-2 border-4 border-[#AF7A0F] rounded-2xl relative">
      <div className="bg-[#BF8C25] bg-opacity-[.47] w-full p-8 rounded-2xl">
        <div className="flex flex-col items-start gap-2 w-[40em]">
          <h1 className={`text-5xl font-bold text-[#1C1C1C] opacity-[.92] leading-[1.2em] capitalize ${noto_serif.className}`}>Support Connecting Cultures and Preserving Traditions</h1>
          <div className="flex items-center gap-5">
            <Image src={downArrow} alt="downArrow_img" />
            <p className={`text-3xl font-medium text-[#232323] opacity-[.92] capitalize ${noto_serif.className}`}>
              Your contribution makes a difference in preserving cultural
              heritage for future generations.
            </p>
          </div>
          <button className={`bg-[#AF7A0F] text-[#F4F1E7] text-xl font-bold uppercase px-24 py-4 rounded-md ${open_sans.className}`}>Donate</button>
        </div>

        <div className="absolute -top-[5.5rem] -right-[35px] ">
          <Image src={lineDesign} alt="lineDesign_img" className="w-[25em]" />
        </div>
      </div>
    </div>
  );
};

export default Support;
