import { put } from "redux-saga/effects";
import * as services from './services.js'

// update Portfolio Data
export function* updatePortfolioSagaCall(action){
  try {
    yield services.updatePortfolioSagaAsyncHandler(action)
  } catch (error) {
    console.log(error, 'updatePortfolioSagaCall');
  }
}

// get Portfolio Data
// export function* getPortfolioDataSagaCall(action){
//   try {
//     console.log(action);
//     yield services.getPortfolioDataSagaAsyncHandler(action.dispatch)
//   } catch (error) {
//     console.log(error, 'getPortfolioDataSagaCall');
//   }
// }