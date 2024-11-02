import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";

const CreateBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publishYear: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const API_URL = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveBook = async () => {
    try {
      setLoading(true);
      await axios.post(`${API_URL}/books`, formData);
      enqueueSnackbar("Book Created Successfully", { variant: "success" });
      navigate("/");
    } catch (err) {
      enqueueSnackbar("Error while creating book", { variant: "error" });
    } finally {
      setLoading(false);
    }
  };

  alert(`${API_URL}/books`);

  const { title, author, publishYear, description } = formData;

  return (
    <div className="container mx-auto max-w-lg p-6 bg-white shadow-md rounded-lg mt-10">
      <BackButton />
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Create Book</h1>
      {loading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="space-y-4">
          {["title", "author", "publishYear", "description"].map((field) => (
            <div key={field} className="flex flex-col">
              <label
                htmlFor={field}
                className="text-gray-700 font-medium mb-2 capitalize"
              >
                {field === "publishYear" ? "Publish Year" : field}
              </label>
              {field === "description" ? (
                <textarea
                  name={field}
                  id={field}
                  value={description}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={`Enter ${field}`}
                  rows="4"
                />
              ) : (
                <input
                  type={field === "publishYear" ? "number" : "text"}
                  name={field}
                  id={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={`Enter ${field}`}
                />
              )}
            </div>
          ))}
          <button
            onClick={handleSaveBook}
            className={`w-full py-2 px-4 ${
              loading ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"
            } text-white font-semibold rounded-md transition duration-150 ease-in-out`}
            disabled={loading}
          >
            {loading ? "Creating..." : "Create"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CreateBook;
