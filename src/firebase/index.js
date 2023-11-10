import React, { createContext, useContext, useEffect } from "react"
import { useDispatch } from "react-redux"
import { handleGetPortfolioData } from "./utility"
import { contactAction, updatePortfolioAction } from "../redux/actions"

// firebase context
const FirebaseContext = createContext(null)
export const useFirebase = () => useContext(FirebaseContext)

// react component for firebase providation

const FirebaseProvider = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    handleGetPortfolioData(dispatch)
  }, [dispatch])

  // edit profile data
  const handleSaveUserData = async (property, data) => {
    dispatch(updatePortfolioAction(dispatch, property, data))
  }

  // contact
  const handleContact = async (data) => {
    dispatch(contactAction(data))
  }

  return (
    <FirebaseContext.Provider value={{ handleSaveUserData, handleContact }}>
      {props.children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseProvider
