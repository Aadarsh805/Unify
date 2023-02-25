"use client";

import ProductModalImage from "@/app/components/ProductModalImage";
import { useState } from "react";

type Props = {
  setShowModal: any;
};

function Modal({ setShowModal }: Props) {
  const [itemInfo, setItemInfo] = useState({
    name: "",
    description: "",
    category: "",
    image: "",
    culture: "",
  });
  const [img_url, setEventImageUrl] = useState("");

  const handleItemInfoChange = (e: any) => {
    setItemInfo({
      ...itemInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(itemInfo);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div className="flex w-full max-w-lg flex-col rounded-lg border-[3px] border-[#Af7A0f] bg-white p-5">
          <button
            onClick={() => setShowModal(false)}
            className="my-3 self-end bg-green-300"
          >
            close
          </button>
          <form className="" onSubmit={(e) => handleSubmit(e)}>
            <div className="-mx-3 mb-6 flex flex-wrap">
              <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                <label
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  className="mb-3 block w-full appearance-none rounded border border-red-500 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                  id="title"
                  type="text"
                  name="title"
                  placeholder="Name of item"
                  onChange={(e) => handleItemInfoChange(e)}
                />
                {/* <p className="text-xs italic text-red-500">
                Please fill out this field.
              </p> */}
              </div>
              <div className="w-full px-3 md:w-1/2">
                <label
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                  htmlFor="category"
                >
                  Category
                </label>
                <select
                  className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                  id="category"
                  name="category"
                  onChange={(e) => handleItemInfoChange(e)}
                >
                  <option value="option1">option 1</option>
                  <option value="option2">option 2</option>
                  <option value="option3">option 3</option>
                </select>
              </div>
              <div className="w-full px-3">
                <label
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                  id="description"
                  name="description"
                  rows={5}
                  placeholder="Information about the item"
                  onChange={(e) => handleItemInfoChange(e)}
                />
              </div>
              <div className="w-full px-3">
                <label
                  className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                  htmlFor="culture"
                >
                  culture
                </label>
                <input
                  className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                  id="culture"
                  name="culture"
                  placeholder="culture"
                  onChange={(e) => handleItemInfoChange(e)}
                />
              </div>

              <div className="mx-3 flex w-full items-center justify-center border-2 border-dashed border-[#Af7A0f] p-4">
                <ProductModalImage
                  url={img_url}
                  onUpload={(url) => {
                    setEventImageUrl(url);
                  }}
                />
              </div>
            </div>
            <button className="w-full self-center bg-red-500" type="submit">
              donate
            </button>
          </form>
        </div>
      </div>
      <div className="opacity-55 fixed inset-0 z-40 bg-black/50"></div>
    </>
  );
}

export default Modal;
