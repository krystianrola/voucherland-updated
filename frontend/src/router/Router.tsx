import { Navigate, Outlet, Route, Routes } from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import ROUTE from "@/constants/routes";
import { Articles, Contact, Homepage, Login, NotFound, Registration, Vouchers } from "@/views";
import { AdminPage } from "@/views/admin/Admin";
import { AccountPage } from "@/views/account/Account";

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
        <Route path="/admin" element={<Outlet />}>
          <Route index element={<AdminPage id="home" />} />
          <Route path="other" element={<AdminPage id="other page" />} />
        </Route>
      </Route>

      {/* <Route
        path="/admin/account"
        element={
          <ProtectedRoute>
            <AccountPage />
          </ProtectedRoute>
        }
      /> */}

      <Route path={ROUTE.NOT_FOUND} element={<NotFound />} />
      <Route path={"/*"} element={<Navigate to={ROUTE.NOT_FOUND} />} />
    </Routes>
  );
};

export default Router;
