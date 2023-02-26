"use client";

import { noto_serif, open_sans } from "@/public/assets/fonts/font";
import signUpWithEmail from "@/server/signup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";
import useStore from "../store/store";

const SignupForm: FC = () => {
  const { setEmail, setPassword, setUsername, email, password, username } =
    useStore((state: any) => ({
      setEmail: state.setEmail,
      setPassword: state.setPassword,
      setUsername: state.setUsername,
      email: state.email,
      username: state.username,
      password: state.password,
    }));

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const payload = {
      email,
      password,
      username,
      id: "",
    };

    await signUpWithEmail(payload);
    router.push("/login");
  };

  return (
    <div
      className="flex flex-wrap content-center justify-center rounded-l-md bg-white"
      style={{ width: "34rem", height: "34rem" }}
    >
      <div className="w-80">
        <h1 className={` ${noto_serif.className} text-4xl font-semibold `}>
          Create Account
        </h1>
        <small className={` ${open_sans.className}  text-xm text-[#1C1C1C]`}>
          Please enter your details
        </small>

        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
          <div className="mb-3 flex flex-col gap-2">
            <>
              <label
                className={` ${open_sans.className}  block text-sm font-semibold`}
              >
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                className={` ${open_sans.className} block w-full rounded-md border border-gray-300 py-2 px-1.5 text-gray-500 focus:border-[#AF7A0F] focus:outline-none `}
                onChange={(e) => setUsername(e.target.value)}
              />
            </>
            <label
              className={` ${open_sans.className}  block text-sm font-semibold`}
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className={`${open_sans.className} block w-full rounded-md border border-gray-300 py-2 px-1.5 text-gray-500 focus:border-[#AF7A0F] focus:outline-none }`}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label
              className={`${open_sans.className}  mb-1 block text-xm font-semibold`}
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className={` ${open_sans.className} focus:outline-none} block w-full rounded-md border border-gray-300 py-2  px-1.5 text-gray-500 focus:border-[#AF7A0F]`}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3 flex flex-wrap content-center">
            <input
              id="remember"
              type="checkbox"
              className="mr-1 checked:bg-purple-700"
            />{" "}
            <label
              htmlFor="remember"
              className={` ${open_sans.className} font-semibold mr-auto text-xs`}
            >
              Remember for 30 days
            </label>
          </div>

          <div className="mb-3">
            <button
              type="submit"
              className={`${open_sans.className} uppercase mb-1.5 block w-full rounded-md bg-[#AF7A0F] px-2 py-1.5 text-center text-lg font-bold text-white`}
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center gap-2 text-center">
          <span
            className={`${open_sans.className} text-xs font-semibold text-gray-400 }`}
          >
            Already have an account?
          </span>

          <Link href="/login">
            <button
              className={`${noto_serif.className} text-base font-semibold text-[#AF7A0F] }`}
            >
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
