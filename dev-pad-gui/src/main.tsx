import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, HashRouter } from "react-router";
import "./index.css";

const Router = window.location.protocol === "file:" ? HashRouter : BrowserRouter;

createRoot(document.getElementById("root")!).render(
  <Router>
    <App />
  </Router>
);
