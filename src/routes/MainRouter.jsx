import { createBrowserRouter } from "react-router";
import { PrivateRoute } from "./privateroutes/PrivateRoute";
import { AppRoute } from "./approutes/AppRoute";
import { appRoutes } from "./approutes/Routes";
import RootLayout from "../components/layout/RootLayout";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        element: <AppRoute />,
        children: [...appRoutes],
      },
    ],
  },
]);
