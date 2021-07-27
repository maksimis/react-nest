import {useApolloClient} from "@apollo/client";
import {useJwt} from "./AuthHook";
import {useHistory} from "react-router";

export function useGqlClient(query : any) {
    let client = useApolloClient();
    let history = useHistory();

    client.query({
        query: query
    })
}