import { createContext, useState } from "react";

export const baseContext = createContext();

const BaseProvider = ({ children }) => {
  const [activePage, setActivePage] = useState("");
  const handleTogglePage = (activePageProp = "") => {
    setActivePage(activePageProp);
  };

  return (
    <baseContext.Provider
      value={{
        handleTogglePage,
        activePage,
      }}
    >
      {children}
    </baseContext.Provider>
  );
};

export default BaseProvider;
