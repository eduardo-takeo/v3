import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import RoutesProvider from "./routes.tsx";

import "./i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RoutesProvider />
  </StrictMode>
);
