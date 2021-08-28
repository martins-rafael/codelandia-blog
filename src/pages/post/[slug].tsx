import client from 'graphql/client';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
import { PostData } from 'types/post';
import { GET_POSTS, GET_POST_BY_SLUG } from 'graphql/queries';
import { GetPostsQuery, GetPostBySlugQuery } from 'graphql/generated/graphql';
import { PostTemplate } from "templates/Post";

type PostProps = {
  post: PostData;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await client.request<GetPostsQuery>(GET_POSTS, {
    first: 3
  });

  const paths = posts.map(({ slug }) => ({
    params: { slug }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { post } = await client.request<GetPostBySlugQuery>(GET_POST_BY_SLUG, {
    slug: `${params?.slug}`
  });

  if (!post) return { notFound: true };

  return {
    props: {
      post
    }
  }
};

const Post = ({ post }: PostProps) => {
  const router = useRouter();
  if (router.isFallback) return null;

  return <PostTemplate post={post} />;
};

export default Post;