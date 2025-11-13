import { User, Voucher } from "../../types";
import { VoucherResponse } from "../../types/api";
import { baseInstance } from "./instance";

function getVouchers() {
  return baseInstance.get<VoucherResponse>("/vouchers/public");
}

function register(user: User) {
  return baseInstance.post<User>("/register", { data: user });
}

export const api = {
  getVouchers,
  register,
};
