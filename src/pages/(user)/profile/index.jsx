import React from "react";
import { Image, MetaData } from "@components/ui";
import useProfile from "../hooks/useProfile";

const Profile = () => {
  const { userInfo } = useProfile();

  return (
    <>
      <MetaData title={"Profile"} />
      <section id="profile">
        <div className="profile_conatiner flex items-center justify-center flex-col gap-y-[15px] h-full">
          <div className="w-full flex items-center justify-center">
            <Image
              src={userInfo?.avatar?.url}
              alt={userInfo?.name || "avatar"}
              className="max-w-[100%] max-h-[100%] h-[200px] w-[200px] rounded-full border-solid border border-[#e5e7eb]"
            />
          </div>
          <div className="flex flex-col gap-[10px] items-center justify-center">
            <h1 className="text-[#2b3445] font-semibold font-Poppins text-[22px] md:text-[30px] text-center ">
              {userInfo?.name}
            </h1>

            <h1 className="text-[18px] md:text-[20px] font-Sans font-[400]">
              {userInfo?.email}
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
