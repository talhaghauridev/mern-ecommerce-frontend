import { lazy, memo } from "react";
import { hero } from "@assets/images";
import { Button, Image } from "@components/ui";
import { Link } from "react-router-dom";
import { capitalize } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import useRemoveFromCart from "../hooks/useRemoveFromCart";
const QuanityInput = lazy(() => import("@components/QuanityInput"));
const CartCard = ({ name, category, price, _id, images }) => {
  const { handleRemoveItem } = useRemoveFromCart();
  return (
    <div
      className="w-full max-w-full rounded-[10px] relative overflow-hidden flex  sm:flex-row flex-col"
      style={{
        boxShadow: "#2b34451a 0px 4px 16px",
      }}
    >
      <div className="flex items-center justify-center">
        <Image
          src={hero}
          alt={"hero"}
          className={"w-full max-w-[180px] sm:max-w-[200px]"}
        />
      </div>
      {/* Cart Item Detials */}
      <div className="flex items-center justify-evenly sm:gap-y-[16px] gap-y-[10px]  p-[16px] w-full sm:flex-row flex-col">
        <Link
          to={`/product/${_id}`}
          className="text-[#2b3445] text-[20px] font-PoppinsBold"
        >
          <h1>{capitalize(String(name))}</h1>
        </Link>
        <span className="text-[#d23f57] text-[18px] md:text-[20px] font-PoppinsBold">
          ${price}
        </span>

        <QuanityInput value={1} decrement={() => {}} increment={() => {}} />
      </div>
      <RxCross2
        className="text-[28px] absolute top-[10px] right-[16px] text-[#2b3445] cursor-pointer"
        onClick={() => handleRemoveItem(_id)}
      />
    </div>
  );
};

export default memo(CartCard);
