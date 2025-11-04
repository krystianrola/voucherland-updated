import type { BaseHTMLAttributes, FC, JSX } from "react";
import type { TDiscountType } from "../../types";

//icons
import { LuTicketPercent, LuTicketPlus, LuTicketMinus, LuTickets } from "react-icons/lu";

const discount_type: Record<TDiscountType, JSX.Element> = {
  percentage: (
    <LuTicketPercent
      className="w-5 h-5 text-dark"
      data-testid="discount-percentage"
      aria-hidden="true"
    />
  ),
  fixed: (
    <LuTicketMinus className="w-5 h-5 text-dark" data-testid="discount-fixed" aria-hidden="true" />
  ),
  bogo: (
    <LuTicketPlus className="w-5 h-5 text-dark" data-testid="discount-bogo" aria-hidden="true" />
  ),
  bundle: (
    <LuTickets className="w-5 h-5 text-dark" data-testid="discount-bundle" aria-hidden="true" />
  ),
};

interface DiscountProps extends BaseHTMLAttributes<HTMLDivElement> {
  type: TDiscountType;
  text: string;
}

const Discount: FC<DiscountProps> = ({ type, text, className }) => {
  if (!(type in discount_type)) throw new Error(`Invalid discount type: ${type}`);

  return (
    <div
      data-testid="discount"
      className={`w-fit flex justify-center items-center gap-3 py-1.5 px-2.5 rounded-md bg-main text-dark text-tiny font-semibold select-none ${className}`}
    >
      {discount_type[type]}
      {text}
    </div>
  );
};

export { Discount };
