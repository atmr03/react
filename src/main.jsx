import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import ErrorPage from "./pages/NotFounds";
import ChartProduct from "./pages/ChartProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>hallo react</div>,
    errorElement: <ErrorPage />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/card",
    element: <ChartProduct />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
