"use client";
/* eslint-disable @next/next/no-head-element */

import "../styles/globals.css";
import "../styles/tailwind.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import Footer from "../components/Footer";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { chains, provider } = configureChains(
    [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
    [
      alchemyProvider({ apiKey: "e7cPXmSM4CN0WoDydp42aBK_SRswrWXU" }),
      publicProvider(),
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: "vertical", // vertical, horizontal
      gestureDirection: "vertical", // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    //get scroll value
    lenis.on(
      "scroll",
      ({ scroll, limit, velocity, direction, progress }: any) => {
        console.log({ scroll, limit, velocity, direction, progress });
      }
    );

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <html>
      <head></head>
      <body>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
            <div className="mx-auto">
              {children}
              <Footer />
            </div>
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
