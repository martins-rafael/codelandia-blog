import Link from 'next/link';

export const Header = () => (
  <header className="flex flex-col items-center w-full h-64 py-12 px-5 bg-gradient-to-r from-[#574AE8] to-[#3EA1DB]">
    <div className="flex justify-between w-full max-w-4xl">
      <Link href="/">
        <a>
          <h1 className="text-2xl text-white">Codelândia</h1>
        </a>
      </Link>
      
      <h2 className="text-2xl text-white">blog</h2>
    </div>

    <div className="flex mt-20 p-4 w-full max-w-4xl bg-white bg-opacity-20 rounded-md">
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="#ffffff"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      ><path
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
        placeholder-opacity-50 
        focus:outline-none
        "
        type="text"
        placeholder="Pesquisar no blog"
      />
    </div>
  </header>
);