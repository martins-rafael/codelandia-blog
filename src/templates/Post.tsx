import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';

import { Header } from 'components/Header';
import { PostData } from 'types/post';
import { formatDate } from 'utils/formatDate';

type PostTemplateProps = {
  post: PostData;
};

export const PostTemplate = ({ post }: PostTemplateProps) => {
  const router = useRouter();
  const { heading, createdAt, body } = post;
  const date = formatDate(createdAt);
  const paragraphsWithClass = body.html.replace(/<p>/g, '<p class="my-5">');

  return (
    <div className="flex flex-col items-center justify-center bg-[#F3F5F7]">
      <Head>
        <title>{heading} | Codelândia Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header shouldExcludeSearch />

      <main
        data-aos="fade-right"
        className="pb-24 px-5"
        style={{ marginTop: "-100px" }}
      >
        <div className="w-full max-w-4xl bg-white p-5 rounded-md drop-shadow-sm">
          <header className="flex justify-between">
            <button
              className="flex text-[#B6B6B6]"
              onClick={() => router.back()}
            >
              <svg
                className="mr-2 w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Voltar
            </button>

            <span className="text-[#B6B6B6]">{date}</span>
          </header>

          <div>
            <h2 className="mt-5 text-2xl text-[#313131] font-semibold">{heading}</h2>
            <article
              className="mt-2 text-lg text-[#757575]"
              dangerouslySetInnerHTML={{ __html: paragraphsWithClass }}
            />
          </div>
        </div>
      </main>
    </div>
  );
};