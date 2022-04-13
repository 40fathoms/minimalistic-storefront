import ReactDOM from 'react-dom/client';

import './index.css';
import AppQuery from './GraphQL/AppQuery';

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
        <AppQuery />
    </ApolloProvider >
);
