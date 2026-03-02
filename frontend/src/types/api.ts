import { TVoucherStatus, User } from "../types";

// export type ApiInstance<T> = {
//   data: T[];
// };

export type DataResponse<T> = {
  vouchers: T[];
};

export type VoucherParams = {
  status: TVoucherStatus;
};

export type LoginResponse = {
  access_token: string;
  user: User;
};

export type LoginCredentials = {
  email: string;
  password: string;
};
