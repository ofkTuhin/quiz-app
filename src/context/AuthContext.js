import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthProvider = ({ children }) => {
  const [loading, setLoding] = useState(true);
  const [user, setUser] = useState();
  return (
    <AuthContext.Provider value={""}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
