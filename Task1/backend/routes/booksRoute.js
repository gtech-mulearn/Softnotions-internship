import Express  from "express";
import { Book } from "../model/bookmodel.js";
import cors from "cors";

const router = Express.Router();
router.use(cors());

router.get("/", async (req, res) => {
  try {
    const book = await Book.find();
    return res.status(201).send(book);
  } catch (error) {
    console.error("Error Fetching");
    return res.status(500).send({ error: "Failed to fetch" }); // Send an error response
  }
});

router.post("/create", async (req, res) => {
  try {
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      yearPublished: req.body.yearPublished,
    };

    //The Book.create() method is a part of the Mongoose library.
    // It's used to create a new document (instance of a model) in the MongoDB database based on the provided data
    // (newBook in this case).
    const book = await Book.create(newBook);
    // When using await, it waits for this Promise to resolve.
    // Once resolved, the book variable will hold the newly created document (instance of the Book model).
    // By using await, you're essentially pausing the execution of the code until the creation of the book document is complete.
    // This ensures that subsequent code that relies on the book variable will only execute once the book has been successfully created in the database.

    return res.status(201).send(book); // Send back the created book
  } catch (error) {
    console.error("Error creating book:", error);
    res.status(500).send({ error: "Failed to create book" }); // Send an error response
  }
});



//:id is used for pattern matching
// /books/abc will also match, and req.params.id will be "abc".
// /books/anotherValue will match, and req.params.id will be "anotherValue".
// /books/123/edit will not match because the route pattern only matches up to the first segment after "/books/".
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findById(id);
    return res.status(201).send(book);
  } catch (error) {
    console.error("Error Fetching");
    return res.status(500).send({ error: "Failed to fetch" }); // Send an error response
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findByIdAndUpdate(id, req.body);

    if (!book) {
      return res.status(404).send("Book not found");
    }
    return res.status(201).send("Updated successfully");
  } catch (error) {
    return res.status(500).send({ error: "Failed to find" }); // Send an error response
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findByIdAndDelete(id);

    if (!book) {
      return res.status(404).send("Book not found");
    }
    return res.status(201).send("Deleted successfully");
  } catch (error) {
    return res.status(500).send({ error: "Failed to find" }); // Send an error response
  }
});

export default router;