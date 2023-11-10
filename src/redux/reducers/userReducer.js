import * as actionType from "../actions/actionTypes"

export const portfolioData = (state = {}, action) => {
  switch (action.type) {
    case actionType.GET_USER_DATA:
      return {
        ...state,
        portfolio: action.data,
      }
    default:
      return state
  }
}
