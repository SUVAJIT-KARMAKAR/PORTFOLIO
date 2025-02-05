import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const NavBar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);

  const initActiveBox = () => {
    activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
  };

  useEffect(initActiveBox, []);
  window.addEventListener("resize", initActiveBox);

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove("active");
    event.target.classList.add("active");
    lastActiveLink.current = event.target;

    activeBox.current.style.top = event.target.offsetTop + "px";
    activeBox.current.style.left = event.target.offsetLeft + "px";
    activeBox.current.style.width = event.target.offsetWidth + "px";
    activeBox.current.style.height = event.target.offsetHeight + "px";
  };

  // Navigation items
  const navItems = [
    { label: "Home", link: "#home", className: "navigation-link active" },
    { label: "About", link: "#about", className: "navigation-link" },
    { label: "Work", link: "#work", className: "navigation-link" },
    { label: "Reviews", link: "#reviews", className: "navigation-link" },
    {
      label: "Contact",
      link: "#contact",
      className: "navigation-link md:hidden",
    },
  ];

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, link, className }, key) => (
        <a
          href={link}
          className={className}
          key={key}
          ref={label === "Home" ? lastActiveLink : undefined}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}

      <div ref={activeBox} className="active-box"></div>
    </nav>
  );
};

NavBar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default NavBar;
