import React, {useState} from "react";

export const AuthContext = React.createContext({jwt: '', setJwt: null})

export function AuthProvider({children} : any) {
    let [jwt, setJwt] = useState('')
    return (
        <AuthContext.Provider value={{jwt: jwt, setJwt: (setJwt as any)}}>
            {children}
        </AuthContext.Provider>
    );
}