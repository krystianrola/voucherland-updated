import { User, Voucher, VoucherStatus } from "../../types";
import { LoginCredentials, LoginResponse, DataResponse, VoucherParams } from "../../types/api";
import { authInstance, baseInstance } from "./instance";

/**
 * Public requests
 */
function getVouchers(params: VoucherParams = { status: VoucherStatus.Public }) {
  // return baseInstance.get<VoucherResponse>("/vouchers");
  // test
  return baseInstance.get<DataResponse<Voucher>>("/test", {
    params,
  });
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
