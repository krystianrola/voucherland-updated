import { create } from "zustand";
import { Voucher } from "../types";
import { api } from "../services";

interface State {
  loading: boolean;
  data: Voucher[];
  fetch: () => void;
}

const useVouchers = create<State>((set) => ({
  loading: true,
  data: [],
  fetch: async () => {
    set({ loading: true });

    try {
      const { data } = await api.getVouchers();
      set({
        data: data.public_vouchers,
        loading: false,
      });

      console.log({ data });
    } catch (error) {
      // add error logic, like pop up
      console.error(error);
    }
  },
}));

export default useVouchers;
