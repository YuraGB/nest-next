import * as React from 'react';
import { NextPage, NextPageContext } from 'next';

import img from "../../assets/background/doomsdayClock.jpg";

import Layout from "../../hoc/Layout/Layout";

interface Props {
    query: { title?: string };
}

const Index: NextPage<Props> = ({ query }) => {
    const greetName = query.title ? query.title : 'World';
    return (
        <Layout>
            <div>Hello!!!!!!!!!, {greetName}!</div>
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

Index.getInitialProps = async (ctx: NextPageContext) => {
    const { query } = ctx;
    return { query };
};

export default Index;