import {useApolloClient} from "@apollo/client";
import {useJwt} from "./AuthHook";
import {useHistory} from "react-router-dom";
import {useAlert} from "./AlertHook";

export function useGqlQuery() {
    let client = useApolloClient();
    let history = useHistory();
    let [alert, setAlert] = useAlert();

    return ({query, variables = {}, onSuccess, onError}: any) => client.query({
        query: query,
        variables: variables
    })
        .then(result =>
            {
                if(onSuccess)
                    onSuccess(result.data);
            }
        )
        .catch(error => {
            if(error.message === 'GqlAuthGuard')
            {
                history.push('/login');
                return;
            }
            setAlert({type: 'danger', message: error.message});
            if(onError)
                onError(error);
        });
}

export function useGqlMutation() {
    let client = useApolloClient();
    let history = useHistory();
    let [alert, setAlert] = useAlert();

    return ({mutation, variables = {}, onSuccess, onError}: any) => client.mutate({
        mutation: mutation,
        variables: variables
    })
        .then(result =>
        {
            if(onSuccess)
                onSuccess(result.data);
        }
        )
        .catch(error => {
            if(error.message === 'GqlAuthGuard') {
                history.push('/login');
                return;
            }
            setAlert({type: 'danger', message: error.message});
            if(onError)
                onError(error);
        });
}