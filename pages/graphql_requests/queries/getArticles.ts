/**
 * Query
 * getArticles
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import gql from 'graphql-tag';
import { DocumentNode } from "graphql";

export default (...fields: string[]): DocumentNode => gql`
    query {
        article {
            ${fields.join(' ')}
        }
    }
`;