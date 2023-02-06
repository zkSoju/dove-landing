import React from "react";
import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative mx-auto mt-8 h-64 max-w-6xl">
      <div className="container py-16">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <img src="./dove.png" alt="logo" className="h-12" />
              <p className="text-white">Dove Protocol</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://twitter.com/doveprotocol"
              className="h-4 w-4 text-white/50"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaTwitter />
            </a>
            <a
              href="https://t.me/doveprotocol"
              className="h-4 w-4 text-white/50"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="https://discord.gg/8Z3qZ5Z"
              className="h-4 w-4 text-white/50"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaDiscord />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
