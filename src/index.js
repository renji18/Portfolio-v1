import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { Provider } from "react-redux"
import store from "./redux/store"
import FirebaseProvider from "./firebase"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  </Provider>
)
