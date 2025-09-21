import { createContext, useContext, useEffect, useState, type FC, type ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  userRole?: "admin" | "user";
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
    async function checkAuth() {
      try {
        // pretend fetch to validate token
        const res = await fetch("/api/auth/validate");
        const data = await res.json();
        setIsAuthenticated(data.ok);
        setUserRole(data.role);
      } catch {
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    }
    checkAuth();
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
    <AuthContext.Provider value={{ isAuthenticated, isLoading, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
