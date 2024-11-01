import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const BackButton = ({ destination = "/" }) => {
  return (
    <div className="mb-4">
      <Link
        to={destination}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-100 rounded-lg hover:bg-blue-200 transition duration-150 ease-in-out"
      >
        <BsArrowLeft className="mr-2 text-lg" />
        <span>Back</span>
      </Link>
    </div>
  );
};

export default BackButton;
