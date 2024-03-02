import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CreateBooks = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    yearPublished: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addBook = () => {
    axios
      .post("http://localhost:7000/books/create", formData)
      .then((res) => {
        setFormData({
          title: "",
          author: "",
          yearPublished: "",
        });
        setSuccessMessage("Book successfully added!");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000); // Hide message after 3 seconds
      })
      .catch((error) => {
        console.error("Error adding book:", error);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-md">
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="author"
          className="block text-sm font-medium text-gray-700"
        >
          Author:
        </label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="yearPublished"
          className="block text-sm font-medium text-gray-700"
        >
          Year Published:
        </label>
        <input
          type="text"
          id="yearPublished"
          name="yearPublished"
          value={formData.yearPublished}
          onChange={handleChange}
          className="mt-1 p-2 border rounded-md w-full"
        />
      </div>
      <div className="flex justify-between items-center">
        <div>
          <button
            onClick={addBook}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
          >
            Add Book
          </button>
        </div>
        <div>
          <Link to="/" className="bg-gray-500 text-white px-4 py-2 rounded-md">
            Home
          </Link>
        </div>
      </div>
      {successMessage && (
        <div className="mb-4 text-green-600">{successMessage}</div>
      )}
    </div>
  );
};

export default CreateBooks;
