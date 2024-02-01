import React from "react";
import useProfile from "../hooks/useProfile";

const Profile = () => {
  const { userInfo } = useProfile();
  return (
    <section id="profile">
      <div className="container">
        <h1>{userInfo?.name}</h1>

        <h1>{userInfo?.email}</h1>
        <div>{JSON.stringify(userInfo)}</div>
      </div>
    </section>
  );
};

export default Profile;
