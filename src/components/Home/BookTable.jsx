import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import BookModal from "./BookModal";

const BookTable = ({ books }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleOpenModal = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };
  return (
    <div className="">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg">
        <thead className="bg-gray-200 text-gray-700 uppercase text-xs leading-normal">
          <tr>
            <th className="py-3 px-6 text-left">No</th>
            <th className="py-3 px-6 text-left">Title</th>
            <th className="py-3 px-6 text-left">Author</th>
            <th className="py-3 px-6 text-left">Publish Year</th>
            <th className="py-3 px-6 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {books.length > 0 ? (
            books.map((book, index) => (
              <tr
                key={book._id}
                className="border-b border-gray-200 hover:bg-gray-100 transition duration-200"
              >
                <td className="py-3 px-6">{index + 1}</td>
                <td className="py-3 px-6">{book.title}</td>
                <td className="py-3 px-6">{book.author}</td>
                <td className="py-3 px-6">{book.publishYear}</td>
                <td className="py-3 px-6">
                  <div className="flex space-x-4">
                    <FaEye
                      onClick={() => handleOpenModal(book)} // Pass the book to the handler
                      className="cursor-pointer text-green-500 hover:text-green-700 transition duration-200"
                      title="View Book"
                    />
                    <Link
                      to={`/books/details/${book._id}`}
                      className="text-blue-500 hover:text-blue-700 transition duration-200"
                      title="View Details"
                    >
                      <BsInfoCircle className="text-lg" />
                    </Link>
                    <Link
                      to={`/books/edit/${book._id}`}
                      className="text-yellow-500 hover:text-yellow-700 transition duration-200"
                      title="Edit Book"
                    >
                      <AiOutlineEdit className="text-lg" />
                    </Link>
                    <Link
                      to={`/books/delete/${book._id}`}
                      className="text-red-500 hover:text-red-700 transition duration-200"
                      title="Delete Book"
                    >
                      <MdOutlineDelete className="text-lg" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-3">
                No books found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {showModal && selectedBook && (
        <BookModal book={selectedBook} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookTable;
