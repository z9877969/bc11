import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./components/App/App";
import BaseProvider from "./context/BaseProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BaseProvider>
        <App />
      </BaseProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
