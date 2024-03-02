import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const DeleteBook = () => {
  const { id } = useParams();

  const handleCancelDelete = () => {
    // Navigate back to home without deletion
    window.location.href = "/";
  };

  const handleConfirmDelete = async () => {
    try {
      // Make a DELETE request to your backend API endpoint
      await axios.delete(`http://localhost:7000/books/${id}`);
      // Redirect to home or perform any other action after successful deletion
      window.location.href = "/";
    } catch (error) {
      console.error("Error deleting book:", error);
      // Handle error, show error message, or perform any other action
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <p className="text-center text-lg font-semibold mb-4">
        Are you sure you want to delete?
      </p>
      <div className="flex justify-center">
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mr-2"
          onClick={handleConfirmDelete}
        >
          Confirm
        </button>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
          onClick={handleCancelDelete}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
