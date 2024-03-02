  import express, { response } from "express";
  import { PORT, uri } from "./config.js";
  import mongoose from "mongoose";
  import booksRoute from  "./routes/booksRoute.js";
  import cors from "cors";
  import bodyParser from "body-parser";

  const app = express();


  app.use(bodyParser.json()); // Parse JSON requests

  app.get("/", (req, res) => {
    return res.send("Welcome");
  });

  app.use("/books", booksRoute);

  // Middleware for handling CORS POLICY
  // Option 1: Allow All Origins with Default of cors(*)
  app.use(cors());
  // Option 2: Allow Custom Origins
  // app.use(
  //   cors({
  //     origin: 'http://localhost:3000',
  //     methods: ['GET', 'POST', 'PUT', 'DELETE'],
  //     allowedHeaders: ['Content-Type'],
  //   })
  // );


  mongoose
    .connect(uri)
    .then(() => {
      console.log("Connected to MongoDB");

      app.listen(PORT, () => {
        console.log(`App is running at: http://localhost:${PORT}`);
      });
      //app.listen inside database connect since server only needed when db is connected
    })
    .catch((error) => {
      console.log(error);
    });
