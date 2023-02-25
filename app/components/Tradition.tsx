import Image from "next/image";
import { FC } from "react";
import tradition_img from "public/assets/images/tradition.png";
import circle from "public/assets/images/circle.png";
import tea from "public/assets/images/tea.png";
import person_img from "public/assets/images/Rectangle 6.png";
import church_img from "public/assets/images/Rectangle 7.png";
import { noto_serif, open_sans } from "@/public/assets/fonts/font";

const Tradition: FC = () => {
  return (
    <div className=" mx-auto mt-24 ">
      <div className="relative">
        <h1
          className={`absolute left-[8.2em] text-center text-7xl font-bold leading-[1.2em] tracking-wide  text-[#1C1C1C] opacity-[.92]  ${open_sans.className}`}
        >
          Unity Through <br /> Traditions
        </h1>
        <div className="flex items-center justify-center gap-5">
          <Image
            src={tradition_img}
            alt="tradition_img"
            className="flex w-[25em] items-start justify-start"
          />
          <p
            className={`-mt-5 -ml-10 text-2xl text-[#1C1C1C] ${open_sans.className}`}
          >
            {" "}
            Even though items may have different price <br /> values, their{" "}
            <span className="text-[#AF7A0F]">traditional</span> value is always
            equal
          </p>
          <Image src={tea} alt="tea_img" className="w-[28em]" />
        </div>
        <Image
          src={circle}
          alt="circle_img"
          className="absolute right-[48em] -bottom-5"
        />
      </div>

      <div className="mt-5 ml-20 flex items-center justify-center gap-16 ">
        <div className="flex items-center gap-20">
          <div className="flex flex-col gap-10 ">
            <div className="flex flex-col items-start gap-2">
              <span
                className={`text-5xl font-bold text-[#1C1C1C] opacity-[.72] ${noto_serif.className}`}
              >
                50+
              </span>
              <p
                className={`text-xl uppercase text-[#1C1C1C] opacity-[.72] ${open_sans.className}`}
              >
                happy customers
              </p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <span
                className={`text-5xl font-bold text-[#1C1C1C] opacity-[.72] ${noto_serif.className}`}
              >
                200+
              </span>
              <p
                className={`text-xl uppercase text-[#1C1C1C] opacity-[.72] ${open_sans.className}`}
              >
                items exchanged
              </p>
            </div>
          </div>

          <Image src={person_img} alt="person_img" />
        </div>

        <div className="flex w-[275px] flex-col items-start gap-2">
          <h1
            className={`text-2xl font-bold text-[#1C1C1C] opacity-[.92] ${open_sans.className}`}
          >
            Unity through traditions
          </h1>
          <p className={`text-xl ${open_sans.className}`}>
            Explore diverse cultural treasures and connect with others
          </p>
        </div>

        <div className="flex items-center gap-10">
          <Image src={church_img} alt="church_img" />
          <div className="flex w-[275px] flex-col items-start gap-2">
            <h1
              className={`text-2xl font-bold text-[#1C1C1C] opacity-[.92] ${open_sans.className}`}
            >
              Unity through traditions
            </h1>
            <p className={`text-xl ${open_sans.className}`}>
              Explore diverse cultural treasures and connect with others
            </p>
          </div>
        </div>
      </div>

      <hr className=" mx-auto my-20 w-[1701px] border-[#1E1E1E] border-opacity-[16%] px-24 " />
    </div>
  );
};

export default Tradition;
