import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";
// Contexto
export const AuthContext = createContext();
// Componente Provider 
const AuthContextProvider = (props) => {
  
  const [userAuth, setUserAuth] = useState({
    username: "",
    password: "",
  });

  const value = { userAuth, setUserAuth };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
// Hook 
export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuthContext must be used within a AuthContextProvider")
    }
    return context
}   


export default AuthContextProvider
