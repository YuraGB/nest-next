import * as React from 'react';
import { NextPage } from 'next';
import gql from 'graphql-tag';

import img from "../../assets/background/doomsdayClock.jpg";
import Layout from "../../hoc/Layout/Layout";
import { initializeApollo } from '../../lib/apolloClient';
import { useQuery } from "@apollo/react-hooks";

export const query = gql`
query {
    article {href label}

}`;

const Index: NextPage = () => {
    const {data} = useQuery(query);
    console.log(data);

    return (
        <Layout>
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

export async function getStaticProps() {
    const apolloClient = initializeApollo();

    await apolloClient.query({
        query: query
    });

    return {
        props: {
            initialApolloState: apolloClient.cache.extract(),
        },
        unstable_revalidate: 1,
    }
}

export default Index;