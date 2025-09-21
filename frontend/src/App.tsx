import { Route, Routes } from "react-router";
import ROUTE from "./constants/routes";
import { Homepage } from "./views/Homepage";
import { Vouchers } from "./views/Vouchers";
import ProtectedRoute from "./router/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<Homepage />} />
      <Route path={ROUTE.VOUCHERS} element={<ProtectedRoute component={Vouchers} />} />
    </Routes>
  );
}

export default App;
