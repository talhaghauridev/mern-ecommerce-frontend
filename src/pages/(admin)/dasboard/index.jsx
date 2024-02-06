import { MetaData } from "@components/ui";
import React from "react";
import DashboardBar from "../components/DashboardBar";
import DashboardChart from "../components/DashboardChart";

const Dashboard = () => {
  return (
    <>
      <MetaData title={"Dashboard"} />
      {/* Dashboard */}
      <DashboardBar />
      <DashboardChart />
    </>
  );
};

export default Dashboard;
