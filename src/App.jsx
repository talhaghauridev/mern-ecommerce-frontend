// App.jsx

import React from "react";
import Layout from "./layout/layout";
import Home from "./pages/home";
import { useState } from "react";
import Routes from "./routes/routes";
import { Suspense } from "react";
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";
import img1 from "./assets/images/img1.jpg";
import img2 from "./assets/images/img2.jpg";
import TopNavgationBar from "react-top-loading-bar";
import lazyLoad from "./utils/lazyLoad";
import { useEffect } from "react";
import { server } from "./redux/store";
import { useInView } from "./hooks/hook";
import { Image } from "./components";

export const Loading = () => {
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
function App() {
  const [loading, setLoading] = useState(true);
  const [load, setLoad] = useState(false);
  const { ref, isVisible } = useInView();
  console.log(isVisible ? "View" : "Not View");
  console.log(loading);

  return (
    <main id="App">
      <Suspense fallback={<Loading />}>
        <Routes />
      </Suspense>

      <Image src={load? img2:img1} alt={"img"} />
      <button onClick={() => setLoad((p) => !p)}>Button</button>
    </main>
  );
}

export default App;
