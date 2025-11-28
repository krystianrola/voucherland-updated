import { User, Voucher } from "../../types";
import { LoginCredentials, LoginResponse, VoucherResponse } from "../../types/api";
import { authInstance, baseInstance } from "./instance";

/**
 * Public requests
 */
function getVouchers() {
  return baseInstance.get<VoucherResponse>("/vouchers/public");
}

function login(credentials: LoginCredentials) {
  return baseInstance.post<LoginResponse>("/auth/login", credentials);
}

function register(user: User) {
  return baseInstance.post<User>("/register", { data: user });
}

/**
 * Auth requests
 */
function getUser() {
  return authInstance.get<{ user: User }>("/auth/me");
}

export const api = {
  getVouchers,

  getUser,

  //Auth
  login,
  register,
};
