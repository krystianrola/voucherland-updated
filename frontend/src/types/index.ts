import ROUTE from "../constants/routes";

export const ButtonVariant = {
  Primary: "primary",
  Secondary: "secondary",
  Tertiary: "tertiary",
  Create: "create",
  Delete: "delete",
};

export const DiscountTypes = {
  Percentage: "percentage", //-20%
  Fixed: "fixed", // 20eu off
  BuyOneGetOne: "bogo", // 2+1
  Bundle: "bundle", // 2 for xEUR
};

export const VoucherStatus = {
  Public: "public",
  Private: "private",
};

export const UserRole = {
  Regular: "regular",
  Admin: "admin",
  Mod: "modarator",
};

export type TButtonVariant = (typeof ButtonVariant)[keyof typeof ButtonVariant];
export type TDiscountType = (typeof DiscountTypes)[keyof typeof DiscountTypes];
export type TRoute = (typeof ROUTE)[keyof typeof ROUTE];
export type TVoucherStatus = (typeof VoucherStatus)[keyof typeof VoucherStatus];
export type TUserRole = (typeof UserRole)[keyof typeof UserRole];

export type Voucher = {
  id?: number;
  name: string;
  description: string;
  product_image?: string;
  store_image?: string;
  discount?: string;
  discount_type?: string;
  tag?: string;
  downloads?: number;
  expiry?: string;
  status: TVoucherStatus;
};

export type User = {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  password?: string;
  is_admin: boolean;
  user_role?: TUserRole;
};
