import Image from "next/image";
import login_image from "public/assets/images/login_image.jpg";
import LoginForm from "../components/LoginForm";

const loginPage = () => {
  return (
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-[#F4F1E7] py-10 ">
      <div className="flex shadow-md">
        <LoginForm /> 

        <div
          className="flex flex-wrap content-center justify-center rounded-r-md"
          style={{ width: "30rem", height: "34rem" }}
        >
          <Image
            className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
            src={login_image}
            alt="login_image"
          />
        </div>
      </div>
    </div>
  );
};

export default loginPage;
