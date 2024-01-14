import TopNavgationBar from "react-top-loading-bar";
const Loading = () => {
  console.log("Loading....");

  return (
    <>
      <div className="fixed h-full w-full bg-slate-50">
        <TopNavgationBar
          background="blue"
          waitingTime={50}
          transitionTime={100}
          onLoaderFinished={console.log("Finsihed")}
        />
      </div>
    </>
  );
};

export default Loading;
