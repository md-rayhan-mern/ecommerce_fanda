import { createBrowserRouter } from "react-router";
import { PrivateRoute } from "./privateroutes/PrivateRoute";
import { PrivateRoutes } from "./privateroutes/Routes";
import { AppRoute } from "./approutes/AppRoute";
import { appRoutes } from "./approutes/Routes";
import { PublicRoutes } from "./publicroutes/PublicRoutes";
import RootLayout from "../components/layout/RootLayout";
import LogRegLayout from "../components/layout/LogRegLayout";
import { logReqRoutes } from "./logregroutes/Routes";
import {publicRoutes} from "./publicroutes/Routes"
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
        children: appRoutes,
      },
      {
        element: <PrivateRoute />,
        children: PrivateRoutes,
      },
      {
        element: <PublicRoutes/>,
        children: publicRoutes,

      }
    ],
  },
  {
    path: "/",
    element: <LogRegLayout />,
    children: [
      {
        element: <AppRoute />,
        children: logReqRoutes,
      },
    ],
  },
]);
