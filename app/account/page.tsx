"use client";

import Modal from "@/components/account/Modal";
import { useState } from "react";

const accountPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="px-10">
      <div className="flex flex-wrap gap-4">
        <button
          className="float-left flex h-[15rem] w-[15rem] items-center justify-center rounded-md border-[3px] border-dashed border-[#Af7A0f]
      "
          onClick={() => setShowModal(true)}
        >
          <span className="text-3xl">+</span>
          Add a item
        </button>
        <div className="h-[15rem] w-[15rem] overflow-hidden rounded-md border-[3px] border-[#Af7A0f]">
          <img
            className="h-full w-full object-cover"
            src="https://fastly.picsum.photos/id/14/536/354.jpg?hmac=p8F6lcJ45rfP_j7N_J8IqhUE9-iUu1deD1BhGiLoV2Q"
            alt=""
          />
        </div>
      </div>
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
    </div>
  );
};

export default accountPage;
