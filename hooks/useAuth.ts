import { useCallback, useEffect, useState } from "react";
import { fetchData } from "@/lib/fetchData";
import { LOGIN_URL, REFRESH_URL } from "@/constants/url";

const getAccessToken = () => localStorage.getItem("accessToken");
const getRefreshToken = () => localStorage.getItem("refreshToken");

const useAuth = () => {
  const [accessToken, setAccessToken] = useState<string | null>(
    getAccessToken()
  );
  const [refreshToken, setRefreshToken] = useState<string | null>(
    getRefreshToken()
  );

  const refreshAccessToken = useCallback(async () => {
    if (!refreshToken) return;

    try {
      const { accessToken } = await fetchData(REFRESH_URL, {
        method: "POST",
        body: { refreshToken },
      });

      localStorage.setItem("accessToken", accessToken);
      setAccessToken(accessToken);
    } catch (error) {
      throw new Error(`Refresh token failed: ${error}`);
    }
  }, [refreshToken]);

  const login = async ({ email, password }: Record<string, string>) => {
    try {
      const { accessToken, refreshToken } = await fetchData(LOGIN_URL, {
        method: "POST",
        body: { email, password },
      });

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setAccessToken(null);
    setRefreshToken(null);
  };

  useEffect(() => {
    const refreshInterval = setInterval(refreshAccessToken, 15 * 60 * 1000);
    return () => clearInterval(refreshInterval);
  }, [refreshAccessToken]);

  return { accessToken, login, logout };
};

export default useAuth;
