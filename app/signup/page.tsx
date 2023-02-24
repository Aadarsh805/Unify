import Image from "next/image";
import LoginForm from "../components/LoginForm";
import login_image from "public/assets/images/login_image.jpg";

const signupPage = () => {
  return (
    <div className="flex  w-full flex-wrap content-center justify-center bg-[#F4F1E7] py-10 " style={{ height: "calc(100vh - 113px)" }}>
      <div className="flex shadow-md">
        <LoginForm />

        <div
          className="flex flex-wrap content-center justify-center rounded-r-md"
          style={{ width: "30rem", height: "34rem" }}
        >
          <Image
            className="h-full w-full rounded-r-md bg-cover bg-center bg-no-repeat"
            src={login_image}
            alt="login_img"
          />
        </div>
      </div>
    </div>
  );
};

export default signupPage;
