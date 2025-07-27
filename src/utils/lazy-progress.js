import React from "react";
import NProgress from "nprogress";

function lazyWithProgress(factory) {
  return React.lazy(() => {
    NProgress.start();
    return factory()
      .then((module) => {
        NProgress.done();
        return module;
      })
      .catch((err) => {
        NProgress.done();
        throw err;
      });
  });
}

export default lazyWithProgress;
