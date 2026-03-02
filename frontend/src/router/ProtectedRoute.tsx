import type { FC } from "react";
import { Navigate, Outlet } from "react-router";
import ROUTE from "@/constants/routes";
import { useAuthStore } from "@/store/AuthStore";

interface ProtectedRouteProps {}

const ProtectedRoute: FC<ProtectedRouteProps> = () => {
  const isAuthenticated = useAuthStore((store) => !!store.token);

  if (!isAuthenticated) return <Navigate to={ROUTE.LOGIN} replace />;

  return <Outlet />;
};

export default ProtectedRoute;
