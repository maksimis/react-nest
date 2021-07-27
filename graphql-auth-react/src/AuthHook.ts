import {useContext} from "react";
import {AuthContext} from "./AuthProvider";

export function useJwt() {
    let value = useContext(AuthContext);
    return [value.jwt, value.setJwt];
}