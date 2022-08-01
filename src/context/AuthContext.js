import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import "../firebase";
const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};
export const AuthProvider = ({ children }) => {
  const [loading, setLoding] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoding(false);
    });
    return unsubscribe;
  });
  // signUp function
  const signUp = async () => {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, "email", "password");
    // update profile

    await updateProfile(auth.currentUser, {
      displayName: "username",
    });
    const user = auth.currentUser;
    setCurrentUser({ ...user });
  };

  // login function

  const login = () => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, "email", "password");
  };

  // logout function
  const logout = () => {
    const auth = getAuth();
    return signOut(auth);
  };
  const value = {
    currentUser,
    signUp,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
