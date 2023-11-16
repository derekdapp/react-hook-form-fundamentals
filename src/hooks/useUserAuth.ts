import { useState } from "react";

interface Hobby {
  name: string;
}

interface UserType {
  username: string;
  email: string;
  password: string;
  hobbies?: Hobby[] | undefined;
}

interface UserAuthType {
  user: UserType | null;
  login: (user: UserType) => void;
  logout: () => void;
  errors: string[];
}

const useUserAuth = (): UserAuthType => {
  const [user, setUser] = useState<UserType | null>(null);

  const handleLogin = (user: UserType) => {
    setUser(user);
  };

  return {
    user,
    login: handleLogin,
    logout: () => setUser(null),
    errors: [],
  };
};

export default useUserAuth;

export type { UserType, UserAuthType };
