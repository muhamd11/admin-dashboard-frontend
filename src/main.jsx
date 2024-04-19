// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./rtk/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="font-sans">
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  </React.StrictMode>
);
