import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="absolute top-0 left-0 mt-24 h-[140vh] w-full gradient-mask-t-40">
        <Image src="/dove_bg.png" fill alt="" className="object-cover" />
        <div className="relative h-[140vh] w-full bg-black opacity-50" />
      </div>
      <div className="pointer-events-none fixed z-[100] h-screen w-full">
        {/* <img
          src="./dove_companion.png"
          alt=""
          className="absolute bottom-16 right-0 w-96 object-cover"
        /> */}
      </div>
      <header className="fixed bottom-0 z-50 w-full bg-transparent px-8">
        <div className="flex w-full items-center justify-between rounded-t-2xl bg-dove/50 px-8 py-4">
          <img src="./dove.png" alt="logo" className="h-12" />
          <div>
            <p className="text-white">Search</p>
          </div>
        </div>
      </header>
      <div className="max-w-8xl mx-auto h-[160vh] px-16">
        <section className="max-x-6xl relative mt-16 py-10 text-white">
          <div className="flex flex-col items-center">
            <h2 className="text-center text-6xl text-white lg:text-7xl">
              Unified liquidity,
              <br />
              accessible anywhere.
            </h2>
            <p className="my-12 text-center text-xl text-olive">
              Swap and trade crypto assets with minimized risks and <br />
              maximized security across all chains.
            </p>
          </div>
        </section>
      </div>
      <section className="relative mx-auto flex max-w-6xl flex-col justify-center overflow-hidden py-10 text-white">
        {/* <div className="features-blur absolute left-60 -top-64 h-80 w-[48rem] opacity-20 blur-[160px]" /> */}
        <div className="container flex flex-col items-center justify-center">
          <h1 className="mt-4 text-center text-5xl">
            Strapped liquidity
            <br />
            whenever you need it
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
                    {/* <p className="text-xs uppercase tracking-widest text-orange-500">
                      Secure
                    </p> */}
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
                    {/* <p className="text-xs uppercase tracking-widest text-orange-500">
                      Extensive
                    </p> */}
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
        {/* <div className="mt-24 flex flex-row space-x-8">
          <div className="flex h-96 w-full flex-col items-start justify-center rounded-sm bg-olive/5 p-16">
            <h1 className="mb-4 text-4xl">Learn to swap assets</h1>
            <button className="mt-2 rounded-sm bg-white px-6 py-2 text-sm text-black">
              Learn more
            </button>
          </div>
        </div> */}
      </section>
    </>
  );
}
