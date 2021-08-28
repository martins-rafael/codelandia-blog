import Head from 'next/head';
import dynamic from 'next/dynamic';
import { ChangeEvent, useEffect, useState } from 'react';

import { Header } from 'components/Header';
import { PostData } from 'types/post';

type FavoriteData = Pick<PostData, 'id' | 'favorited'>;

type HomeTemplateProps = {
  posts: PostData[];
};

const PostCard = dynamic(() => import('components/PostCard'), { ssr: false });

export const HomeTemplate = ({ posts }: HomeTemplateProps) => {
  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState<FavoriteData[]>(() => {
    if (typeof window !== 'undefined') {
      const storagedFavorites = localStorage.getItem('@CodelandiaBlog:favorites');

      if (storagedFavorites) {
        return JSON.parse(storagedFavorites);
      }
    }

    return [];
  });

  const [postsWithFavorites, setPostsWithFavorites] = useState<PostData[]>(() => {
    const postsArr = posts.map(post => ({
      ...post,
      favorited: false
    }));

    if (favorites.length) {
      postsArr.forEach(post => {
        favorites.forEach(item => {
          if (post.id === item.id) {
            post.favorited = item.favorited;
          }
        });
      });
    }

    return postsArr;
  });

  const filteredPosts = searchValue
    ? postsWithFavorites.filter(post => {
      return post.heading.toLowerCase().includes(
        searchValue.toLowerCase()
      );
    })
    : postsWithFavorites;

  useEffect(() => {
    localStorage.setItem(
      '@CodelandiaBlog:favorites',
      JSON.stringify(favorites)
    );
  }, [favorites]);

  const handleFavorite = (id: string) => {
    const updatedPosts = postsWithFavorites.map(post => {
      if (post.id === id) {
        post.favorited = !post.favorited;
      }

      return post;
    });

    setPostsWithFavorites(updatedPosts);

    const favoriteIndex = favorites.findIndex(favorite => favorite.id === id);

    if (favoriteIndex < 0) {
      setFavorites([...favorites, { id, favorited: true }]);
    } else {
      const updatedFavorites = [...favorites];
      updatedFavorites[favoriteIndex].favorited = !updatedFavorites[favoriteIndex].favorited;

      setFavorites(updatedFavorites);
    }
  };

  const handleSearch = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F3F5F7]">
      <Head>
        <title>Codelândia Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header onChange={handleSearch} />

      <main className="flex flex-col items-center w-full flex-1 py-24 px-5">
        {filteredPosts.map(post => (
          <PostCard
            key={post.id}
            post={post}
            onClick={handleFavorite}
          />
        ))}
      </main>
    </div >
  );
};