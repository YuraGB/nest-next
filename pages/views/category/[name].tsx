/**
 * Category
 * Dynamic page
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import { useRouter, withRouter } from 'next/router'
import { NextPage } from "next";
import { ApolloQueryResult } from "apollo-client";

import Layout from "../../../hoc/Layout/Layout";
import img from "../../../assets/background/doomsdayClock.jpg";
import getCategoryArticles from "../../graphql_requests/queries/getCategoryArticles";
import { useEffect, useState } from "react";
import useCustomHookInitState from "../../customHooks/useCustomHookInitState";

const Category: NextPage = (): JSX.Element => {
    const router = useRouter();
    const [data, setData] = useState<any>(null);
    const { runQuery } = useCustomHookInitState();

    useEffect(()=> {
        if(router && router.query.name !== undefined) {
            runQuery(getCategoryArticles(router.query.name,'href'))
                .then((query: ApolloQueryResult<any>) =>
                    setData(
                        query.data
                    ));
        }
    }, [router]);

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
    )
};

export default withRouter(Category);