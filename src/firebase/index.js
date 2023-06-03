import React, { createContext, useContext, useEffect, useState } from "react";
import { firebaseAuth } from "./config";

// firebase context
const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

// react component for firebase providation

const FirebaseProvider = (props) => {
  return (
    <FirebaseContext.Provider value={{}}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
