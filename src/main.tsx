import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import ProductContextProvider from "./contexts/ProductContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
       <ProductContextProvider>
          <App />
       </ProductContextProvider>
    </BrowserRouter>
  </StrictMode>
);
