import * as actionType from "./actionTypes"

// Update Portfolio Data
export const updatePortfolioAction = (data) => ({
  type: actionType.UPDATE_USER_DATA,
  data,
})

// Get portfolio data
export const getPortfolioDataAction = (data) => ({
  type: actionType.GET_USER_DATA,
  data,
})

// Contact
export const contactAction = (data) => ({
  type: actionType.CONTACT_US,
  data,
})
