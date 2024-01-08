import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const setSharedData = (newData) => {
    console.log("data in context", newData);
    setData(newData);
  };
  return (
    <DataContext.Provider
      value={{
        data,
        setSharedData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
