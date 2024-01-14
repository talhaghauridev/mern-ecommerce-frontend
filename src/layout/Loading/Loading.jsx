import TopNavgationBar from "react-top-loading-bar";
const Loading = () => {
  console.log("Loading....");

  return (
    <>
      <TopNavgationBar
        background="blue"
        waitingTime={5}
        transitionTime={100}
        onLoaderFinished={console.log("Finsihed")}
      />
    </>
  );
};

export default Loading;
