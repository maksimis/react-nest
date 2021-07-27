import React, {useState} from "react";

export const AlertContext = React.createContext([{type: '', message: ''} as any, null as any])

export function AlertProvider({children} : any){
    let [alert, setAlert] = useState({type: '', message: ''});

    return (
      <AlertContext.Provider value={[alert, setAlert as any]}>
          {children}
      </AlertContext.Provider>
    );
}