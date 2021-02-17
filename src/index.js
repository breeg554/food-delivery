import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import App from "./App";

ReactDOM.render(
  <Router>
    <AppContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AppContextProvider>
  </Router>,
  document.getElementById("root")
);
