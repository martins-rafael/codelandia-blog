import { gql } from 'graphql-request';

export const GET_POSTS = gql`
  query getPosts($first: Int) {
  posts(first: $first, orderBy: createdAt_DESC) {
    id,
    heading,
    slug,
    createdAt,
    body {
      text
    }
  }
}
`;

export const GET_POST_BY_SLUG = gql`
  query getPostBySlug($slug: String!) {
  post(where: {slug: $slug}) {
    id,
    heading,
    slug,
    createdAt,
    body {
      text,
      html
    }
  }
}
`;