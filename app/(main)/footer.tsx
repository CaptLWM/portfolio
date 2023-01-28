import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer
        className="body-font w-full h-16 
            fixed left-0 bottom-0
            flex justify-between
            text-white text-2xl"
      >
        <div className="">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <Link legacyBehavior href="/">
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <span className="ml-3 text-xl dark:text-white">포트폴리오</span>
              </a>
            </Link>
          </div>
        </div>
        <div className="">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2020 Tailblocks —
              <a
                href="https://deserted-pamphlet-acb.notion.site/PLANNING-7f48e6b8817a43b7a45e8ff05e159008"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @notion
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
