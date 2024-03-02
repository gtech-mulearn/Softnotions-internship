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
git clone https://github.com/afreenpoly/Softnotions
```
2. Install dependencies for both frontend and backend:
```
cd Softnotions/Task1/frontend
npm install
cd ../backend
npm install
```
Open the folder in vscode
```
cd ..
code .
```

3. Set up MongoDB:
   - Install MongoDB if not already installed
   - Use MongoDB Atlas (preferred) or MongoDB compass
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

6. Access the application in your browser
   For frontend it will be shown in terminal.
   For backend check config.js and assign the corresponding port and go to that port `http://localhost:7000`

## API Endpoints

- **GET /books**: Get all books
- **POST /books/create**: Create a new book
- **GET /books/:id**: Get details of a specific book
- **PUT /books/:id**: Update details of a specific book
- **DELETE /books/:id**: Delete a specific book

## License

This project is licensed under the MIT License.


