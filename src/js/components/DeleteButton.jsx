import React from "react";

const DeleteButton = ({ onClick }) => {
  return (
    <button
      className="delete-button btn btn-outline-primary btn-sm"
      onClick={onClick}
    >
      <i className="fa-solid fa-x"></i>
    </button>
  );
};

export default DeleteButton;
