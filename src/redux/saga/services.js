import {
  handleContactPortfolio,
  handleSaveUserData,
} from "../../firebase/utility"

export async function updatePortfolioSagaAsyncHandler(data) {
  await handleSaveUserData(data)
}

export async function contactPortfolioSagaAsyncHandler(data) {
  await handleContactPortfolio(data)
}
