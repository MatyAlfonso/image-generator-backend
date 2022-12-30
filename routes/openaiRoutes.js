const express = require('express');
const { generateImage } = require('../controllers/openaiController');
const router = express.Router();

// Generate an image with OpenAI /openai/generateImage  
router.post('/generateImage', generateImage);

module.exports = router;