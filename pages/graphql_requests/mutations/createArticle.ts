/**
 * Mutation
 * Create Article
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import gql from 'graphql-tag';
import { ArticleInput } from "../../../src/articles/graphql/inputs/article.input";
import { DocumentNode } from "graphql";

/**
 *
 * @param type
 * @param input
 * @param fields
 */
export default (
    type: string,
    input: ArticleInput,
    fields: string[] | string
): DocumentNode => gql`
    mutation {
        ${type === 'DD' ? 'createDDArticle' : 'createNGArticle'} (
            input: ${JSON.stringify({...input, ...{type: type}})}   
        ) {
            ${Array.isArray(fields) ? fields.join(' ') : fields}
        }
    }
`;