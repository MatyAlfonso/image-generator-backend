const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const cors = require('cors');

const app = express();
app.use(cors());

const generateImageRoute = require('./routes/openaiRoutes');

// Enable body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/openAI', generateImageRoute);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});