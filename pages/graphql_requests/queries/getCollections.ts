import gql from 'graphql-tag';

export default (...fields: string[]) => gql`
    query {
        collections {
            ${fields.join(' ')}
        }
    }
`;
