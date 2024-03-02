import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const EditBook = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    yearPublished: "",
  });
  const [updateMessage, setUpdateMessage] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:7000/books/${id}`)
      .then((res) => {
        const { title, author, yearPublished } = res.data;
        setFormData({
          title,
          author,
          yearPublished,
        });
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const updateBook = () => {
    axios
      .put(`http://localhost:7000/books/${id}`, formData)
      .then((res) => {
        setUpdateMessage("Book updated successfully!");
        setTimeout(() => {
          setUpdateMessage("");
        }, 3000); // Hide message after 3 seconds
      })
      .catch((error) => {
        console.error("Error updating book:", error);
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
            onClick={updateBook}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
          >
            Update Book
          </button>
        </div>
        <div>
          <Link to="/" className="bg-gray-500 text-white px-4 py-2 rounded-md">
            Home
          </Link>
        </div>
      </div>
      {updateMessage && (
        <div className="mb-4 text-green-600">{updateMessage}</div>
      )}
    </div>
  );
};

export default EditBook;
