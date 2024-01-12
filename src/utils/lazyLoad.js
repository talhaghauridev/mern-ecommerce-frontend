import { lazy } from "react";

const lazyLoad = (path, pathName) => {
  return lazy(() => {
    const promise = import(path);
    if (pathName == null) {
      return promise;
    }
    return promise.then((module) => ({ default: module[pathName] }));
  });
};

export default lazyLoad;
