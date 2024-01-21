
import React, { Suspense, useState } from "react";
import img1 from "./assets/images/img1.jpg";
import img2 from "./assets/images/img2.jpg";
import img3 from "./assets/images/avatar.png";
import ErrorBoundary from "./ErrorBoundary";
import Loading from "./layout/Loading/Loading";
import { Button, Image } from "./components";
import Routes from "./routes/routes";
import { useGetProductQuery } from "./redux/api/productApi";
import { useSelector } from "react-redux";
function App() {
  const [page, setPage] = useState(1);
  const {
    isError,
    isFetching,
    isLoading,
    isSuccess,
    data,
    startedTimeStamp,
    requestId,
  } = useGetProductQuery({
    keyword: "",
    page,
  });
  console.log({
    isError,
    isFetching,
    isLoading,
    isSuccess,
    data,
    startedTimeStamp,
    requestId,
  });
  const product = useSelector(state=>state.productApi)

  console.log("App", product);
  return (
    <main id="App">
      <ErrorBoundary fallback="Something went wrong">
        <Suspense fallback={<Loading />}>
          <Routes />
        </Suspense>
      </ErrorBoundary>
    </main>
  );
}

export default App;
