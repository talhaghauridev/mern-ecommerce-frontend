import React, { useEffect, useRef } from "react";
import { Doughnut, Line } from "react-chartjs-2";
const DashboardChart = () => {
  // Dummy data for Doughnut chart
  const doughnutData = {
    labels: ["Label 1", "Label 2", "Label 3"],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  // Dummy data for Line chart
  const lineData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Dataset 1",
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.4)",
        data: [65, 59, 80, 81, 56],
      },
      {
        label: "Dataset 2",
        borderColor: "rgba(255,99,132,1)",
        backgroundColor: "rgba(255,99,132,0.4)",
        data: [28, 48, 40, 19, 86],
      },
    ],
  };

  return (
    <div>
      <div>
        <h2>Doughnut Chart</h2>
      </div>
      <Doughnut data={doughnutData} />
      <div>
        <h2>Line Chart</h2>
        {/* <Line data={lineData}/> */}
      </div>
    </div>
  );
};

export default DashboardChart;
