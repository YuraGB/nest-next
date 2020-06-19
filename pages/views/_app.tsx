import { ApolloProvider } from '@apollo/react-hooks'
import { useApollo } from '../../lib/apolloClient';
import React from "react";

export default function App({ Component, pageProps }:any) {
    const apolloClient = useApollo(pageProps.initialApolloState);

    return (
        <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
        </ApolloProvider>
    )
}