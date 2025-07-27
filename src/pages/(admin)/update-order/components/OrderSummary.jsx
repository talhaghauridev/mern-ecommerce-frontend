import React, { memo, useMemo, useState } from "react";
import { Button, Select } from "@/components/ui";
import { ORDER_PROCESS } from "@/constants/index";

const OrderSummary = ({ handelUpdateOrder, order }) => {
   const shippiedOrder = useMemo(() => (order?.orderStatus === "Shipped" ? "Shipped" : ""), [order]);
   const [status, setStatus] = useState(shippiedOrder);

   console.log(status === order.orderStatus);
   return (
      <div className="bg-white shadow-primary rounded-[8px] relative md:max-w-[350px] overflow-hidden h-fit max-w-full mt-[28px] ">
         <div className="py-[40px] px-[30px] flex flex-col gap-y-[25px] md:gap-y-[40px]">
            <div className="flex flex-col gap-y-[14px]">
               <h1 className="font-bold text-[26px] text-gray-800 relative font-Sans text-center mb-[12px]">Process Order</h1>
            </div>
            <div>
               <Select
                  onChange={(e) => setStatus(e.target.value)}
                  value={status}>
                  <Select.Button>Choose Category</Select.Button>

                  {ORDER_PROCESS.map((item) => (
                     <Select.Option
                        value={item}
                        key={item}>
                        {item}
                     </Select.Option>
                  ))}
               </Select>
            </div>
            <Button
               className={`max-w-full flex items-center justify-center  `}
               onClick={() => status && status !== order?.orderStatus && handelUpdateOrder(status)}
               disabled={!status || status === order?.orderStatus}>
               Process
            </Button>
         </div>
      </div>
   );
};

export default memo(OrderSummary);
