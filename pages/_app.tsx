/**
 * _app
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import { ApolloProvider } from '@apollo/react-hooks'
import { useApollo } from '../lib/apolloClient';

export default function App({ Component, pageProps }:any) {
    const apolloClient = useApollo(pageProps.initialApolloState);

    return (
        <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
        </ApolloProvider>
    )
};
