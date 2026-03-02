import useVouchers from "@/hooks/useVouchers";
import { useEffect } from "react";
import LoadingWrapper from "./LoadingWrapper";
import { Swiper } from "../ui/Swiper";
import { VoucherCard } from "./VoucherCard";

const VoucherSlider = () => {
  const { data, loading, fetch } = useVouchers();

  useEffect(() => {
    fetch();
  }, []);

  return (
    <LoadingWrapper loading={loading}>
      <>
        {data.vouchers.length === 0 && (
          <div className="text-base text-description">No vouchers found</div>
        )}
        {data.vouchers.length > 0 && (
          <Swiper>
            {data.vouchers.map((voucher) => {
              return <VoucherCard voucher={voucher} />;
            })}
          </Swiper>
        )}
      </>
    </LoadingWrapper>
  );
};
export default VoucherSlider;
