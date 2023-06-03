import { handleSaveUserData } from "../../firebase/utility";

export async function updatePortfolioSagaAsyncHandler(){
  await handleSaveUserData()
}