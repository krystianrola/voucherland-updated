import type { FC, JSX } from "react";
import { DiscountTypes, type TDiscountType } from "../../types";

//icons
import { LuTicketPercent, LuTicketPlus, LuTicketMinus, LuTickets } from "react-icons/lu";

const discount_type: Record<TDiscountType, JSX.Element> = {
  percentage: <LuTicketPercent className="w-5 h-5 text-dark" />,
  fixed: <LuTicketMinus className="w-5 h-5 text-dark" />,
  bogo: <LuTicketPlus className="w-5 h-5 text-dark" />,
  bundle: <LuTickets className="w-5 h-5 text-dark" />,
};

interface DiscountProps {
  type: TDiscountType;
  text: string;
}

const Discount: FC<DiscountProps> = ({ type, text }) => {
  return (
    <div className="w-fit flex justify-center items-center gap-3 py-1.5 px-2.5 rounded-md bg-main text-dark text-tiny font-semibold select-none">
      {discount_type[type]}
      {text}
    </div>
  );
};

export { Discount };
