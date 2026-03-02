import type { FC } from "react";
import { Navigate, Outlet } from "react-router";
import ROUTE from "@/constants/routes";
import { useAuthStore } from "@/store/AuthStore";
import { TUserRole } from "@/types";

interface RoleProtectedRouteProps {
  roles: TUserRole[];
}

const RoleProtectedRoute: FC<RoleProtectedRouteProps> = ({ roles }) => {
  const allowedRole = useAuthStore((store) => store.user?.user_role);

  if (allowedRole && !roles.includes(allowedRole)) {
    return <Navigate to={ROUTE.ACCESS_DENIED} replace />;
  }

  /**
   * possible idea for the future, users with multiple roles
   *
   */
  // const hasAccess = roles.some((role) => allowedRoles.includes(role) )
  // if (!hasAccess) {
  //   return <Navigate to={ROUTE.ACCESS_DENIED} replace />;
  // }

  return <Outlet />;
};

export default RoleProtectedRoute;
