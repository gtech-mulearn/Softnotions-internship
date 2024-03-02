const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/userRoutes.js');

console.log(userRoutes);

const PORT = process.env.port || 3001;
const dbURI = process.env.dbURI;

app.use(express.json());
app.use(express.urlencoded({ extends: true}));
app.use(cors({
origin: ['http://localhost:3000','http://localhost:3001'], 
    credentials: true
}));

mongoose.connect(dbURI).then((result) => {
  app.listen(PORT,() => {console.log(`listening on http://localhost:${PORT}`)});
}).catch((err) => console.log(err));

app.use('/api',userRoutes);

app.get('/',(req,res) => {
  res.status(200).json({ message: 'Hello World!'});
})
