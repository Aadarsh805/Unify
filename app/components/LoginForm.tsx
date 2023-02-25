"use client";

import { open_sans } from "@/public/assets/fonts/font";
import signInWithEmail from "@/server/signIn";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import useStore from "../store/store";

const LoginForm: FC = () => {
  const [invalidLogin, setInvalidLogin] = useState<boolean>(false);
  const { setEmail, setPassword, email, password, setUserProfile } = useStore(
    (state: any) => ({
      setEmail: state.setEmail,
      setPassword: state.setPassword,
      email: state.email,
      password: state.password,
      setUserProfile: state.setUserProfile,
    })
  );
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const payload = {
      email,
      password,
    };
    try {
      const user = await signInWithEmail(payload);
      setUserProfile(user);
      // router.push("/explore");
    } catch (error: any) {
      setInvalidLogin(true);
    }
  };

  return (
    <div
      className="flex flex-wrap content-center justify-center rounded-l-md bg-white"
      style={{ width: "34rem", height: "34rem" }}
    >
      <div className="w-72">
        <h1 className={`text-xl font-semibold ${open_sans.className}`}>
          Welcome back
        </h1>
        <small className={`text-xs text-[#1C1C1C] ${open_sans.className}}`}>
          Please enter your details
        </small>
        {invalidLogin && (
          <p className="font font-medium text-rose-600">Invalid credentials</p>
        )}
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
          <div className="mb-3 flex flex-col gap-2">
            <label
              className={` block text-xs font-semibold ${open_sans.className}}`}
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className={`block w-full rounded-md border border-gray-300 py-1 px-1.5 text-gray-500 focus:border-[#AF7A0F] focus:outline-none ${open_sans.className}}`}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label
              className={`mb-1 block text-xs font-semibold ${open_sans.className}}`}
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className={`block w-full rounded-md border border-gray-300 py-1 px-1.5  text-gray-500 focus:border-[#AF7A0F] focus:outline-none ${open_sans.className}}`}
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
              className={`mr-auto text-xs font-semibold ${open_sans.className}}`}
            >
              Remember for 30 days
            </label>
          </div>

          <div className="mb-3">
            <button
              type="submit"
              className={`mb-1.5 block w-full rounded-md bg-[#AF7A0F] px-2 py-1.5 text-center text-lg font-semibold text-white ${open_sans.className}}`}
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center gap-2 text-center">
          <span
            className={`text-xs font-semibold text-gray-400 ${open_sans.className}}`}
          >
            {`Don't have an account?`}
          </span>

          <Link href="/signup">
            <button
              className={`text-base font-semibold text-[#AF7A0F] ${open_sans.className}}`}
            >
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
