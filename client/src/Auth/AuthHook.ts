import {useLocalStorage} from "../Shared/LocalStorageHook";

export function useJwt() {
    let [jwt, setJwt] = useLocalStorage("jwt", '');
    return [jwt, setJwt];
}