import { useEffect, useState } from "react";
import { fetchData } from "@/lib/fetchData";
import { LOGIN_URL, SIGNUP_URL } from "@/constants/url";

const getAccessToken = () => localStorage.getItem("accessToken");
const getRefreshToken = () => localStorage.getItem("refreshToken");

const useAuth = () => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  const login = async ({ email, password }: Record<string, string>) => {
    try {
      const { accessToken, refreshToken } = await fetchData<
        Record<string, string>
      >(LOGIN_URL, {
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

  const signup = async ({
    email,
    nickname,
    password,
    passwordConfirmation,
  }: Record<string, string>) => {
    try {
      await fetchData(SIGNUP_URL, {
        method: "POST",
        body: { email, nickname, password, passwordConfirmation },
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  };

  useEffect(() => {
    setAccessToken(getAccessToken());
    setRefreshToken(getRefreshToken());
  }, []);

  return { accessToken, login, logout, signup };
};

export default useAuth;
