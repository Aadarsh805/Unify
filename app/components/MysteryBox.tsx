import { FC } from "react";
import mysteryBox_img from "public/assets/images/mysteryBox2.png";
import Image from "next/image";

const MysteryBox: FC = () => {
  return (
    <div className="absolute -bottom-10 w-full -z-20">
      <Image
        src={mysteryBox_img}
        alt="mysteryBox_img"
        className="w-full pb-24"
      />
    </div>
  );
};

export default MysteryBox;
