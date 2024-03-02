# Book Management System

This is a simple book management system that allows users to perform CRUD (Create, Read, Update, Delete) operations on books. The system consists of a frontend built with React and a backend built with Node.js and Express, with data storage handled by MongoDB.

## Features

- **Add Book**: Users can add new books to the system by providing title, author, and year published.
- **View Book Details**: Users can view details of each book, including its title, author, year published, creation time, and last update time.
- **Edit Book**: Users can edit existing book details such as title, author, and year published.
- **Delete Book**: Users can delete books from the system after confirmation.
- **List Books**: Users can view a list of all books currently stored in the system.

## Technologies Used

- **Frontend**: React.js, Axios, React Router
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Styling**: Tailwind CSS

## Setup Instructions

1. Clone the repository:
```
git clone https://github.com/your-username/book-management-system.git
```
2. Install dependencies for both frontend and backend:
```
cd book-management-system/frontend
npm install
cd ../backend
npm install
```

3. Set up MongoDB:
   - Install MongoDB if not already installed or use MongoDB Atlas
   - Create a MongoDB database and obtain the connection URI.
   - Update the `config.js` file in the backend with your MongoDB URI.

4. Run the backend server:
```
cd backend
npm run dev
```

5. Run the frontend server:
```
cd frontend
npm run dev
```

6. Access the application in your browser at `http://localhost:3000`.
   For frontend `http://localhost:3000`.
   For backend check config.js and assign the corresponding port

## API Endpoints

- **GET /books**: Get all books
- **POST /books/create**: Create a new book
- **GET /books/:id**: Get details of a specific book
- **PUT /books/:id**: Update details of a specific book
- **DELETE /books/:id**: Delete a specific book

## Contributing

Contributions are welcome! Feel free to open issues or pull requests for any improvements or new features you'd like to see implemented.

## License

This project is licensed under the MIT License.


