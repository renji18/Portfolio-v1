import { handleSaveUserData } from "../../firebase/utility";

export async function updatePortfolioSagaAsyncHandler(data){
  await handleSaveUserData(data)
}