/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */

import useStore from "@/app/store/store";
import deleteFromInterestedProducts from "@/server/deleteFromInterestedProducts";
import insertToInterestedProducts from "@/server/insertToInterestedProducts";

async function getProductDetails(id: string) {
  // console.log(category);

  // this is the category we want from api for now not filtering them

  const res = await fetch(`https://dummyjson.com/products/${id}`);

  return res.json();
}

type PageProps = {
  params: {
    productId: string;
  };
};

const productDetailsPage = async ({ params: { productId } }: PageProps) => {
  const product = await getProductDetails(productId);

  const { userProfile, interestedProduct } = useStore((state: any) => ({
    userProfile: state.userProfile,
    interestedProduct: state.interestedProduct,
  }));
  const isUser = userProfile.id;
  const isAlreadyIntested = interestedProduct.includes(product.id) as boolean;

  const manageInterestList = async () => {
    const productDetails = {
      id: Number(product.id),
      interested_by: userProfile.id as string,
    };
    if (isAlreadyIntested) {
      await deleteFromInterestedProducts(productDetails);
    } else {
      await insertToInterestedProducts(productDetails);
    }
  };

  return (
    <main className="flex min-h-[85vh] items-center justify-center gap-20 px-[2rem]">
      <article className="flex w-[45%] flex-col gap-20">
        <button className="self-start text-2xl text-[#Af7A0f]">
          {"<"} Back
        </button>
        <div className="flex flex-col gap-5">
          <h1 className="text-6xl font-bold text-[#1C1C1C]/90">
            {product.title}
          </h1>
          <p className="text-xl text-[#1c1c1c]/90">{product.description}</p>

          <div className="flex flex-col gap-3 text-2xl font-bold text-[#1c1c1c]/90">
            <p>
              From <span className="text-[#Af7A0f]">India</span>
            </p>
            <p>
              Posted By <span className="text-[#Af7A0f]">Manish Bisht</span>
            </p>
          </div>
          <div className="flex items-center gap-20">
            <button
              onClick={() => {
                if (isUser) {
                  manageInterestList();
                }
                // todo: navigate to login
              }}
              className={`w-fit rounded-full border border-[#Af7A0f] p-[.15rem] ${
                isUser ? `opacity-100` : `opacity-40`
              } `}
            >
              <p className="rounded-full bg-[#Af7A0f] px-[5rem] py-4 text-[#F4F1E7]">
                {isAlreadyIntested ? "DisInterest" : "Interest"}
              </p>
            </button>
            <div className="flex items-center text-2xl font-bold">
              <img
                className="w-10 rounded-full"
                src="https://randomuser.me/api/portraits/men/23.jpg"
                alt=""
              />
              <img
                className="mx-[-1rem] w-10 rounded-full"
                src="https://randomuser.me/api/portraits/men/2.jpg"
                alt=""
              />
              <img
                className="w-10 rounded-full"
                src="https://randomuser.me/api/portraits/women/49.jpg"
                alt=""
              />
              <p className="mx-5">
                <span className="mx-1 text-[#Af7A0f]">4.6k</span>Intrested
              </p>
            </div>
          </div>
        </div>
      </article>

      <div className="flex h-[75vh] w-[27vw] items-end self-end overflow-hidden rounded-t-full border-[3px] border-[#Af7A0f]">
        <img
          className="h-full w-full object-cover"
          src={product.thumbnail}
          alt=""
        />
      </div>
    </main>
  );
};

export default productDetailsPage;
