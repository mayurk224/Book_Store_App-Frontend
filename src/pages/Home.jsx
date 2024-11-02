import React, { useEffect, useState } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import axios from "axios";
import BookTable from "../components/Home/BookTable";
import BookCard from "../components/Home/BookCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(
    localStorage.getItem("viewToggle") || "table"
  );

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/books`);
        setBooks(Array.isArray(res.data.books) ? res.data.books : []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("viewToggle", toggle);
  }, [toggle]);

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Books Store App</h1>
        <Link
          to="/books/create"
          className="text-blue-600 hover:text-blue-800 transition duration-200"
        >
          <MdOutlineAddBox className="text-4xl" />
        </Link>
      </div>

      <div className="flex justify-center mb-6 space-x-4">
        <button
          onClick={() => setToggle("table")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            toggle === "table"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          } transition duration-200`}
        >
          Table View
        </button>
        <button
          onClick={() => setToggle("card")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            toggle === "card"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          } transition duration-200`}
        >
          Card View
        </button>
      </div>

      {loading ? (
        <Spinner />
      ) : toggle === "table" ? (
        <div className="overflow-x-auto rounded-lg shadow">
          <BookTable books={books} />
        </div>
      ) : (
        <BookCard books={books} />
      )}
    </div>
  );
};

export default Home;
