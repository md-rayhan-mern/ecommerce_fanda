import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

export const PublicRoutes = () => {
   const { isLogIn, isLoading } = useSelector((state) => state.auth);
//   if (isLoading || !isLoading) return <div>Loading now...</div>;

  return !isLogIn || isLogIn ? <Outlet /> : <Navigate to="/" replace />;
};