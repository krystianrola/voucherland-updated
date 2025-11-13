import { createContext, useContext, useEffect, useState, type FC, type ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: () => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userRole, setUserRole] = useState<"admin" | "user">();

  useEffect(() => {
    // On mount, check token validity with server
  }, []);

  const login = async () => {
    // call login API, then:
    setIsAuthenticated(true);
    setUserRole("user");
  };

  const logout = () => {
    // clear token, etc.
    setIsAuthenticated(false);
    setUserRole(undefined);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
