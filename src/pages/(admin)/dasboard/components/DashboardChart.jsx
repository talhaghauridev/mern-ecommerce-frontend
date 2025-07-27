import React, { memo, useEffect, useMemo, useRef } from "react";
import useFetchProducts from "../../products/hooks/useFetchProducts";
import { Doughnut, Line } from "react-chartjs-2";
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   BarElement,
   Title,
   Tooltip,
   Legend,
   ArcElement,
   PointElement,
   LineElement,
   Filler
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement, Filler);

const DashboardChart = () => {
   const { products } = useFetchProducts();
   const outOfStock = useMemo(() => {
      let count = 0;
      products.forEach((item) => {
         if (item?.stock === 0) {
            count += 1;
         }
      });
      return count;
   }, [products]);

   const doughnutData = useMemo(() => {
      return {
         labels: ["Out of Stock", "InStock"],
         datasets: [
            {
               backgroundColor: ["#FF6384", "#36A2EB"],
               hoverBackgroundColor: ["#FF6384", "#36A2EB"],
               data: [outOfStock, products?.length - outOfStock]
            }
         ]
      };
   }, [outOfStock, products]);

   // Dummy data for Line chart
   const lineData = useMemo(() => {
      return {
         labels: ["Inital Amount", "Amount Earned"],
         datasets: [
            {
               label: "Dataset 1",
               borderColor: "rgba(75,192,192,1)",
               backgroundColor: "rgba(75,192,192,0.4)",
               data: [65, 59, 80, 81, 56]
            },
            {
               label: "Dataset 2",
               borderColor: "rgba(255,99,132,1)",
               backgroundColor: "rgba(255,99,132,0.4)",
               data: [28, 48, 40, 19, 86]
            }
         ]
      };
   }, []);

   return (
      <div className="flex flex-col gap-[20px] w-full h-full items-center justify-center py-[20px]">
         <div className="w-full max-w-full flex items-center justify-center">
            <Line data={lineData} />
         </div>

         <div className="w-full  max-w-[450px] md:max-w-[520px]">
            <Doughnut data={doughnutData} />
         </div>
      </div>
   );
};

export default memo(DashboardChart);
