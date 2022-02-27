import { useContext, createContext, useState } from "react";
const BMIContext = createContext();

export const BMIProvider = ({ children }) => {
  const [hasResult, setHasResult] = useState(false);
  const values = {
    hasResult,
    setHasResult,
  };
  return <BMIContext.Provider value={values}>{children}</BMIContext.Provider>;
};
export const useBMI = () => useContext(BMIContext);
