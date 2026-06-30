import { createContext, useContext, useState } from "react";

interface User {
  _id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  token: string | null;
  user: User | null;

  login: (token: string, user: User) => void;
  logout: () => void;

  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem("user");

    return stored ? JSON.parse(stored) : null;
  });

  function login(token: string, user: User) {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    setToken(token);
    setUser(user);
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setToken(null);
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        login,
        logout,
        isAuthenticated: !!token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext)!;
}