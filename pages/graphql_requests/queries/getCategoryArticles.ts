/**
 * Category articles
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import gql from 'graphql-tag';
import { DocumentNode } from "graphql";

export default ( type= '', ...fields: string[]): DocumentNode => gql`
    query {
        getCategoryArticles (${JSON.stringify({type: type})}) {
            ${fields.join(' ')}
        }
    }
`;