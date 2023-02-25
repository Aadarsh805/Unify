/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="flex items-center gap-5 px-[3rem] text-xl">
        <img
          className="w-[10rem] rounded-full"
          src="https://randomuser.me/api/portraits/men/23.jpg"
          alt=""
        />
        <div>
          <h1 className="text-3xl font-bold text-[#Af7A0f]">Manish bisht</h1>
          <p className="text-xl text-[#1c1c1c]/90">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
            quo!
          </p>
        </div>
      </div>
      <div className="flex p-[3rem] text-xl">
        <div className="flex flex-col gap-5 border-r-[3px] border-[#1c1c1c]/60 px-10">
          <Link
            href="/account"
            className="border-l-4  border-[#AF7A0F] px-3 text-[#AF7A0F]"
          >
            Products
          </Link>
          <Link
            href="/account/match"
            className="border-l-4  border-[#AF7A0F] px-3 text-[#AF7A0F]"
          >
            Matches
          </Link>
          <Link
            href="/account/interested"
            className="border-l-4  border-[#AF7A0F] px-3 text-[#AF7A0F]"
          >
            Interested
          </Link>
        </div>
        {children}
      </div>
    </main>
  );
}
