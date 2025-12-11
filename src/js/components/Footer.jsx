import React from "react";

const Footer = ({ taskCount }) => {
  return (
    <p className="text-body-secondarygit sta">
      {taskCount} {taskCount <= 1 ? "item left" : "items left"}
    </p>
  );
};

export default Footer;
