// import { StrictMode } from 'react';
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app";
import { BrowserRouter } from "react-router";
import { LanguageContextProvider } from "./features/language-context/provider";

import "./shared/i18n";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <BrowserRouter>
    <LanguageContextProvider>
      <App />
    </LanguageContextProvider>
  </BrowserRouter>
  // </StrictMode>,
);
