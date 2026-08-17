import { createContext , useState} from "react";
export const AuthContext=createContext();

export  const AuthProvider=({children})=>{

const[isAuthencated, setIsAuthencated]=useState(false)

const login= ()=> setIsAuthencated(true)
const logout= ()=> setIsAuthencated(false)
return(
    <AuthContext.Provider value={{isAuthencated, login,logout}} >
{children}
    </AuthContext.Provider>

)
}