import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { api } from "@/services";
import { LoginCredentials } from "@/types/api";
import { User, UserRole } from "@/types";

/**
 * USER FOR TESTING ONLY
 */
const user_test = {
  id: "user-1",
  first_name: "regualer",
  last_name: "user",
  email: "regular.user@voucherland.com",
  is_admin: false,
  user_role: UserRole.Regular,
} satisfies User;

interface AuthState {
  loading: boolean;
  token: string | null;
  user: User | null;
  initialize: () => Promise<void>;
  login: (credential: LoginCredentials) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      // stateCreatorfn
      (set, get) => ({
        loading: true,
        token: null,
        user: null,

        initialize: async (): Promise<void> => {
          const token = get().token;

          if (!token) return;

          try {
            const { data } = await api.getUser();

            // TO BE REMOVED
            console.log("initialize response: " + data.user);

            set({ user: user_test, loading: false }); // TO BE CHANGED
          } catch {
            get().logout();
          }
        },

        login: async (creds): Promise<void> => {
          set({ loading: true });

          try {
            const { data } = await api.login({
              email: "regular.user@voucherland.com", // TO BE CHANGED
              password: "iamuser",
            });

            set({
              token: data.access_token,
              user: user_test, // TO BE CHANGED
              loading: false,
            });
          } catch (error) {
            set({ loading: false });
            throw error;
          }
        },

        logout: () => {
          set({
            token: null,
            user: null,
          });
        },
      }),
      // persistOptions
      {
        // name: unique name of the item for your store in the storage.
        name: "auth-storage",
        // partialize: A function to filter state fields before persisting it.
        partialize: (state) => ({
          token: state.token,
        }),
      },
    ),
    {
      name: "auth-store",
    },
  ),
);
