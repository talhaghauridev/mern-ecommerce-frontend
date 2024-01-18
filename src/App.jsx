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
import img3 from "./assets/images/avatar.png";

import lazyLoad from "./utils/lazyLoad";
import { useEffect } from "react";
import { server } from "./redux/store";
import { useInView } from "./hooks/hook";
// import { Image } from "./components";
import ErrorBoundary from "./ErrorBoundary";
import Loading from "./layout/Loading/Loading";
import ProductCard from "./components/ProductCard";
import { Button, Image } from "./components";

function App() {
  const [data, setData] = useState([]);
  const { ref, isVisible } = useInView();

  console.log(isVisible);
  const getData = async () => {
    try {
      console.log("Fetching Data");
      const response = await fetch("https://fakestoreapi.com/products");
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main id="App">

      <ErrorBoundary fallback="Something went wrong">
        <Suspense fallback={<Loading />}>
          <Routes />
        </Suspense>
      </ErrorBoundary>
      <Button variants="primary" className={"bg-black"}  size={"md"} >
        Button
      </Button>
      <Image
        src={img1}
        alt={"img"}
        style={{
          height: "80vh",
        }}
      />
      <Image
        src={img2}
        alt={"img"}
        style={{
          height: "80vh",
        }}
      />

      <Image
        src={img3}
        alt={"img"}
        style={{
          height: "80vh",
        }}
      />


      {data &&
        data.map((item) => (
          <React.Fragment key={item.id}>
            <div ref={ref}>
              <ProductCard {...item} />
            </div>
          </React.Fragment>
        ))}
    </main>
  );
}

export default App;
