import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./layout/MainLayout";
import Homepage from "./Pages/Homepage/Homepage";
import Books from "./Pages/Books/Books";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // Component: MainLayout, -----> you can write this also.
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/Books",
        element: <Books />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
