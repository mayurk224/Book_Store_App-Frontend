import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{book.title}</h2>
          <AiOutlineClose
            onClick={onClose}
            className="cursor-pointer text-gray-600 hover:text-gray-800 transition duration-200"
          />
        </div>
        <div className="mb-4">
          <p className="text-gray-600">Author: {book.author}</p>
          <p className="text-gray-600">Published Year: {book.publishYear}</p>
        </div>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloribus
          omnis consectetur provident, harum repudiandae atque quas sequi.
          Doloribus cupiditate debitis in beatae, nam amet aut et libero nulla,
          exercitationem obcaecati accusamus soluta esse possimus magni facilis
          at saepe maiores eum voluptatem odio corrupti? Molestiae non voluptas
          quas enim sint!
        </p>
      </div>
    </div>
  );
};

export default BookModal;
