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
import lazyLoad from "./utils/lazyLoad";
import { useEffect } from "react";
import { server } from "./redux/store";
import { useInView } from "./hooks/hook";
import { Image } from "./components";
import ErrorBoundary from "./ErrorBoundary";
import Loading from "./layout/Loading/Loading";

function App() {
  return (
    <main id="App">
      <ErrorBoundary fallback="Something went wrong">
        <Suspense fallback={<Loading />}>
          <Routes />
        </Suspense>
      </ErrorBoundary>

      <Image src={  "https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=1024x1024&w=is&k=20&c=K8yBJVB-TtpPF1O2zOhVlzXECDxJsadlRrLf4gXXNkk="} alt={"img"} />

      <Image src={ "https://media.istockphoto.com/id/827243792/vector/adventure-camping-night-scene.jpg?s=1024x1024&w=is&k=20&c=7n6_YQTgKzku-l2d4QGfUsrS_xv-JbyTYOHQrV-uWw0="} alt={"img"} />

      <Image src={  "https://media.istockphoto.com/id/1190059388/vector/white-splash-on-blue-background-forest-during-a-snow-storm-at-night-christmas-tree.jpg?s=1024x1024&w=is&k=20&c=rt9Zp0jUyVtz39CMRvOAY_7KVSeZr5JB52znBeAi9QU="} alt={"img"} />
      <Image src={img2} alt={"img"} />

      {/* <button
        onClick={() =>
          setLoad(
            "https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=1024x1024&w=is&k=20&c=K8yBJVB-TtpPF1O2zOhVlzXECDxJsadlRrLf4gXXNkk="
          )
        }
      >
        Button 1
      </button>
      <button
        onClick={() =>
          setLoad(
            "https://media.istockphoto.com/id/827243792/vector/adventure-camping-night-scene.jpg?s=1024x1024&w=is&k=20&c=7n6_YQTgKzku-l2d4QGfUsrS_xv-JbyTYOHQrV-uWw0="
          )
        }
      >
        Button 2
      </button>
      <button
        onClick={() =>
          setLoad(
            "https://media.istockphoto.com/id/1190059388/vector/white-splash-on-blue-background-forest-during-a-snow-storm-at-night-christmas-tree.jpg?s=1024x1024&w=is&k=20&c=rt9Zp0jUyVtz39CMRvOAY_7KVSeZr5JB52znBeAi9QU="
          )
        }
      >
        Button 3
      </button> */}
    </main>
  );
}

export default App;
