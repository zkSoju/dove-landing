"use client";

import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { Command } from "cmdk";
import { useEffect, useState } from "react";
import CommandMenu from "../components/CommandMenu";

export default function Home() {
  return (
    <>
      {/* <div className="background-gradient absolute h-screen w-full opacity-50">
        <div className="background-gradient-pattern" />
      </div> */}
      <CommandMenu />
      <img
        src="./bg.jpg"
        className="background-gradient-dove absolute h-screen w-full object-cover"
        alt=""
      />
      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 lg:px-12">
        {/* <header className="max-x-6xl relative z-50 bg-transparent">
          <div className="border-b border-white/10"></div>
          <div className="w-full">
            <div className="container flex h-28 items-center justify-center">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="text-3xl text-white"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M372 22.41c-6.4 33.89 6.8 54.39 32.6 66.3 4.6 8.17 8.4 16.29 11.4 24.39-15.3-17.02-33.3-25.31-58-13.12 14.1 27.62 35.6 32.42 61.5 23.42 6.2 21 7.7 41.6 6.3 62.4 0 .2 0 .4-.1.6 1 .6 2 1.1 2.9 1.7 4.9 2.9 9.7 5.9 14.3 8.9.4-3.3.7-6.7.9-10 1.2-17.6.4-35.4-3.3-53.5 26.8 5.1 43-8.6 52.8-33.62-24.2-2.6-44.9 1.22-55.3 22.92-2.6-9.4-6-18.9-10.3-28.46 23.7-15.85 37.7-36.07 26-67.62-22.5 8.53-33.5 22.13-36.3 39.47C412.8 44.33 400.3 28 372 22.41zM190.7 62.63C183.4 82.89 176.4 110 172 136.8c-3.2 19.9-5.3 39.7-5.7 56.9 30.4 25.9 63.3 44.6 99.8 46.3-33.2-52.5-63-120-75.4-177.37zM56.82 102.2c3.08 75.4 32.03 178.7 110.68 233.2l5.5 3.8-2 6.3c-3.2 10.1-7.8 19-15 25.8-7.3 6.8-16.9 11.2-28.7 13.3-22.5 4-54.14.8-101.89-7.7-9.6 24.1-8.29 50.6.43 72.1 8.72 21.3 24.29 36.6 42.1 40.6 24.85-31.8 62.26-70.4 113.56-68.1 52 2.3 111.5-12.1 146.9-47.6 12.5-12.4 23.2-42.3 29.4-68.6 6.2-26.3 8.7-49 8.7-49l.6-6.1 6-1.6c21.6-5.6 47.6-10.7 76.7-25.4-8.6-5.8-18.7-12.6-30.4-19.6-17.9-10.6-37.6-19.8-47.3-20.9-16.6-1.7-26 1.3-32.5 6.1-6.4 4.8-10.6 12.2-14.3 21.1-3.6 8.9-6.4 19-11.4 28.1-5.1 9.2-14 17.8-26.8 19.2-56 6.5-103.8-22.9-143.9-60.1-33-30.6-61.58-66.8-86.38-94.9zm376.08 148c-7.1 2.6-13.9 4.9-20.4 6.8-1.8 6.9-3.7 13.8-5.6 20.7l17.4 4.8c3-10.7 5.9-21.5 8.6-32.3z" />
              </svg>
            </div>
          </div>
        </header> */}
        <section className="relative h-full w-full py-10 text-white">
          <div className="container flex h-full flex-col items-start justify-center">
            <p className="mb-8 text-xs uppercase tracking-[0.25em] text-[#c4fb60]">
              ✣ unified ✣
            </p>
            <h2 className="mb-16 bg-clip-text text-center font-adhesion text-6xl tracking-tighter text-white lg:text-9xl">
              liquidity
            </h2>

            <div className="flex items-center justify-center space-x-4">
              <a
                href="https://dove.whitenoise.rs/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button className="group relative inline-block cursor-pointer rounded-sm bg-[#c4fb60] p-px hover:bg-white">
                  {/* <div className="group absolute inline-block h-full w-full cursor-pointer rounded-sm bg-[#c4fb60] p-px opacity-50 blur-lg" /> */}

                  <span className="relative inline-block w-full whitespace-nowrap rounded-sm bg-black px-6 py-4 text-center text-xs font-medium uppercase leading-4 tracking-widest text-white duration-200 group-hover:bg-white group-hover:text-dove">
                    Explore{" "}
                    <span className="ml-1 rounded-sm bg-white/10 px-2 py-1 text-sm font-normal">
                      ⌘K
                    </span>
                  </span>
                </button>
              </a>
              {/* <a
                href="https://0xst.notion.site/Dove-Protocol-5a174626e63f4c26a30e753fc7460714"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button className="group inline-block cursor-pointer rounded-sm bg-white/10 from-white to-white p-px hover:bg-gradient-to-r">
                  <span className="transition-color  inline-block w-full whitespace-nowrap rounded-sm bg-black px-6 py-4 text-center text-base font-medium leading-4 tracking-wide text-white duration-200 group-hover:bg-white group-hover:text-dove">
                    Learn More
                  </span>
                </button>
              </a> */}
            </div>
            {/* <div className="mt-32 flex h-12 items-center space-x-16">
                <div className="flex flex-col">
                  <p className="text-xl font-medium">$0</p>
                  <p className="text-white/50">Total Liquidity</p>
                </div>
                <div className="hidden h-full w-px bg-white/10 lg:block" />
                <div className="flex flex-col">
                  <p className="text-xl font-medium">$0</p>
                  <p className="text-white/50">Total Volume</p>
                </div>
                <div className="hidden h-full w-px bg-white/10 lg:block" />
                <div className="flex flex-col">
                  <p className="text-xl font-medium">0</p>
                  <p className="text-white/50">Total Pairs</p>
                </div>
              </div> */}
          </div>
        </section>
      </div>
      {/* <section className="relative mx-auto flex max-w-6xl flex-col justify-center overflow-hidden py-10 text-white">
        <div className="mt-24" />
        <div className="container flex flex-col items-center justify-center">
          <p className="text-xs uppercase tracking-widest text-[#c4fb60]">
            Right when you need it
          </p>
          <h1 className="mt-4 font-adhesion text-5xl tracking-tighter">
            strapped liquidity
          </h1>
        </div>
        <div className="container mt-16 grid grid-cols-12 gap-8 rounded-sm px-16">
          <div className="tab-gradient col-span-7 flex h-[30rem] flex-col space-y-4 rounded-sm p-px shadow-dove">
            <div className="relative flex h-full overflow-hidden bg-dove">
              <img
                src="/secure.png"
                alt=""
                className="pointer-events-none absolute h-full w-full object-cover opacity-50 gradient-mask-b-0"
              />
              <div className="relative p-8">
                <div className="flex h-full flex-col justify-end ">
                  <div className="flex flex-col">
                    <p className="text-xs uppercase tracking-widest text-[#c4fb60]">
                      Secure
                    </p>
                    <p className="mt-2 text-2xl">Minimize your risks</p>
                    <p className="mt-2 text-olive">
                      Leverages cross-chain messaging
                      <br /> to enable secure and reliable liquidity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-gradient relative col-span-5 flex h-[30rem] flex-col space-y-4 rounded-sm p-px shadow-dove">
            <div className="relative flex h-full overflow-hidden bg-dove p-1">
              <div className="relative h-full w-full overflow-hidden rounded-sm bg-gradient-to-b from-[#c4fb60] to-transparent p-[2px]">
                <div className="h-full w-full bg-dove">
                  <img
                    src="/frame.png"
                    alt=""
                    className="pointer-events-none absolute h-full w-full object-cover opacity-5"
                  />
                  <img
                    src="/coin.png"
                    alt=""
                    className="pointer-events-none absolute bottom-0 right-0 h-80 object-cover"
                  />
                  <div className="relative z-10 p-8">
                    <div className="flex flex-col justify-start ">
                      <div className="flex flex-col">
                        <p className="mt-2 text-2xl">Swap stables with ease</p>
                        <p className="mt-2 text-olive">
                          Trade with reduced slippage
                          <br /> for similar priced assets.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-gradient relative col-span-5 flex flex-col space-y-4 rounded-sm p-px shadow-dove">
            <div className="relative flex h-full overflow-hidden bg-dove p-1">
              <div className="relative h-full w-full overflow-hidden rounded-sm bg-gradient-to-b from-sky-400 to-transparent p-[2px]">
                <div className="h-full w-full bg-dove">
                  <img
                    src="/frame.png"
                    alt=""
                    className="pointer-events-none absolute h-full w-full object-cover opacity-5"
                  />
                  <img
                    src="/water_slime.png"
                    alt=""
                    className="pointer-events-none absolute -bottom-16 right-0 w-full object-cover"
                  />
                  <img
                    src="/fountain.png"
                    alt=""
                    className="pointer-events-none absolute -bottom-16 right-0 w-full object-cover opacity-20 gradient-mask-t-0"
                  />
                  <div className="relative z-10 p-8">
                    <div className="flex flex-col justify-start ">
                      <div className="flex flex-col items-center">
                        <p className="mt-2 text-2xl">Amplify your liquidity</p>
                        <p className="mt-2 text-center text-olive">
                          Expose yourself to more trades and receive more fees.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-gradient col-span-7 flex h-[30rem] flex-col space-y-4 rounded-sm p-px shadow-dove">
            <div className="relative flex h-full overflow-hidden bg-dove">
              <img
                src="/unified.png"
                alt=""
                className="pointer-events-none absolute h-full w-full rounded-sm object-cover opacity-50 gradient-mask-b-0"
              />
              <div className="relative p-8">
                <div className="flex h-full flex-col justify-end">
                  <div className="flex flex-col">
                    <p className="text-xs uppercase tracking-widest text-sky-400">
                      Extensive
                    </p>
                    <p className="mt-2 text-2xl">Expanding to all chains</p>
                    <p className="mt-2 pr-12 text-olive">
                      Trade on the most popular and emerging
                      <br /> chains with a single interface.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 flex flex-row space-x-8">
          <div className="card-gradient flex h-96 w-full flex-col items-start justify-center rounded-sm p-16">
            <h1 className="text-4xl">Learn to swap assets</h1>
            <button className="mt-2 rounded-sm bg-white/5 px-6 py-2 text-sm text-black">
              Learn more
            </button>
          </div>
        </div>
      </section> */}
    </>
  );
}
