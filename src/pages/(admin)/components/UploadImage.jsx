import { Image } from "@components/ui";
import React, { useCallback } from "react";
import { RxCross2 } from "react-icons/rx";

const UploadImage = ({ images, setImages }) => {
  const handleRemove = useCallback(
    (img) => {
      setImages((pve) => [...pve.filter((i) => i !== img)]);
    },
    [images]
  );
  console.log(images);
  return (
    <div className="flex items-center justify-between">
      {images?.map((image, index) => (
        <div className="relative overflow-hidden">
          <RxCross2
            className="absolute text-[20px] cursor-pointer right-0"
            onClick={() => handleRemove(image)}
          />
          <Image
            key={index}
            className="w-[50px] h-[50px] max-w-[50px] object-contain"
            src={image?.url || image}
            alt={`Image ${image?.public_id || index}`}
          />
        </div>
      ))}
    </div>
  );
};

export default UploadImage;
