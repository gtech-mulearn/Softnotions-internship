// Import necessary modules
const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const bodyParser = require('body-parser');

// Create an Express application
const app = express();

// Middleware setup
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse JSON request bodies

// MongoDB connection string
const uri = process.env.MONGODB_URL;

// Create a new MongoDB client
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let db;

// Function to connect to MongoDB
async function run() {
    try {
        await client.connect();
        console.log("Connected to MongoDB!");
        db = client.db('myapp');
    } catch (err) {
        console.error(err);
    }
}

// Connect to MongoDB
run().catch(console.dir);

// Route to handle form submissions
app.post('/submit', async (req, res) => {
    const newUser = {
        name: req.body.name,
        age: req.body.age
    };
    const result = await db.collection('users').insertOne(newUser);
    res.status(200).send(`User data saved to MongoDB with id ${result.insertedId}`);
});

// Start the server
app.listen(5000, () => console.log('Server is running on port 5000'));
