import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("careflow_user")) || null;
    } catch {
      return null;
    }
  });

  const register = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem("careflow_users") || "[]");

    const exists = users.some(
      (item) => item.email.toLowerCase() === email.toLowerCase()
    );

    if (exists) {
      return { success: false, message: "Email is already registered." };
    }

    const newUser = { name, email, password };
    users.push(newUser);

    localStorage.setItem("careflow_users", JSON.stringify(users));

    const loggedInUser = { name, email };
    localStorage.setItem("careflow_user", JSON.stringify(loggedInUser));
    setUser(loggedInUser);

    return { success: true };
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("careflow_users") || "[]");

    const matchedUser = users.find(
      (item) =>
        item.email.toLowerCase() === email.toLowerCase() &&
        item.password === password
    );

    if (!matchedUser) {
      return { success: false, message: "Invalid email or password." };
    }

    const loggedInUser = {
      name: matchedUser.name,
      email: matchedUser.email,
    };

    localStorage.setItem("careflow_user", JSON.stringify(loggedInUser));
    setUser(loggedInUser);

    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem("careflow_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}