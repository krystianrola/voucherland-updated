import { create } from "zustand";
import { Voucher } from "../types";
import { api } from "../services";
import { DataResponse, VoucherParams } from "@/types/api";

interface State {
  loading: boolean;
  data: DataResponse<Voucher>;
  fetch: (params?: VoucherParams) => void;
}

const useVouchers = create<State>((set) => ({
  loading: true,
  data: {
    vouchers: [],
  },
  fetch: async (params) => {
    set({ loading: true });

    try {
      const { data } = await api.getVouchers(params);
      set({
        data: data,
        loading: false,
      });

      console.log(data);
    } catch (error) {
      // add error logic, like pop up
      console.error(error);
      set({ loading: true });
    }
  },
}));

export default useVouchers;
