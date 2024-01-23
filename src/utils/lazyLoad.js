// lazyLoad.js
import { lazy } from "react";

const lazyLoad = (path, pathName) => {
  const promise = import(path);
  return lazy(() => {
    if (pathName == null) {
      return promise;
    }
    return promise.then((module) => ({ default: module[pathName] }));
  });
};

export default lazyLoad;
