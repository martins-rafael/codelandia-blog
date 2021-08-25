import Head from 'next/head';
import { Header } from 'components/Header';

export const HomeTemplate = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-[#F3F5F7]">
    <Head>
      <title>Codelândia Blog</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main className="flex flex-col items-center w-full flex-1 py-24 text-center ">

    </main>
  </div>
);