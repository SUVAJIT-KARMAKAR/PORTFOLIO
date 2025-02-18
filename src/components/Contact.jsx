import React from "react";

// ICONS
import { BsGithub } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";
import { BiLogoWhatsappSquare } from "react-icons/bi";
import { FaSquareInstagram } from "react-icons/fa6";

// SOCIAL LINKS
const socialLinks = [
  {
    href: "",
    icon: <BsGithub size={25} />,
    alt: "GitHub",
  },
  {
    href: "",
    icon: <GrLinkedin size={25} />,
    alt: "LinkedIn",
  },
];

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
        <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
          <h2 className="headline-two lg:max-w-[2 5ch] revealup">
            Contact me for collaborations
          </h2>
          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[35ch] revealup">
            Reach out today to discuss your project needs and start
            collaborating on something amazing!
          </p>
          <div className="flex items-center gap-2 mt-auto">
            {socialLinks.map(({ href, icon }, key) => (
              <a
                key={key}
                href={href}
                target="_blank"
                className="w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80 revealup"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
        <form
          action="https://getform.io/f/ajjmjgza"
          method="POST"
          className="xl:pl-10 2xl:pl-20"
        >
          <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
            <div className="mb-4">
              <label htmlFor="name" className="label revealup">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                placeholder="Suvajit Karmakar"
                required
                className="text-field revealup"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="label revealup">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="ikarmakarsuvajit@gmail.com"
                required
                className="text-field revealup"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="label revealup">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Hi!"
              required
              className="text-field resize-y min-h-32 max-h-80 revealup"
            ></textarea>
          </div>
          <button
            type="submit"
            className="button button-primary [&]:max-w-full w-full justify-center revealup"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
