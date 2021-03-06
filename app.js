const express = require('express');

const connectDB = require('./config/db.js');

const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('Hello world! from Mongo'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server started on port ${port}`));