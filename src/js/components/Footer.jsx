import React from "react";

const Footer = ({ taskCount }) => {
  return (
    <p className="text-muted mb-2 text-center mgitt-3">
      {taskCount} {taskCount <= 1 ? "item left" : "items left"}
    </p>
  );
};

export default Footer;
