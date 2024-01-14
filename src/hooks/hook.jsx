import { useState, useEffect, useRef } from "react";

const useToggle = (value = false) => {
  const [toggle, setToggle] = useState(value);

  const handleToggle = () => {
    setToggle((pve) => !pve);
  };

  return {
    toggle,
    handleToggle,
  };
};

const useOnlineStatus = () => {
  const [status, setStatus] = useState(navigator.onLine ? "online" : "offline");

  useEffect(() => {
    const handleOnline = () => setStatus("online");
    const handleOffline = () => setStatus("offline");

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup event listeners when the component unmounts
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return status;
};

const useUpload = (multiple = false) => {
  const [image, setImage] = useState([]);

  const handleFileChange = (e) => {
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
  };

  return {
    image,
    handleFileChange,
  };
};
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState();

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    if (mediaQuery.matches !== matches) {
      setMatches(mediaQuery.matches);
    }

    const handleChange = (e) => {
      setMatches(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query, matches]);

  return matches;
};

const useInView = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);
  

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        if (targetRef.current) {
          observer.unobserve(targetRef.current);
        }
      }
    });
    if (targetRef && targetRef.current) {
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

export { useToggle, useOnlineStatus, useUpload, useMediaQuery, useInView };
