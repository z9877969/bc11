import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import BaseProvider from "./context/BaseProvider";

ReactDOM.render(
  <React.StrictMode>
    <BaseProvider>
      <App />
    </BaseProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
