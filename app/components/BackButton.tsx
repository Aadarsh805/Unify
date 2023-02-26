"use client";

import { useRouter } from "next/navigation";

type Props = {};

function BackButton({}: Props) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="self-start text-2xl text-[#Af7A0f]"
    >
      {"<"} Back
    </button>
  );
}

export default BackButton;
