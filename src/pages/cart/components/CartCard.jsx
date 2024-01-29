import { hero } from "@assets/images";
import QuanityInput from "@components/QuanityInput";
import { Button, Image } from "@components/ui";
import { Link } from "react-router-dom";

const CartCard = ({ name, category, price, _id, images }) => {
  return (
    <div
      className="w-full max-w-full rounded-[10px] relative overflow-hidden flex "
      style={{
        boxShadow: "#2b34451a 0px 4px 16px",
      }}
    >
      <div className="flex items-center justify-center">
        <Image src={hero} alt={"hero"} className={"w-full max-w-[200px]"} />
      </div>
      {/* Cart Item Detials */}
      <div className="flex items-center justify-evenly gap-y-[16px] p-[16px] w-full">
        <Link
          to={`/product/${_id}`}
          className="text-[#2b3445] text-[20px] font-PoppinsBold"
        >
          <h1>{name}</h1>
        </Link>
        <span className="text-[#d23f57] text-[18px] md:text-[20px]">
          ${price}
        </span>

        <QuanityInput />
      </div>
    </div>
  );
};

export default CartCard;
