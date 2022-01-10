/* eslint-disable @next/next/no-html-link-for-pages */
export default function Nav() {
  return (
    <>
      <div className="flex flex-col max-w-screen-xl px-4 pt-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8 text-[#dfdfdf]">
        <div className="flex flex-row items-center justify-between p-4">
          <a
            href="/"
            className="text-lg font-semibold rounded-lg tracking-widest focus:outline-none focus:shadow-outline"
          >
            <h2 className="text-4xl tracking-tighter lg:text-4xl">NINE4</h2>
          </a>
          <button
            className="cursor-pointer leading-none px-3 pt-3 md:hidden outline-none focus:outline-none"
            type="button"
            aria-label="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="md:flex flex-grow items-center hidden">
          <div className="flex-col flex-grow text-xl">
            <ul className="flex flex-grow justify-end flex-wrap items-center gap-6 uppercase">
              <li>
                <a href="/" className="px-5 py-3 flex items-center">
                  Work
                </a>
              </li>
              <li>
                <a href="/" className="px-5 py-3 flex items-center">
                  Team
                </a>
              </li>
              <li>
                <a href="/" className="px-5 py-3 flex items-center">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
