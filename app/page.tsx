import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* <div className="background-gradient absolute h-screen w-full opacity-50">
        <div className="background-gradient-pattern" />
      </div> */}
      <div className="mx-auto min-h-screen max-w-6xl px-6 lg:px-12">
        <header className="max-x-6xl relative z-50 bg-transparent">
          <div className="border-b border-white/10"></div>
          <div className="w-full">
            <div className="container flex h-28 items-center justify-between">
              <img src="./dove.png" alt="logo" className="h-12" />
              <a
                href="https://dove.whitenoise.rs/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <button className="group inline-block cursor-pointer rounded-sm bg-gradient-to-tr from-sky-400 via-green-600 to-orange-500 p-px hover:bg-gradient-to-r">
                  <span className="transition-color  inline-block w-full whitespace-nowrap rounded-sm bg-dove px-6 py-3 text-center text-sm font-medium leading-4 tracking-wide text-white duration-200 group-hover:bg-white group-hover:text-dove">
                    Enter App
                  </span>
                </button>
              </a>
            </div>
          </div>
        </header>
        <section className="max-x-6xl relative mt-16 py-10 text-white">
          <div className="container grid-cols-3 md:grid">
            <div className="col-span-2">
              <h2 className="text-gradient bg-clip-text text-6xl text-transparent lg:text-7xl">
                Unified liquidity, <br />
                accessible anywhere.
              </h2>
              <p className="my-12 w-11/12 text-xl text-olive">
                Swap and trade crypto assets with minimized risks and maximized
                security across all chains.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="https://dove.whitenoise.rs/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button className="group relative inline-block cursor-pointer rounded-sm bg-gradient-to-tr from-sky-400 via-green-600 to-orange-500 p-px hover:bg-white">
                    <div className="group absolute inline-block h-full w-full cursor-pointer rounded-sm bg-gradient-to-tr from-sky-400 via-green-600 to-orange-500 p-px opacity-50 blur-lg" />

                    <span className="transition-color relative inline-block w-full whitespace-nowrap rounded-sm bg-dove px-6 py-4 text-center text-base font-medium leading-4 tracking-wide text-white duration-200 group-hover:bg-white group-hover:text-dove">
                      Enter Dove <span className="ml-1 font-normal">→</span>
                    </span>
                  </button>
                </a>
                <a
                  href="https://0xst.notion.site/Dove-Protocol-5a174626e63f4c26a30e753fc7460714"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <button className="group inline-block cursor-pointer rounded-sm bg-white/10 from-white to-white p-px hover:bg-gradient-to-r">
                    <span className="transition-color  inline-block w-full whitespace-nowrap rounded-sm bg-dove px-6 py-4 text-center text-base font-medium leading-4 tracking-wide text-white duration-200 group-hover:bg-white group-hover:text-dove">
                      Learn More
                    </span>
                  </button>
                </a>
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
          </div>
        </section>
      </div>
      <section className="relative mx-auto flex max-w-6xl flex-col justify-center overflow-hidden py-10 text-white">
        <div className="mt-24" />
        {/* <div className="features-blur absolute left-60 -top-64 h-80 w-[48rem] opacity-20 blur-[160px]" /> */}
        <div className="container flex flex-col items-center justify-center">
          <p className="text-xs uppercase tracking-widest text-sky-400">
            Right when you need it
          </p>
          <h1 className="mt-4 text-5xl">Strapped Liquidity</h1>
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
                    <p className="text-xs uppercase tracking-widest text-orange-500">
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
              <div className="relative h-full w-full overflow-hidden rounded-sm bg-gradient-to-b from-white/10 to-transparent p-[2px]">
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
              <div className="relative h-full w-full overflow-hidden rounded-sm bg-gradient-to-b from-white/10 to-transparent p-[2px]">
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
                    <p className="text-xs uppercase tracking-widest text-orange-500">
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
          <div className="flex h-96 w-full flex-col items-start justify-center rounded-sm bg-olive/5 p-16">
            <h1 className="text-4xl">Learn to swap assets</h1>
            <button className="mt-2 rounded-sm bg-white px-6 py-2 text-sm text-black">
              Learn more
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
