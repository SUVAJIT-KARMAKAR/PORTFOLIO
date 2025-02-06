import React from "react";
import PropTypes from "prop-types";

// ICONS
import { Download, Mouse } from "lucide-react";

// BUTTON PRIMARY COMPONENT
const ButtonPrimary = ({ href, target = "_self", label, icon, classes }) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={"button button-primary " + classes}
      >
        {label}
        {icon ? <File /> : undefined}
      </a>
    );
  } else {
    return (
      <button className={"button button-primary " + classes}>
        {label}
        {icon ? <Download size={20} className="font-semibold" /> : undefined}
      </button>
    );
  }
};

// BUTTON SECONDARY COMPONENT
const ButtonOutline = ({ href, target = "_self", label, icon, classes }) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={"button button-outline " + classes}
      >
        {label}
        { icon ? <Mouse size={20} /> : undefined }
      </a>
    );
  } else {
    return (
      <button className={"button button-outline " + classes}>
        {label}
        {icon ? <Mouse size={20} className="font-semibold animate-bounce" /> : undefined}
      </button>
    );
  }
};

// PROPTYPES
ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.bool,
  classes: PropTypes.string,
};

ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.bool,
  classes: PropTypes.string,
};

export { ButtonPrimary, ButtonOutline };
