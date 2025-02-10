import React from "react";

// COMPONENTS
import { ButtonPrimary, ButtonOutline } from "./Button/Button";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="image-box w-9 h-9 rounded-full">
              <img
                src="/avatar/AVATAR-LOGO.png"
                alt="Suvajit Karmakar avatar"
                width={40}
                height={10}
                className="image-cover rounded-full"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              SWE{" "}
              <a href="https://www.codewalnut.com/" target="__blank">
                @CodeWalnut
              </a>
            </div>
          </div>
          <h2 className="headline-one max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Building Scalable and Modern websites for the future
          </h2>
          <div className="flex items-center gap-3">
            <ButtonPrimary label="DOWNLOAD CV" icon={true} />
            <ButtonOutline icon={true} label="" />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-green-500 via-25% via-green-400/40 to-65% rounded-[60px] overflow-hidden">
            <img
              src="/avatar/AVATAR-NO-BACKGROUND.png"
              alt="Suvajit Karmakar"
              width={656}
              height={800}
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
