import React, { createContext, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { handleGetPortfolioData } from "./utility";
import { updatePortfolioAction } from "../redux/actions";

// firebase context
const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

// react component for firebase providation

const FirebaseProvider = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    handleGetPortfolioData(dispatch);
  }, [dispatch]);

  // edit profile data
  const handleSaveUserImage = async(data) => {
    dispatch(updatePortfolioAction(data))
  }

  return (
    <FirebaseContext.Provider value={{handleSaveUserImage}}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
