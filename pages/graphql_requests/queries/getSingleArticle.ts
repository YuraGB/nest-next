/**
 * Get single article
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import gql from 'graphql-tag';
import { DocumentNode } from "graphql";

export default ( id: string, ...fields: string[]): DocumentNode => {
    return gql`
        query {
            getSingleArticle (
                id: "${id}"
            ) {
                ${fields.join(' ')}
            }
        }
`};
