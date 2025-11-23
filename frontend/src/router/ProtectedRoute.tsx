import type { FC, JSX } from "react";
import { Navigate, Outlet, Route } from "react-router";
import ROUTE from "@/constants/routes";

interface ProtectedRouteProps {
  children: JSX.Element;
  auth?: boolean;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children, auth = false }) => {
  if (!auth) return <Navigate to={ROUTE.LOGIN} />;

  return children;
};

export default ProtectedRoute;
