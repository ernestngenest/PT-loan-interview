import React from "react";

export default function Header() {
  return (
    <header className="flex border-b py-4 px-4 sm:px-10 bg-white font-sans min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center gap-4 w-full">
        <div
          id="collapseMenu"
          className="lg:!flex lg:flex-auto lg:ml-4 max-lg:hidden max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
        >
          <div className="lg:!flex lg:flex-auto max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <ul className="lg:flex lg:gap-x-8 max-lg:space-y-2">
              <li className="mb-6 hidden max-lg:block">
                <a href="#">
                  <img
                    src="https://readymadeui.com/readymadeui.svg"
                    alt="logo"
                    className="w-36"
                  />
                </a>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <a
                  href="#"
                  className="hover:text-[#303336] text-[#000000] block font-bold text-[15px]"
                >
                  <span className="text-3xl">Dashboard</span>
                </a>
              </li>
            </ul>
            <ul className="lg:flex lg:items-center ml-auto max-lg:block lg:space-x-8 ml-auto">
              <div className="border-l border-[#333] h-6 max-lg:hidden" />
              <li className="max-lg:border-b max-lg:py-3 max-lg:mt-2">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                  <img
                    src="/icons/segitiga-bawah.png"
                    alt=""
                    className="p-2  w-6 h-6"
                  />
                </div>
              </li>
              <div className="border-l border-[#333] h-6 max-lg:hidden" />
              <li className="max-lg:border-b max-lg:py-3 max-lg:mt-2">
                <div className="flex">
                  <span className="text-l">YOHANNES AFFANDY</span>
                  <img
                    src="/icons/segitiga-bawah.png"
                    alt=""
                    className="p-2  w-6 h-6"
                  />
                </div>
              </li>
              <div className="border-l border-[#333] h-6 max-lg:hidden" />
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
