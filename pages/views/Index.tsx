/**
 * Home Page
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import { NextPage } from 'next';

import img from "../../assets/background/doomsdayClock.jpg";
import Layout from "../../hoc/Layout/Layout";
import { initializeApollo } from "../../lib/apolloClient";
import getArticles from "../graphql_requests/queries/getArticles";

const Index: NextPage<any> = (props) => {
    return (
        <Layout navProps={props.initialApolloState}>
            <div>Hello!!!!!!!!!!</div>
            <style jsx global>
                {`
                    main {
                        background: url(${img}) no-repeat;
                    }                    
                `}
            </style>
        </Layout>
    );
};

Index.getInitialProps = async () =>{
    const apolloClient = initializeApollo();
    await apolloClient.query({
        query: getArticles('label', 'href', 'type')
    });

    //extract data from Apollo client cache
    const extract = apolloClient.cache.extract();

    //perform data for initial state
    const initState = Object.entries(extract)
        .filter(query => query[0] !== "ROOT_QUERY")
        .map(article => article[1]);

    return {
        initialApolloState: initState,
        unstable_revalidate: 1,
    }
};

export default Index;