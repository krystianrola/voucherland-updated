import { Navigate, Outlet, Route, Routes } from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import ROUTE from "@/constants/routes";
import {
  AccessDenied,
  Articles,
  Contact,
  Homepage,
  Login,
  NotFound,
  Registration,
  Vouchers,
} from "@/views";
import { AdminPage } from "@/views/admin/Admin";
import { Account } from "@/views/account/Account";
import { UserRole } from "@/types";
import RoleProtectedRoute from "./RoleprotectedRoute";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<Homepage />} />
      <Route path={ROUTE.VOUCHERS} element={<Vouchers />} />
      <Route path={ROUTE.ARTICLES} element={<Articles />} />
      <Route path={ROUTE.CONTACT} element={<Contact />} />

      <Route path={ROUTE.LOGIN} element={<Login />} />
      <Route path={ROUTE.REGISTER} element={<Registration />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/account" element={<Outlet />}>
          <Route index element={<Account />} />
        </Route>

        <Route element={<RoleProtectedRoute roles={[UserRole.Admin]} />}>
          <Route path="/admin" element={<Outlet />}>
            <Route index element={<AdminPage id="home" />} />
            <Route path="other" element={<AdminPage id="other page" />} />
          </Route>
        </Route>
      </Route>

      <Route path={ROUTE.NOT_FOUND} element={<NotFound />} />
      <Route path={ROUTE.ACCESS_DENIED} element={<AccessDenied />} />
      <Route path={"/*"} element={<Navigate to={ROUTE.NOT_FOUND} />} />
    </Routes>
  );
};

export default Router;
