/**
 * Category articles
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import gql from 'graphql-tag';
import { DocumentNode } from "graphql";

export default ( type: string | string[], ...fields: string[]): DocumentNode => {
    return gql`
        query {
            getCategoryArticles (
                input: {type: "${type}"}
            ) {
                ${fields.join(' ')}
            }
        }
`};