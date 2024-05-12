import React, { createContext, useContext, useState } from "react";

const ItemDataContext = createContext();

const ItemProvider = ({ children }) => {
  return (
    <ItemDataContext.Provider value={ContextValue()}>
      {children}
    </ItemDataContext.Provider>
  );
};

const ContextValue = () => {
  
  const [selectedItem, setSelectedItem] = useState(null);
   const text = "AUTH PROPERTY";

  return { selectedItem, setSelectedItem, text };
};

const useData = () => {
  const context = useContext(ItemDataContext);
  if (!context) {
    throw new Error("useData must be used within an ItemProvider");
  }
  return context;
};

export { ItemProvider, useData };
