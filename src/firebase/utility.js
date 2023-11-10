import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import imageCompression from "browser-image-compression"
import { firestore, storage } from "./config"
import { getPortfolioDataAction, toggleMainLoader } from "../redux/actions"

// returns url for a provided image file
export async function handleUploadImage(file, location) {
  try {
    const compressedImage = await imageCompression(file, {
      maxSizeMB: 1,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
      maxIteration: 10,
      fileType: "image/*",
    })
    const imgRef = ref(storage, location)
    const upload = await uploadBytes(imgRef, compressedImage)
    const res = await getDownloadURL(upload.ref)
    return res
  } catch (error) {
    console.log(error, "error in handleUploadImage")
  }
}

// update user data
export async function handleSaveUserData(dispatch, property, data) {
  try {
    const portfolioRef = doc(firestore, "portfolioData", "renji_riverstone")
    await updateDoc(portfolioRef, {
      [property]: data,
    })
    await handleGetPortfolioData(dispatch)
    // alert("Portfolio Updated Successfully")
  } catch (error) {
    console.log(error, "Error in handleSaveUserData")
  }
}

// get user data
export async function handleGetPortfolioData(dispatch) {
  try {
    const docRef = doc(firestore, "portfolioData", "renji_riverstone")
    const docSnap = await getDoc(docRef)
    dispatch(getPortfolioDataAction(docSnap.data()))
    dispatch(toggleMainLoader(false))
  } catch (error) {
    console.log(error, "handleGetPortfolioData")
  }
}

// write thoughts in contacts
export async function handleContactPortfolio(data) {
  try {
    const portfolioRef = doc(firestore, "portfolioData", "renji_riverstone")
    const portfolioSnap = await getDoc(portfolioRef)
    const portfolioData = portfolioSnap.data()

    const contactData = portfolioData?.contact

    await updateDoc(portfolioRef, {
      contact: [...contactData, data],
    })
    return
  } catch (error) {
    console.log(error, "contactFunction")
  }
}
