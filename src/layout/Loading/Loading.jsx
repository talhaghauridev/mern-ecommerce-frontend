import { Logo } from "@assets/images";
import AnimationWarpper from "@components/ui/AnimationWarpper";
import { useLocation } from "react-router-dom";
import TopNavgationBar from "react-top-loading-bar";
import { motion } from "framer-motion";
const Loading = () => {
  console.log("Loading....");
  return (
    <>
      <TopNavgationBar
        background="#D23F57"
        waitingTime={50}
        transitionTime={1000}
        shadow
        onLoaderFinished={console.log("Finsihed")}
      />
      <AnimationWarpper key={window.location.hostname}>
        <div className="fixed  w-full bg-white h-[100vh]"></div>
      </AnimationWarpper>
    </>
  );
};

export default Loading;
