import * as actionType from "./actionTypes"

// Main loader on route changes
export const toggleMainLoader = (data) => ({
  type: actionType.MAIN_LOADER,
  data,
})
