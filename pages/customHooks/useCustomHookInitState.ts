/**
 * Custom hook to init state in components/pages
 * using apolloclient an useState and useEffect hooks
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import { useApolloClient } from "@apollo/react-hooks";
import { DocumentNode } from "graphql";

import { CustomHookInitState } from "../../system/types";
import {useRouter} from "next/router";

/**
 *
 * @return { client: {ApolloClient}, runQuery: function }
 */
export default (): CustomHookInitState | any => {
    const client = useApolloClient();
    const router = useRouter();

    async function runQuery(query: DocumentNode) {
        const queryResult = await client.query({query: query});
        return queryResult;
    }

    return { client, runQuery, router };
};
