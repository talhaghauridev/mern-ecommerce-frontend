import React, { createContext } from "react";

const SelectContext = createContext();
const Select = ({ children }) => {
  return (
    <select name="" id="">
      <SelectContext.Provider value={{}}>{children}</SelectContext.Provider>
    </select>
  );
};

export default Select;
