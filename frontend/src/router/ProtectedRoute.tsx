import type { ComponentType, FC } from "react";
import { AccessDenied } from "../views/AccessDenied";
import { useAuth } from "../hooks/useAuth";

interface ProtectedRouteProps {
  component: ComponentType;
  // roles?
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ component: Component }) => {
  // const { isAuthenticated, isLoading } = useAuth();
  // useAuth here, below temp.
  const user = {
    firstname: "",
    lastname: "",
    email: "",
    is_admin: true,
  };

  if (!user.is_admin) return <AccessDenied />;

  return <Component />;
};

export default ProtectedRoute;
