import React from 'react';
import ReactDOM from 'react-dom';
import {App} from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client";
import {setContext} from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import {AlertProvider} from "./AlertProvider";
import {BrowserRouter as Router} from "react-router-dom";

const httpLink = createHttpLink({uri: 'http://localhost:3001/graphql'})

const authLink = setContext((operation, previousContext) => {
    const { headers } = previousContext
    let jwtToken = window.localStorage.getItem('jwt');
    if(jwtToken)
        jwtToken = JSON.parse(jwtToken);

    return {
        ...previousContext,
        headers: {
            ...headers,
            'Authorization': jwtToken ? `Bearer ${jwtToken}` : ''
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink) as any,
    cache: new InMemoryCache({
        addTypename: false
    })
});


ReactDOM.render(
        <ApolloProvider client={client}>
            <AlertProvider>
                <Router>
                    <App />
                </Router>
            </AlertProvider>
        </ApolloProvider>,
    document.getElementById('root')
);