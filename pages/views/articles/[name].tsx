import {useEffect, useState} from "react";
import useCustomHookInitState from "../../customHooks/useCustomHookInitState";
import getCategoryArticles from "../../graphql_requests/queries/getCategoryArticles";
import {ApolloQueryResult} from "apollo-client";

/**
 * Article
 * Dynamic Page
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

export default (): JSX.Element => {
    const [data, setData] = useState<any>(null);
    const { runQuery, router } = useCustomHookInitState();

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
        <div>
            The Article Page
            <p>Post id</p>
        </div>
    )
};
