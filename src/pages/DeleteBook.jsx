import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const DeleteBook = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  // Fetch the book details
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`http://localhost:5555/books/${id}`);
        setBook(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  // Handle the deletion
  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <div className="container mx-auto max-w-md p-6 bg-white shadow-md rounded-lg mt-10">
      <BackButton destination="/" />
      <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
        Delete Book
      </h1>
      {loading ? (
        <div className="flex justify-center items-center mb-6">
          <Spinner />
        </div>
      ) : (
        <div className="text-center">
          {book ? (
            <>
              <h3 className="text-gray-700 text-lg mb-4">
                Are you sure you want to delete the book titled:
              </h3>
              <p className="text-gray-800 font-semibold text-xl mb-6">
                {book.title}
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={handleDeleteBook}
                  className="py-2 px-4 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition duration-150 ease-in-out"
                >
                  Yes, delete it
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="py-2 px-4 bg-gray-300 text-gray-800 font-semibold rounded-md hover:bg-gray-400 transition duration-150 ease-in-out"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <p className="text-gray-600">Book not found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default DeleteBook;
