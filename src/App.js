import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "./App.css";
import ReactGA from "react-ga";

const TRACKING_ID = "G-30XW55ESY7";
function App() {

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
