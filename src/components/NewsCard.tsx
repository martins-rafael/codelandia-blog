export const NewsCard = () => (
  <div className="mb-12 w-full max-w-4xl bg-white p-5 rounded-md drop-shadow-sm">
    <header className="flex justify-between">
      <span className="text-[#B6B6B6]">02 de jul, 2021</span>

      <svg
        className="w-6 h-6"
        fill="none"
        stroke="#574AE8"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </header>

    <div>
      <h2 className="mt-5 text-2xl text-[#313131] font-semibold">Agora é oficial: o Windows 11 está vindo</h2>
      <p className="mt-2 text-lg text-[#B6B6B6]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante.
        Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.
      </p>
    </div>
  </div>
);