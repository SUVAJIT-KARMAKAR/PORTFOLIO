import React from "react";

// COMPONENTS
import { ButtonPrimary } from "./Button/Button";

// ICONS
import { LuArrowBigRightDash } from "react-icons/lu";

// SITEMAP
const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

// SOCIALS
const socials = [
  {
    label: "GitHub",
    href: "",
  },
  {
    label: "LinkedIn",
    href: "",
  },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-one mb-8 lg:max-w-[12ch] revealup">
              {" "}
              Let&apos;s work together today!
            </h2>
            <ButtonPrimary
              href="mailto:"
              label="Start a project"
              classes="revealup"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 revealup"> SITEMAP </p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 revealup"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 revealup"> SOCIALS </p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 revealup"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-20 mb-8">
          <a href="/" className="logo revealup">
            <img src="/avatar/LOGO.png" alt="Logo" width={40} height={40} />
          </a>
          <p className="text-zinc-500 text-sm revealup">
            &copy; 2025 <span className="text-zinc-200">suvajitkarmakar</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
