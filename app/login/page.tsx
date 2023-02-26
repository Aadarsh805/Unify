import Image from "next/image";
import login_image from "public/assets/images/login_image.jpg";
import LoginForm from "../components/LoginForm";

const loginPage = () => {
  return (
    <div
      className="flex  w-full flex-wrap content-center justify-center bg-[#F4F1E7] py-10 "
      style={{ height: "calc(100vh - 113px)" }}
    >
      <div className="flex shadow-md">
        <LoginForm />

        <div
          className="flex flex-wrap content-center justify-center rounded-r-md relative"
          style={{ width: "30rem", height: "34rem" }}
        >
          <Image
            className="h-full w-full rounded-r-md bg-cover bg-center bg-no-repeat"
            src={login_image}
            alt="login_image"
          />
           <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-black opacity-60 z-20">
            <p className="text-center text-lg font-bold text-white text-opacity-100 z-50 w-[20em] ">
              "Step into our world of cultural exchange and discover hidden
              treasures"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loginPage;
