// App.jsx

import React, { Suspense } from "react";
import img1 from "./assets/images/img1.jpg";
import img2 from "./assets/images/img2.jpg";
import img3 from "./assets/images/avatar.png";
import ErrorBoundary from "./ErrorBoundary";
import Loading from "./layout/Loading/Loading";
import { Button, Image } from "./components";
import Routes from "./routes/routes";
import { useGetProductQuery } from "./redux/api/productApi";
function App() {
  const { isError, isFetching, isLoading, isSuccess, data } =
    useGetProductQuery({
      // name: "second Product",
      category:"product"
    });
  // keyword:"product3"

  console.log("App", data);
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
