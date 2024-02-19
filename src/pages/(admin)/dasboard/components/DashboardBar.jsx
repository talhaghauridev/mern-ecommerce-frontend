import React, { memo } from "react";
import { FaRegListAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { MdOutlinePriceChange } from "react-icons/md";
import { SiProducthunt } from "react-icons/si";
import useFetchProducts from "../../products/hooks/useFetchProducts";
import useFetchUsers from "./../../users/hooks/useFetchUsers";
import useFetchOrders from "../../orders/hooks/useFetchOrders";
import { Skeleton } from "@mui/material";
const DashboardBar = () => {
  const { products, totalProductsPrice } = useFetchProducts();
  const { users } = useFetchUsers();
  const { orders } = useFetchOrders();

  return (
    <section id="dashboard">
      <div class="dashboard_container flex  w-full justify-between gap-[15px]">
        <DashboardBarCard
          icon={SiProducthunt}
          name={"Products"}
          number={products?.length}
        />
        <DashboardBarCard icon={FaUsers} name={"User"} number={users?.length} />
        <DashboardBarCard
          icon={FaRegListAlt}
          name={"Orders"}
          number={orders?.length}
        />
        <DashboardBarCard
          icon={MdOutlinePriceChange}
          name={"Total Amount"}
          number={totalProductsPrice}
        />
      </div>
    </section>
  );
};

export default memo(DashboardBar);

const DashboardBarCard = memo(({ name, number, icon: Icon }) => {
  return (
    <div className="rounded-[10px] bg-[white] w-full max-w-[230px] h-[130px] sm:h-[150px] shadow-primary">
      <div className="py-[16px] px-[16px] h-full flex flex-col gap-[6px] md:gap-[8px]  items-center justify-center">
        <p>
          <Icon className="text-[26px] md:text-[33px] text-[#d23f57]" />
        </p>
        <h1 className="font-PoppinsBold text-[16px] sm:text-[20px] ">{name}</h1>
        <span className="font-Poppins text-[18px] w-full max-w-[70px] flex justify-center">
          {number ? (
            number
          ) : (
            <Skeleton variant="rectangular" className="rounded-[2px] w-full" />
          )}
        </span>
      </div>
    </div>
  );
});
