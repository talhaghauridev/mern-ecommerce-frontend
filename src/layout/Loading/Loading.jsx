import AnimationWarpper from "@/components/ui/AnimationWarpper";
import TopNavgationBar from "react-top-loading-bar";
const Loading = () => {
  return (
    <>
      <TopNavgationBar
        background="#D23F57"
        waitingTime={50}
        transitionTime={1000}
        shadow
      />
      <AnimationWarpper key={window.location.hostname}>
        <div className="fixed  w-full bg-white h-[100vh]"></div>
      </AnimationWarpper>
    </>
  );
};

export default Loading;
