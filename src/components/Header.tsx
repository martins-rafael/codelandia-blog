import Link from 'next/link';
import { ChangeEvent } from 'react';

type HeaderProps = {
  shouldExcludeSearch?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Header = ({ shouldExcludeSearch = false, onChange }: HeaderProps) => {
  return (
    <header
      className="
        flex 
        flex-col 
        items-center
        w-full
        h-64
        py-12 
        px-5 
        
      "

      // background by SVGBackgrounds.com
      style={{
        backgroundImage: 'url(/img/endless-constellation.svg)',
        backgroundColor: '#330033'
      }}
    >
      <div className="flex justify-between w-full max-w-4xl">
        <Link href="/">
          <a>
            <h1 className="text-2xl text-white">Codelândia</h1>
          </a>
        </Link>

        <h2 className="text-2xl text-white">blog</h2>
      </div>

      {!shouldExcludeSearch && (
        <div
          className="
            flex 
            mt-20 
            p-4 
            w-full
            max-w-4xl 
            bg-white 
            bg-opacity-20 
            rounded-md
          "
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="#ffffff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          <input
            className="
              flex-1
              ml-4 text-lg 
              text-white
              bg-transparent
              placeholder-white 
              placeholder-opacity-80 
              focus:outline-none
            "
            type="text"
            placeholder="Pesquisar no blog"
            onChange={onChange}
          />
        </div>
      )}
    </header>
  );
};