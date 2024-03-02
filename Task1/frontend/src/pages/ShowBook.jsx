import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ShowBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:7000/books/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
      });
  }, [id]);

  if (!book) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  return (
    <div>
      <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-md">
        <h2 className="text-xl font-bold mb-4">Book Details</h2>
        <div className="mb-2">
          <span className="font-semibold">ID:</span> {book._id}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Title:</span> {book.title}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Author:</span> {book.author}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Year Published:</span>{" "}
          {book.yearPublished}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Time Created:</span> {book.createdAt}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Time Updated:</span> {book.updatedAt}
        </div>
        <div className="mt-4">
          <Link to="/" className="bg-gray-500 text-white px-4 py-2 rounded-md">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowBook;
