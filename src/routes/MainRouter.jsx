import { createBrowserRouter } from "react-router";
import { PrivateRoute } from "./privateroutes/PrivateRoute";
import { AppRoute } from "./approutes/AppRoute";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    element: <PrivateRoute />,
    children: [],
  },
  {
    element: <AppRoute />,
    children: [],
  },
]);
