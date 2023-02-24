import Link from "next/link";

const explorePage = () => {
  return (
    <main className="flex min-h-screen items-center gap-[5rem] px-[4rem]">
      <article className="flex max-w-[25rem] flex-col gap-5">
        <h1 className="text-6xl font-bold text-[#1C1C1C]/90">
          Explore Our <span className="text-[#AF7A0F]">Diverse</span> Collection
        </h1>
        <div className="flex items-center gap-3">
          <img className="w-10" src="/decoration/decoration1.svg" alt="" />
          <p className="text-xl text-[#1c1c1c]/90">
            Discover a World of Treasures Across All Categories
          </p>
        </div>
        <Link
          className="w-fit rounded-sm bg-[#Af7A0f] px-[6rem] py-3 text-[#F4F1E7]"
          href="/"
        >
          Donate
        </Link>
      </article>
      <div className="flex gap-10">
        {/* card */}
        <div className="flex h-[22rem] max-w-[17rem] flex-col overflow-hidden rounded-t-[15rem] rounded-b-[.3rem] border-[3px] border-[#Af7A0f]">
          <img
            className="h-full w-full object-cover"
            src="https://fastly.picsum.photos/id/196/536/354.jpg?hmac=C1zNgezDOBJP6WDzRvqD3NLsZwtjX29dlcSShIUFPEc"
            alt=""
          />
          <button className="bg-[#Af7A0f] py-3 text-[#F4F1E7] ">
            Intrested
          </button>
        </div>
        <div className="flex h-[22rem] max-w-[17rem] flex-col overflow-hidden rounded-t-[15rem] rounded-b-[.3rem] border-[3px] border-[#Af7A0f]">
          <img
            className="h-full w-full object-cover"
            src="https://fastly.picsum.photos/id/196/536/354.jpg?hmac=C1zNgezDOBJP6WDzRvqD3NLsZwtjX29dlcSShIUFPEc"
            alt=""
          />
          <button className="bg-[#Af7A0f] py-3 text-[#F4F1E7] ">
            Intrested
          </button>
        </div>
      </div>
    </main>
  );
};

export default explorePage;
