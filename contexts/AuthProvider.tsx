import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { fetchData } from "@/lib/fetchData";
import { LOGIN_URL, REFRESH_URL } from "@/constants/url";

interface AuthContextType {
  accessToken: string | null;
  login: () => Promise<void>;
  logout: VoidFunction;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  const refreshAccessToken = useCallback(async () => {
    try {
      const { accessToken } = await fetchData(REFRESH_URL, {
        method: "POST",
        body: { refreshToken },
      });
      setAccessToken(accessToken);
    } catch (error) {
      throw new Error(`Fetch failed: ${error}`);
    }
  }, [refreshToken]);

  const login = async () => {
    try {
      const { accessToken, refreshToken } = await fetchData(LOGIN_URL, {
        method: "POST",
        body: { email: "bonobono@email.com", password: "12341234" },
      });
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
    } catch (error) {
      throw new Error(`Login failed: ${error}`);
    }
  };

  const logout = () => {
    setAccessToken(null);
    setRefreshToken(null);
  };

  useEffect(() => {
    const interval = setInterval(refreshAccessToken, 15 * 60 * 1000);
    return () => clearInterval(interval);
  }, [refreshAccessToken]);

  return (
    <AuthContext.Provider value={{ accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
