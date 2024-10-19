import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./Router";

import "@/styles/reset.css";
import "@/styles/variable.css";
import "@/styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
