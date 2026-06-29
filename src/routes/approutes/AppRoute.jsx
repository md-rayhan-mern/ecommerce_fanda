import { Navigate, Outlet } from "react-router";
import { useSelector } from "react-redux";

export const AppRoute = () => {
  const { isLogIn, isLoading } = useSelector((state) => state.auth);
  if (isLoading) return <div>Loading now...</div>;

  return !isLogIn ? <Outlet /> : <Navigate to="/" replace />;
};
