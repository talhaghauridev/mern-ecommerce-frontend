import { useState, useEffect, useRef, useCallback, useMemo } from "react";

const useToggle = (value = false) => {
  const [toggle, setToggle] = useState(value);
  console.log("Toggle");
  const handleToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return {
    toggle,
    handleToggle,
  };
};

const useOnlineStatus = () => {
  const [status, setStatus] = useState(navigator.onLine ? "online" : "offline");

  const handleOnline = useCallback(() => setStatus("online"), []);
  const handleOffline = useCallback(() => setStatus("offline"), []);

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [handleOnline, handleOffline]);

  return status;
};

const useUpload = (multiple = false) => {
  const [image, setImage] = useState([]);

  const handleFileChange = useCallback(
    (e) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          if (multiple) {
            setImage((prevImages) => [...prevImages, reader.result]);
          } else {
            setImage([reader.result]);
          }
        }
      };

      const files = e.target.files;

      if (files && files.length > 0) {
        if (multiple) {
          Array.from(files).forEach((file) => reader.readAsDataURL(file));
        } else {
          reader.readAsDataURL(files[0]);
        }
      }
    },
    [multiple]
  );
  return {
    image,
    handleFileChange,
  };
};
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState();

  const handleChange = useCallback((e) => {
    setMatches(e.matches);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query, handleChange]);

  return matches;
};

const useInView = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [firstEntry] = entries;
        if (firstEntry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(targetRef.current);
        }
      },
      options
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [options]);

  return { ref: targetRef, isVisible };
};


const useInputError = (formik, name) => {
  const inputError = useMemo(() => {
    return formik && formik.touched[name] && formik.errors[name]
      ? formik.errors[name]
      : "";
  }, [formik, name]);

  return inputError;
};

export {
  useToggle,
  useOnlineStatus,
  useUpload,
  useMediaQuery,
  useInView,
  useInputError,
};
