import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="text-xl flex gap-16 items-center px-[3rem]">
        <img
          className="rounded-full w-[10rem]"
          src="https://randomuser.me/api/portraits/men/23.jpg"
          alt=""
        />
        <div>
          <h1 className="text-3xl text-[#Af7A0f] font-bold">Manish bisht</h1>
          <p className="text-xl text-[#1c1c1c]/90">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae,
            quo!
          </p>
        </div>
      </div>
      <div className="flex text-xl p-[3rem]">
        <div className="flex flex-col gap-5 px-10 border-[#1c1c1c]/60 border-r-[3px]">
          <Link
            href="/manish"
            className="text-[#AF7A0F]  border-[#AF7A0F] border-l-4 px-3"
          >
            profile
          </Link>
        </div>
        {children}
      </div>
    </main>
  );
}
