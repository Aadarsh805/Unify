import Image from "next/image";
import login_image from "public/assets/images/login_image.jpg";
import SignupForm from "../components/SignupForm";

const signupPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-wrap content-center justify-center bg-[#F4F1E7] py-10 ">
      <div className="flex shadow-md">
        <SignupForm />

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
