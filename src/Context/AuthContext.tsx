import React, { createContext, useState } from "react";
import AuthService from "../Services/AuthService";

const AuthContext = createContext<any>(undefined);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return <AuthContext.Provider value={}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
