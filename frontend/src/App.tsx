import { Route, Routes } from "react-router";
import ROUTE from "./constants/routes";
import { Homepage } from "./views/Homepage";
import { Vouchers } from "./views/Vouchers";
import ProtectedRoute from "./router/ProtectedRoute";
import { NotFound } from "./views/NotFound";
import { useEffect } from "react";
import useVouchers from "./hooks/useVouchers";

function App() {
  const vouchers = useVouchers();

  useEffect(() => {
    vouchers.fetch();
  }, [vouchers]);

  return (
    <div>
      {!vouchers.loading && vouchers.data ? (
        <div>loading...</div>
      ) : (
        <div>
          {vouchers.data.map((voucher) => (
            <div>{voucher.name}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
