import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import ProductContextProvider from "./contexts/ProductContext.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
       <ProductContextProvider>
          <App />
       </ProductContextProvider>
       </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
