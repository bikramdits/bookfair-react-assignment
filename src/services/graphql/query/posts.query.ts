import gql from "graphql-tag";

const postsQuery = gql`
  query {
    posts {
      data {
        id
        title
        body
      }
    }
  }
`;

export default postsQuery;
