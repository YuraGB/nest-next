import * as React from 'react';
import { NextPage, NextPageContext } from 'next';

interface Props {
    query: { title?: string };
}

const Index: NextPage<Props> = ({ query }) => {
    const greetName = query.title ? query.title : 'World';
    return <div>Hello!!!!!!!!!, {greetName}!</div>;
};

Index.getInitialProps = async (ctx: NextPageContext) => {
    const { query } = ctx;
    return { query };
};

export default Index;