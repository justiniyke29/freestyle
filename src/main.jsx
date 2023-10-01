import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global.scss";
import { store } from "@/app/store/index.js";
import { Provider } from "react-redux";
import { toastOptions } from "@/utils/config";

import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <Toaster position="top-right" toastOptions={toastOptions} />
      <App />
    </React.StrictMode>
  </Provider>
);
