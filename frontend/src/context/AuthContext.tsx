import { createContext, PropsWithChildren, useEffect, useState, type FC } from "react";
import { api } from "../services";
import { LoginCredentials } from "../types/api";
import { User } from "@/types";
import { authInstance } from "@/services/api/instance";

type AuthContext = {
  authToken?: string;
  user?: User | null;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout?: () => Promise<void>;
};

const AuthContext = createContext<AuthContext | undefined>(undefined);

type AuthProvider = PropsWithChildren;

const AuthProvider: FC<AuthProvider> = ({ children }) => {
  // const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [authToken, setAuthToken] = useState<string | null>(
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE3NjQxNTQ2NzYsImV4cCI6MTc2NDc1OTQ3NiwibmJmIjoxNzY0MTU0Njc2LCJqdGkiOiJzZUlOWDRJbWVkZFd6cU1pIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJ1c2VyX2lkIjoyfQ.-nB-5PPuVsLwCaukIjvM12iqOBj1eW3GUVAeOWaJHws"
  );
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    // On mount, check token validity with server
  }, []);

  const login = async () => {
    setIsLoading(true);

    try {
      const response = await api.login({
        email: "regular.user@voucherland.com",
        password: "iamuser",
      });

      console.log(response.data.access_token);
      setAuthToken(response.data.access_token);

      authInstance.interceptors.request.use(
        (config) => {
          config.headers["Authorization"] = `Bearer ${response.data.access_token}`;

          return config;
        },
        (error) => {
          return error;
        }
      );
    } catch {
      setAuthToken(null);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    // NOTE: when working on the backend, make sure the backend logs out the user but for now:
    setAuthToken(null);
    setUser(null);
  };

  return <AuthContext.Provider value={{ isLoading, login }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
