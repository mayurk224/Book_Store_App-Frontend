import React from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const BookSingleCard = ({ book }) => {
  return (
    <div
      key={book._id}
      className="bg-white border border-gray-200 rounded-lg shadow-md p-4 transition-transform transform hover:scale-105"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{book.title}</h2>
      <p className="text-gray-600 mb-1">Author: {book.author}</p>
      <p className="text-gray-600 mb-4">Published Year: {book.publishYear}</p>
      <div className="flex justify-between">
        <Link
          to={`/books/details/${book._id}`}
          className="flex items-center text-blue-500 hover:text-blue-700 transition duration-200"
        >
          <FaEye className="mr-1" /> View
        </Link>
        <Link
          to={`/books/edit/${book._id}`}
          className="flex items-center text-yellow-500 hover:text-yellow-700 transition duration-200"
        >
          <FaEdit className="mr-1" /> Edit
        </Link>
        <Link
          to={`/books/delete/${book._id}`}
          className="flex items-center text-red-500 hover:text-red-700 transition duration-200"
        >
          <FaTrash className="mr-1" /> Delete
        </Link>
      </div>
    </div>
  );
};

export default BookSingleCard;
