import { takeLatest } from "redux-saga/effects";
import * as actionTypes from "../actions/actionTypes";
import * as userMiddleware from './saga'

export default function* mySaga() {
  yield takeLatest(
    actionTypes.UPDATE_USER_DATA,
    userMiddleware.updatePortfolioSagaCall
  );
  // yield takeLatest(
  //   actionTypes.GET_USER_DATA,
  //   userMiddleware.getPortfolioDataSagaCall
  // );
}