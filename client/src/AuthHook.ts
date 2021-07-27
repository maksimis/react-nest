import {useContext} from "react";
import {useLocation} from "react-router";
import {useLocalStorage} from "./LocalStorageHook";

export function useJwt() {
    let [jwt, setJwt] = useLocalStorage("jwt", '');
    return [jwt, setJwt];
}