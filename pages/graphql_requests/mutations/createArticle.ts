import gql from 'graphql-tag';
import { ArticleInput } from "../../../src/articles/graphql/inputs/article.input";

export default (
    type: string,
    input: ArticleInput,
    fields: string[] | string
) => gql`
    mutation {
        ${type === 'DD' ? 'createDDArticle' : 'createNGArticle'} (
            ${JSON.stringify({...input, ...{type: type}})}   
        ) {
            ${Array.isArray(fields) ? fields.join(' ') : fields}
        }
    }
`;