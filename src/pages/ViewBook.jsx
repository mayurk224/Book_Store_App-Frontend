// src/pages/ViewBook.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";

const ViewBook = () => {
  const [book, setBook] = useState(null); // Set initial state to `null`
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:5555/books/${id}`);
        setBook(res.data); // Set the response data to `book`
      } catch (err) {
        console.error("Error fetching book data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <BackButton />
      <div className="my-6">
        <h1 className="text-3xl font-bold text-gray-800">Book Details</h1>
      </div>
      {loading ? (
        <div className="flex justify-center items-center mt-10">
          <Spinner />
        </div>
      ) : book ? ( // Check if `book` is not null before rendering its properties
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            {book.title}
          </h2>
          <div className="text-gray-600 space-y-2">
            <p>
              <span className="font-medium text-gray-700">Book ID:</span>{" "}
              {book._id}
            </p>
            <p>
              <span className="font-medium text-gray-700">Author:</span>{" "}
              {book.author}
            </p>
            <p>
              <span className="font-medium text-gray-700">Description:</span>{" "}
              {book.description}
            </p>
            <p>
              <span className="font-medium text-gray-700">Publish Year:</span>{" "}
              {book.publishYear}
            </p>
            <p>
              <span className="font-medium text-gray-700">Created At:</span>{" "}
              {new Date(book.createdAt).toLocaleString()}
            </p>
            <p>
              <span className="font-medium text-gray-700">Updated At:</span>{" "}
              {new Date(book.updatedAt).toLocaleString()}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-red-500">Book not found.</p>
      )}
    </div>
  );
};

export default ViewBook;
