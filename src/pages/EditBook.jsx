import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [description, setDescription] = useState(""); // New state for description
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}/books/${id}`)
      .then((res) => {
        setAuthor(res.data.author);
        setTitle(res.data.title);
        setPublishYear(res.data.publishYear);
        setDescription(res.data.description); // Fetch and set the description
        setLoading(false);
      })
      .catch((err) => {
        enqueueSnackbar("Error while editing book", { variant: "error" });
        console.log(err);
        setLoading(false);
      });
  }, [id]); // Added id to the dependency array

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear,
      description, // Include description in the updated data
    };
    setLoading(true);
    axios
      .put(`${API_URL}/books/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Updated Successfully", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        enqueueSnackbar("Error while updating book", { variant: "error" });
        setLoading(false);
      });
  };

  return (
    <div className="container mx-auto max-w-lg p-6 bg-white shadow-md rounded-lg mt-10">
      <BackButton />
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Edit Book</h1>
      {loading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="title" className="text-gray-700 font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter book title"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="author" className="text-gray-700 font-medium mb-2">
              Author
            </label>
            <input
              type="text"
              name="author"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter author name"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="publishYear"
              className="text-gray-700 font-medium mb-2"
            >
              Publish Year
            </label>
            <input
              type="number"
              name="publishYear"
              id="publishYear"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter publish year"
            />
          </div>
          {/* Description Field */}
          <div className="flex flex-col">
            <label
              htmlFor="description"
              className="text-gray-700 font-medium mb-2"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter book description"
              rows="4" // Adjust the number of rows as needed
            />
          </div>
          <button
            onClick={handleEditBook}
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-150 ease-in-out"
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
};

export default EditBook;
