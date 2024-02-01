import React, { useMemo } from "react";
import useProfile from "../hooks/useProfile";
import { Image } from "@components/ui";

const Profile = () => {
  const { userInfo } = useProfile();

  return (
    <section id="profile">
      <div className="profile_conatiner flex items-center justify-center flex-col gap-y-[15px] h-full">
        <div className="w-full flex items-center justify-center">
          <Image
            src={userInfo?.avatar?.url}
            alt={userInfo?.name || "avatar"}
            className="w-full max-w-[200px] rounded-full"
          />
        </div>
        <div className="flex flex-col gap-[10px] items-center justify-center">
          <h1 className="text-[#2b3445] font-semibold font-Poppins tetx-[25px] md:text-[30px] ">
            {userInfo?.name}
          </h1>

          <h1 className="text-[20px] font-Sans font-[400]">
            {userInfo?.email}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Profile;
