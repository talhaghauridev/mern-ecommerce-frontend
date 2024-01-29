import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useHeaderSearch = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handelSearch = useCallback(
    (e) => {
      if (e.key === "Enter" && search.trim()) {
        return navigate(`/products/${search}`);
      }
    },
    [navigate, search]
  );

  return {
    handelSearch,
    search,
    setSearch,
  };
};

const useHeaderScroll = () => {
  const [headerScroll, setHeaderScroll] = useState(false);
  const handleScroll = useCallback(() => {
    if (window.scrollY >= 360) {
      setHeaderScroll(true);
    } else {
      if (window.scrollY <= 80) {
        setHeaderScroll(false);
      }
    }
  }, [headerScroll]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return {
    headerScroll,
    setHeaderScroll,
  };
};

export { useHeaderSearch, useHeaderScroll };
