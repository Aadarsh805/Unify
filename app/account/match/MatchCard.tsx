import Image from "next/image";
import { FC } from "react";
import { IoSwapHorizontalOutline } from "react-icons/io5";
import tradition from "public/assets/images/tradition.png";

const MatchCard: FC = () => {
  return (
    <div className="flex items-center border-2 border-[#Af7A0f] p-5">
      <div className="h-[15rem] w-[15rem] overflow-hidden rounded-md border-[3px] border-[#Af7A0f]">
        <Image
          className="h-full w-full object-cover"
          src={tradition}
          alt="matchCard_img"
        />
      </div>
      <div>
        <IoSwapHorizontalOutline className="text-4xl" />
      </div>

      <div className="h-[15rem] w-[15rem] overflow-hidden rounded-md border-[3px] border-[#Af7A0f]">
        <Image
          className="h-full w-full object-cover"
          src={tradition}
          alt="matchCard_img"
        />
      </div>
    </div>
  );
};

export default MatchCard;
