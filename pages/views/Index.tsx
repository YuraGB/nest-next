import * as React from 'react';
import { NextPage } from 'next';
import gql from 'graphql-tag';

import img from "../../assets/background/doomsdayClock.jpg";
import Layout from "../../hoc/Layout/Layout";
import { initializeApollo } from '../../lib/apolloClient';

const query = gql`
mutation {
  createDDArticle(input: {
    href: "DDArticle",
    label:"DDArticle",
    shirtDescription:"test shirtDesc", 
    source:"sourceTest",
    date: "Wed Jun 17 2020 14:12:43 GMT+0300 (Eastern European Summer Time)",
    picture: "testPictufgre",
    description: "Deeeeeeeeeescription"
  })
  {
    href, label, shirtDescription, source, date, description
  }
}`;

const Index: NextPage = (props: any) => {
    console.log(props);
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

    await apolloClient.mutate({
        mutation: query
    });

    return {
        props: {
            initialApolloState: apolloClient.cache.extract(),
        },
        unstable_revalidate: 1,
    }
}

export default Index;