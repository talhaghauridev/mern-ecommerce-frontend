import { lazy } from "react";

const lazyLoad = (path, name) => {
  const url = import(path);


  return lazy(() => url);
};

export default lazyLoad;
