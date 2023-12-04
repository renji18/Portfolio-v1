import { put } from "redux-saga/effects"
import * as services from "./services.js"

// update Portfolio Data
export function* updatePortfolioSagaCall(action) {
  try {
    yield services.updatePortfolioSagaAsyncHandler(
      action?.dispatch,
      action?.property,
      action?.data
    )
  } catch (error) {
    console.log(error, "updatePortfolioSagaCall")
  }
}

// contact sending data
export function* contactPortfolioSagaCall(action) {
  try {
    yield services.contactPortfolioSagaAsyncHandler(action?.data)
  } catch (error) {
    console.log(error, "contactPortfolioSagaCall")
  }
}

// get Portfolio Data
// export function* getPortfolioDataSagaCall(action) {
//   try {
//     alert("Get portfolio called")
//   } catch (error) {
//     console.log(error, "getPortfolioDataSagaCall")
//   }
// }
