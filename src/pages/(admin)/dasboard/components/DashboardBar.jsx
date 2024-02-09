import React from "react";
import { FaRegListAlt } from "react-icons/fa";
import { Fa42Group, FaPlaneCircleExclamation, FaUsers } from "react-icons/fa6";
import { MdOutlinePriceChange } from "react-icons/md";
import { SiProducthunt } from "react-icons/si";
import useFetchProducts from "../../products/hooks/useFetchProducts";
import useFetchUsers from "./../../users/hooks/useFetchUsers";

const DashboardBar = () => {
  const { products } = useFetchProducts();
  const { users } = useFetchUsers();
  return (
    <section id="dashboard">
      <div class="dashboard_container flex  w-full justify-between gap-[15px]">
        <DashboardBarCard
          icon={SiProducthunt}
          name={"Products"}
          number={products?.length || 0}
        />
        <DashboardBarCard
          icon={FaUsers}
          name={"User"}
          number={users?.length || 0}
        />
        <DashboardBarCard icon={FaRegListAlt} name={"Orders"} number={20} />
        <DashboardBarCard
          icon={MdOutlinePriceChange}
          name={"Total Amount"}
          number={20}
        />
      </div>
    </section>
  );
};

export default DashboardBar;

const DashboardBarCard = ({ name, number, icon: Icon }) => {
  return (
    <div className="rounded-[10px] bg-[white] w-full max-w-[230px] h-[130px] sm:h-[150px] shadow-primary">
      <div className="py-[16px] px-[16px] h-full flex flex-col gap-[6px] md:gap-[8px]  items-center justify-center">
        <p>
          <Icon className="text-[26px] md:text-[33px] text-[#d23f57]" />
        </p>
        <h1 className="font-PoppinsBold text-[16px] sm:text-[20px] ">{name}</h1>
        <span className="font-Poppins text-[18px]">{number}</span>
      </div>
    </div>
  );
};
