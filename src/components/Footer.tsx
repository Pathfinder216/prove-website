import type { JSX } from "react"

import RovIcon from "@/assets/RovIcon.png"

const email = import.meta.env.VITE_EMAIL;
const fb = import.meta.env.VITE_FB;
const twitter = import.meta.env.VITE_TWITTER;
const macungie = import.meta.env.VITE_MACUNGIE;

const Footer = (): JSX.Element => {
  return (
    <footer className="bg-prove-primary border-t border-gray-200 mt-8 text-slate-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6">
        <div className={`flex flex-col justify-center items-center gap-y-3 md:flex-row
          md:justify-center md:items-center md:gap-x-4 md:gap-y-0`}>
          <a
            href={`mailto:${email}`}
            className="hover:text-prove-accent transition-colors font-medium"
          >
            {email}
          </a>

          <img
            src={RovIcon}
            alt=""
            className="hidden md:inline-block h-5 w-auto"
          />

          <a
            href={fb}
            target="_blank"
            rel="noreferrer"
            className="hover:text-prove-accent transition-colors font-medium"
          >
            Facebook
          </a>

          <img
            src={RovIcon}
            alt=""
            className="hidden md:inline-block h-5 w-auto"
          />

          <a
            href={twitter}
            target="_blank"
            rel="noreferrer"
            className="hover:text-prove-accent transition-colors font-medium"
          >
            Twitter
          </a>

          <img
            src={RovIcon}
            alt=""
            className="hidden md:inline-block h-5 w-auto"
          />

          <a
            href={macungie}
            target="_blank"
            rel="noreferrer"
            className="hover:text-prove-accent transition-colors font-medium"
          >
            Macungie, Pennsylvania
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
