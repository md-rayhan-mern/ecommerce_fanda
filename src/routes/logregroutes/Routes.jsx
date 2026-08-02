import Login from "../../features/auth/Login";
import {SignupPage} from "../../features/auth/Register"
export const logReqRoutes = [
  {
    path: "/Login",
    element: <Login />,
  },{
    path: "/reg",
    element: <SignupPage />
  }
];


