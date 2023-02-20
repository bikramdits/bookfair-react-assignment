import { gql } from "@apollo/client";

const createPost = gql`
  mutation ($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`;

export default createPost
