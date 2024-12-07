import { getMe } from "@/apis/user";
import {
  createContext,
  useState,
  useEffect,
  useContext,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

interface UserProps {
  nickname: string;
  image: string | null;
}

interface UserContextProps {
  isLoading: boolean;
  user?: UserProps;
  setUser?: Dispatch<SetStateAction<UserProps | undefined>>;
}

const UserContext = createContext<UserContextProps>({ isLoading: true });

export function UserProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<UserProps>();

  useEffect(() => {
    const access = localStorage.getItem("accessToken");
    const refresh = localStorage.getItem("refreshToken");
    if (access || refresh)
      getMe()
        .then((data) => {
          const { nickname, image } = data;
          setUser({ nickname, image });
        })
        .catch(() => {})
        .finally(() => {
          setIsLoading(false);
        });
    else setIsLoading(false);
  }, []);

  return (
    <UserContext.Provider value={{ isLoading, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
