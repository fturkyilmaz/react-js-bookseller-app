import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import { BookSellerContextProvider } from "./context";

initializeIcons(undefined, { disableWarnings: true });

ReactDOM.render(
  <React.StrictMode>
    <BookSellerContextProvider>
      <App />
    </BookSellerContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
