import { FC } from "react";
import { ButtonVariant, DiscountTypes, Voucher } from "../../types";
import { Discount } from "./Discount";
import { Button } from "../ui/Button";
import { Date } from "../ui/Date";

interface VoucherCardProps {
  voucher: Voucher;
}

const VoucherCard: FC<VoucherCardProps> = ({ voucher }) => {
  return (
    <div className="relative min-h-[330px] max-w-[17rem] overflow-hidden flex flex-col rounded-lg bg-block3 border border-solid border-block">
      <Discount
        type={DiscountTypes.BuyOneGetOne}
        text="2+1"
        className="absolute top-2 left-2 z-10"
      />
      <div className="relative flex-1 z-0">
        <img src="/images/banner.png" alt="banner" className="w-full h-full object-contain" />
        <Date date="fr 18 feb" className="absolute bottom-2 right-2" />
      </div>
      <div className="flex-1 flex flex-col justify-between gap-4 p-2">
        <div className="flex flex-col gap-[2px]">
          <p className="text-sm leading-6 font-semibold">Lidl</p>
          <p>Cucumber</p>
          <p className="text-sm text-description">{voucher.description}</p>
        </div>

        <Button variant={ButtonVariant.Primary} text="Claim voucher" className="w-full" />
      </div>
    </div>
  );
};

export { VoucherCard };
