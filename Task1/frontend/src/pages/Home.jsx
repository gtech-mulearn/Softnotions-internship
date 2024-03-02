import { useEffect,useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:7000/books/")  //local run
      //.get("https://book-managementback.vercel.app/books/")
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="p-4 mb-4">
      {/* Display books and loading indicator */}
      {/* Modify as needed */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="p-4 mb-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Book List</h1>
            <Link
              to={`/books/create`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded mr-2"
            >
              Add Book
            </Link>
          </div>
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Index</th>
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Author</th>
                <th className="border px-4 py-2">Year Published</th>
                <th className="border px-4 py-2">Operations</th>
                {/* Add more table headers as needed */}
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={index} className="bg-white">
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{book.title}</td>
                  <td className="border px-4 py-2">{book.author}</td>
                  <td className="border px-4 py-2">{book.yearPublished}</td>
                  <td className="border px-4 py-2">
                    <div className="flex justify-between">
                      <Link
                        to={`/books/details/${book._id}`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                      >
                        Details
                      </Link>

                      <Link
                        to={`/books/edit/${book._id}`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                      >
                        Edit
                      </Link>

                      <Link
                        to={`/books/delete/${book._id}`}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                      >
                        Delete
                      </Link>
                    </div>
                  </td>

                  {/* Add more table cells for additional book properties */}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-4">{books.length} books loaded</p>
        </div>
      )}
    </div>
  );

};


export default Home;