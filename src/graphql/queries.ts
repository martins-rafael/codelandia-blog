import { gql } from 'graphql-request';

export const GET_POSTS = gql`
  query getPosts {
  posts {
    id,
    heading,
    slug,
    body {
      html
    }
  }
}
`;

export const GET_POST_BY_SLUG = gql`
  query getPostsBySlug($slug: String!) {
  posts(where: {slug: $slug}) {
    id,
    heading,
    slug,
    body {
      html
    }
  }
}
`;