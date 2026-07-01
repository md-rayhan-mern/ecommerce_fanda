import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router";
import { router } from "./routes/MainRouter";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        duration: 4000,
      }}
    />
  </StrictMode>,
);
