import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {App} from "./App";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client";
import { AuthProvider } from './AuthProvider';

const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache({
        addTypename: false
    })
});


render(
    <AuthProvider>
        <ApolloProvider client={client}>
                <App />
        </ApolloProvider>
    </AuthProvider>,
    document.getElementById('app')
);
