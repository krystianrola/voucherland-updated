import ROUTE from "../constants/routes";

export const ButtonVariant = {
  Primary: "primary",
  Secondary: "secondary",
  Tertiary: "tertiary",
  Create: "create",
  Delete: "delete",
};
export type TButtonVariant = (typeof ButtonVariant)[keyof typeof ButtonVariant];

export const DiscountTypes = {
  Percentage: "percentage", //-20%
  Fixed: "fixed", // 20eu off
  BuyOneGetOne: "bogo", // 2+1
  Bundle: "bundle", // 2 for xEUR
};
export type TDiscountType = (typeof DiscountTypes)[keyof typeof DiscountTypes];

export type TRoute = (typeof ROUTE)[keyof typeof ROUTE];
