import React, { createContext, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleGetPortfolioData } from "./utility";

// firebase context
const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

// react component for firebase providation

const FirebaseProvider = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    handleGetPortfolioData(dispatch);
  }, [dispatch]);

  return (
    <FirebaseContext.Provider value={{}}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
