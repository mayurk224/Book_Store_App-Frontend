import React, { useEffect, useState } from "react";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import axios from "axios";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:5555/books");
        setBooks(Array.isArray(res.data.books) ? res.data.books : []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Books List</h1>
        <Link
          to="/books/create"
          className="text-blue-600 hover:text-blue-800 transition duration-200"
        >
          <MdOutlineAddBox className="text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="overflow-x-auto rounded-lg shadow overflow-hidden">
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
        </div>
      )}
    </div>
  );
};

export default Home;
