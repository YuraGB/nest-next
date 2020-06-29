/**
 * Category
 * Dynamic page
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import { useRouter, withRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks';
import { NextPage } from "next";
import Layout from "../../../hoc/Layout/Layout";
import img from "../../../assets/background/doomsdayClock.jpg";
import { initializeApollo } from "../../../lib/apolloClient";
import getCategoryArticles from "../../graphql_requests/queries/getCategoryArticles";
import getArticles from "../../graphql_requests/queries/getArticles";

const Category: NextPage = (props: any): JSX.Element => {
    const router = useRouter();
    console.log(router, 'query');
/*    const { loading, error, data } = useQuery(getCategoryArticles(), {
        variables: { language: 'english' },
    });
    console.log(loading, error, data)*/
    return (
        <Layout navProps={props.initialApolloState || {}}>
            <div>Hello!!!!!!!!!!</div>
            <style jsx global>
                {`
                    main {
                        background: url(${img}) no-repeat;
                    }                    
                `}
            </style>
        </Layout>
    )
};/*

Category.getInitialProps = async () => {
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
        unstable_revalidate: 1
    }
};
*/
export default withRouter(Category);