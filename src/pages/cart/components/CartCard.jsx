import { lazy, memo } from "react";
import { Link } from "react-router-dom";
import { capitalize } from "@mui/material";
import { Image } from "@/components/ui";
import { RxCross2 } from "react-icons/rx";
import { useCounter } from "@/hooks/hook";
import useRemoveFromCart from "../hooks/useRemoveFromCart";
import { localStorageItem, useUpdateQuantity } from "../hooks/useUpdateQuantity";
const QuantityInput = lazy(() => import("@/components/QuantityInput"));
const CartCard = ({ name, price, _id, images, stock }) => {
   const { handleRemoveItem } = useRemoveFromCart(_id);
   const { handleUpdateQuantity } = useUpdateQuantity();
   const { count, decrement, increment } = useCounter(localStorageItem(_id)?.quantity || 1, 1, stock);

   //Handle Quantity Change
   const handleQuantityChange = (operation) => {
      if (operation === "increment") {
         if (count >= stock) return;
         increment();
         handleUpdateQuantity(_id, count + 1);
      } else if (operation === "decrement") {
         if (count <= 1) return;
         decrement();
         handleUpdateQuantity(_id, count - 1);
      }
   };

   return (
      <div
         className="w-full rounded-[10px] relative overflow-hidden flex  sm:flex-row flex-col max-w-[270px] sm:max-w-full"
         style={{
            boxShadow: "#2b34451a 0px 4px 16px"
         }}>
         <div className="flex items-center justify-center">
            <Image
               src={images[0]?.url}
               alt={name}
               className={" max-w-full h-[120px] w-[200px] object-contain"}
            />
         </div>
         {/* Cart Item Detials */}
         <div className="flex items-center justify-evenly sm:gap-y-[16px] gap-y-[10px]  p-[16px] w-full sm:flex-row flex-col">
            <Link
               to={`/product/${_id}`}
               className="text-[#2b3445] text-[20px] font-PoppinsBold">
               <h1>{capitalize(String(name))}</h1>
            </Link>
            <span className="text-[#d23f57] text-[18px] md:text-[20px] font-PoppinsBold">${price}</span>

            <QuantityInput
               value={count}
               decrement={() => {
                  handleQuantityChange("decrement");
               }}
               increment={() => {
                  handleQuantityChange("increment");
               }}
            />
         </div>
         <RxCross2
            className="text-[26px] absolute top-[10px] right-[16px] text-[#2b3445] cursor-pointer"
            onClick={() => handleRemoveItem(_id)}
         />
      </div>
   );
};

export default memo(CartCard);
