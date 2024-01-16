import { lazy } from "react";

const lazyLoad = (path, pathName) => {
  const promise = import(path); /* @vite-ignore */
  return lazy(() => {
    if (pathName == null) {
      return promise;
    }
    return promise.then((module) => ({ default: module[pathName] }));
  });
};

export default lazyLoad;
