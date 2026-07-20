import Login from "../../features/auth/Login";
import Reg from "../../features/auth/Register"
export const logReqRoutes = [
  {
    path: "/Login",
    element: <Login />,
  },{
    path: "/reg",
    element: <Reg/>
  }
];
