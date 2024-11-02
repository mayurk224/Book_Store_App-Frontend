import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-lg relative"
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition duration-200"
        >
          <AiOutlineClose size={24} />
        </button>

        <h2 className="text-2xl font-semibold mb-4">{book.title}</h2>

        <div className="mb-4">
          <p className="text-gray-600">
            <strong>Author:</strong> {book.author}
          </p>
          <p className="text-gray-600">
            <strong>Published Year:</strong> {book.publishYear}
          </p>
        </div>

        <p className="text-gray-700">
          {book.description || "No description available."}
        </p>
      </div>
    </div>
  );
};

export default BookModal;
