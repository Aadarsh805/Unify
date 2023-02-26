import { noto_serif, open_sans } from "@/public/assets/fonts/font";
import Image from "next/image";
import Link from "next/link";
import footer_img from "public/assets/images/footer2.png";
import { FC } from "react";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";

const Footer: FC = () => {
  const links = [
    {
      id: 1,
      icon: <BsGithub />,
      url: "https://github.com/Aadarsh805/Unify",
    },
    {
      id: 1,
      icon: <AiOutlineTwitter />,
      url: "https://twitter.com/Aadarsh805",
    },
    {
      id: 1,
      icon: <AiFillLinkedin />,
      url: "/",
    },
  ];

  return (
    <div className="relative mt-48">
      <Image
        src={footer_img}
        alt="footer_img"
        className="w-full object-cover object-center"
      />

      <div className="absolute inset-0 mt-28 flex flex-col items-start gap-3 px-48">
        <div className="flex w-full items-center justify-between">
          <Link href={"/"}>
            <h1
              className={`cursor-pointer text-[64px] font-bold text-white  ${noto_serif.className} `}
            >
              Unify
            </h1>
          </Link>
          <Link href={"https://github.com/Aadarsh805/Unify"}>
            <div className=" flex cursor-pointer items-center gap-3 rounded-lg border border-[#AF7A0F] px-5 py-2">
              <p
                className={`text-[22px] uppercase text-[#AF7A0F] ${open_sans.className}`}
              >
                star us
              </p>
              <div>
                <BsGithub className="text-3xl text-[#AF7A0F]" />
              </div>
            </div>
          </Link>
        </div>

        <div className=" flex w-[90%] items-center justify-between ">
          <p
            className={`w-[20em] text-[22px] text-[#F6F6F6] ${open_sans.className}`}
          >
            Even though items may have different price values, their{" "}
            <span className="text-[#AF7A0F]">Traditional</span> value is always
            equal
          </p>

          <div>
            <p
              className={`mb-3 text-[22px] text-[#F6F6F6]  ${open_sans.className}`}
            >
              Subscibe to Our Newsletter
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Your email"
                className={`rounded-lg border border-[#AF7A0F] bg-transparent px-3 py-2 text-[#F6F6F6] opacity-[.52] outline-none ${open_sans.className}`}
              />
              <div className="flex h-11 w-12 items-center justify-center rounded-lg bg-[#AF7A0F]">
                <FiArrowUpRight
                  style={{ fontWeight: 700 }}
                  className="cursor text-2xl font-bold text-[white]  "
                />
              </div>
            </div>
          </div>

          <div>
            <p
              className={`mb-3 text-[22px] text-[#F6F6F6] ${open_sans.className}`}
            >
              Follow us
            </p>

            <div className="flex items-center gap-4">
              {links.map((link) => (
                <>
                  <Link href={link.url}>
                    <span className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#AF7A0F]  text-2xl">
                      {link.icon}
                    </span>
                  </Link>
                </>
              ))}
            </div>
          </div>
        </div>

        <hr className=" mx-auto my-10 w-full border-2 border-[#DADADA] border-opacity-[.24] px-24 " />

        <div className="flex w-full items-center justify-between">
          <p className={` text-[22px] text-[#F6F6F6] ${open_sans.className}`}>
            Open source | MIT License 2023{" "}
            <span className={`text-[#AF7A0F] ${noto_serif.className}`}>
              Unify
            </span>
          </p>
          <div>
            <p className={`text-[22px] text-[#F6F6F6] ${open_sans.className}`}>
              UI Credits:{" "}
              <Link
                href="https://dribbble.com/shots/19187096-Web-site-design-landing-page-home-page-ui"
                className="text-[#AF7A0F]"
              >
                Halo Lab
              </Link>
            </p>
          </div>

          <div className="flex items-center gap-10">
            <p className={` text-[22px] text-[#F6F6F6] ${open_sans.className}`}>
              Privacy Policy
            </p>
            <p className={` text-[22px] text-[#F6F6F6] ${open_sans.className}`}>
              Terms and Conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
