import client from 'graphql/client';
import { GetStaticProps } from 'next';
import { PostData } from 'types/post';
import { GET_POSTS } from 'graphql/queries';
import { GetPostsQuery } from 'graphql/generated/graphql';
import { HomeTemplate } from "templates/Home";

type HomeProps = {
  posts: PostData[];
};

export const getStaticProps: GetStaticProps = async () => {
  const { posts } = await client.request<GetPostsQuery>(GET_POSTS);

  return {
    props: { posts }
  };
};

const Home = ({ posts }: HomeProps) => <HomeTemplate posts={posts} />;
export default Home;