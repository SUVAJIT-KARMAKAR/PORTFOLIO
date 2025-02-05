import { useState } from "react";
// ICONS
import { Menu, X } from "lucide-react";
// COMPONENTS
import NavBar from "./NavBar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div>
      <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
        <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
          {/* Logo and the Header items */}
          <h1>
            <a href="/" className="logo">
              <img
                className="w-[40px]"
                src="/src/assets/favicon/android-chrome-512x512.png"
                alt="SuvajitKarmakar"
              />
            </a>
          </h1>
          {/* Hamburger menu and the Navigation bar */}
          <div className="relative md:justify-self-center">
            <button
              className="menu-button md:hidden"
              onClick={() => setNavOpen((previous) => !previous)}
            >
              {navOpen ? <X /> : <Menu />}
            </button>
            <NavBar navOpen={navOpen} />
          </div>
          <a
            href="#contact"
            className="button button-secondary max-md:hidden md:justify-self-end"
          >
            Contact
          </a>
        </div>
      </header>
    </div>
  );
};
export default Header;
