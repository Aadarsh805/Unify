"use client";

import supabase from "@/server/supabase";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

type ProductModalImageProps = {
  url: string;
  onUpload: (value: string) => void;
};

const ProductModalImage: FC<ProductModalImageProps> = ({ url, onUpload }) => {
  const [eventimageUrl, setEventImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (url) downloadImage(url);
    console.log(url, "rurl");
  }, [url]);

  async function downloadImage(path: any) {
    try {
      const { data, error } = await supabase.storage
        .from("product-images")
        .download(path);
      if (error) {
        throw error;
      }
      const url = URL.createObjectURL(data);
      setEventImageUrl(url);
    } catch (error: any) {
      console.log("Error downloading image: ", error.message);
    }
  }

  async function uploadEventImage(event: any) {
    try {
      setUploading(true);

      if (!event.target.files || event.target.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error: uploadError } = await supabase.storage
        .from("product-images")
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }
      onUpload(filePath);
    } catch (error: any) {
      alert(error?.message);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div>
      {eventimageUrl ? (
        <Image
          src={eventimageUrl}
          alt="Product Image"
          className="rounded border-none object-cover shadow "
          width="300"
          height="300"
        />
      ) : uploading ? (
        "Uploading ..."
      ) : (
        <input
          type="file"
          name="image"
          id="image"
          onChange={uploadEventImage}
        />
      )}
    </div>
  );
};

export default ProductModalImage;
