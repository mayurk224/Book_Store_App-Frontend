import React, { useState } from "react";
import BookSingleCard from "./BookSingleCard";
import BookModal from "./BookModal";

const BookCard = ({ books }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleShowModal = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {books.length > 0 ? (
        books.map((book) => (
          <div
            key={book._id}
            className="transition-transform transform hover:scale-105 bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden"
          >
            <BookSingleCard
              book={book}
              onShowModal={() => handleShowModal(book)}
            />
          </div>
        ))
      ) : (
        <h3 className="col-span-1 sm:col-span-2 lg:col-span-3 text-center text-gray-700 font-semibold">
          No books found.
        </h3>
      )}
      {showModal && selectedBook && (
        <BookModal book={selectedBook} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookCard;
