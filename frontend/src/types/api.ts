import { Voucher } from "../types";

// export type ApiInstance<T> = {
//   data: T[];
// };

export type VoucherResponse = {
  public_vouchers: Voucher[];
};

export type LoginResponse = {
  token: string;
};

export type LoginCredentials = {
  email: string;
  password: string;
};
