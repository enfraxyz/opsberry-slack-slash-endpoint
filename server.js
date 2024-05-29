require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const PORT = 3050;

// Middleware to parse URL-encoded data (from Slack)
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/slack/command', async (req, res) => {
  try {
    // Attempt to parse the JSON data provided by the user
    const userData = JSON.parse(req.body.text);

    const response = await axios.post('https://api.opsberry.ai/v1/webhooks/664e7a5dd9d9bc0056c284ed/trigger', userData, {
      headers: {
        "Content-Type": "application/json",
        "x-opsberry-auth": "744812d8-1b3a-4072-a31d-5b46719fb5e9"
      }
    });

    // Return a JSON response including the original payload and any response data
    res.status(200).json({
      message: 'Webhook triggered successfully',
      originalData: userData,
      responseData: response.data
    });
  } catch (error) {
    console.error('Error handling webhook or parsing JSON:', error);
    res.status(500).json({
      message: 'Failed to trigger webhook or parse JSON',
      error: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
