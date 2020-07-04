/**
 * Category
 * Dynamic page
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import { NextPage } from "next";
import { ApolloQueryResult } from "apollo-client";

import Layout from "../../../hoc/Layout/Layout";
import img from "../../../assets/background/doomsdayClock.jpg";
import getCategoryArticles from "../../graphql_requests/queries/getCategoryArticles";
import { useEffect, useState } from "react";
import useCustomHookInitState from "../../customHooks/useCustomHookInitState";
import getArticles from "../../graphql_requests/queries/getArticles";

const Category: NextPage = (): JSX.Element => {
    const [data, setData] = useState<any>(null);
    const { runQuery, router } = useCustomHookInitState();

    useEffect(()=> {
        if(router && router.query.name !== undefined) {

            runQuery(getArticles('label', 'href', 'type', 'as'))
                .then((query: ApolloQueryResult<any>) =>
                    setData(
                        query.data
                    ));
        }
    }, [router]);
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
    )
};

export default Category;