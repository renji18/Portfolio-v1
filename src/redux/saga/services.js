import {
  handleContactPortfolio,
  handleSaveUserData,
} from "../../firebase/utility"

export async function updatePortfolioSagaAsyncHandler(
  dispatch,
  property,
  data
) {
  await handleSaveUserData(dispatch, property, data)
}

export async function contactPortfolioSagaAsyncHandler(data) {
  await handleContactPortfolio(data)
}
