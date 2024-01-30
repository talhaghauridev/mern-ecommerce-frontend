import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useToggle = (value = false) => {
  const [toggle, setToggle] = useState(value);
  const handleToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  return {
    toggle,
    setToggle,
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
    const observer = new IntersectionObserver((entries) => {
      const [firstEntry] = entries;
      if (firstEntry?.isIntersecting) {
        setIsVisible(true);
        observer?.unobserve(targetRef?.current);
      }
    }, options);

    if (targetRef?.current) {
      observer?.observe(targetRef?.current);
    }

    return () => {
      if (targetRef?.current) {
        observer?.unobserve(targetRef?.current);
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

const useMessage = (message, error, redirect = "") => {
  const navigate = useNavigate();

  useEffect(() => {
    if (error && error.data && error?.data?.message) {
      toast.error(error?.data?.message);
    } else if (error && error?.error) {
      toast.error(error?.error);
    }

    if (message) {
      toast.success(message);
      redirect && navigate(redirect);
    }
  }, [error, message, navigate, redirect]);
};

const useClickOutside = (callback) => {
  const ref = useRef();
  const handleClick = (event) => {
    console.log("handleClick");
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback]);
  return ref;
};

const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState({
    x: window.scrollX,
    y: window.scrollY,
  });

  const handleScroll = useMemo(() => {
    return () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      });
    };
  }, []);

  const handleScrollMemoized = useCallback(handleScroll, []);

  useEffect(() => {
    // Attach the memoized event listener when the component mounts
    window.addEventListener("scroll", handleScrollMemoized);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScrollMemoized);
    };
  }, [handleScrollMemoized]); // Dependency array includes the memoized function

  return scrollPosition;
};

const useCounter = (initialValue = 0, minValue = 0, maxValue = undefined) => {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    if (maxValue === undefined || count < maxValue) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [count, maxValue]);

  const decrement = useCallback(() => {
    if (count > minValue) {
      setCount((prevCount) => prevCount - 1);
    }
  }, [count, minValue]);

  const counterMethods = useMemo(
    () => ({
      count,
      increment,
      decrement,
    }),
    [count, increment, decrement]
  );

  return {
    count,
    increment,
    decrement,
  };
};

export {
  useToggle,
  useOnlineStatus,
  useUpload,
  useMediaQuery,
  useInView,
  useInputError,
  useMessage,
  useClickOutside,
  useScroll,
  useCounter,
};
