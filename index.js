const express = require('express');
const axios = require('axios'); // external request ke liye
const app = express();
app.use(express.json());

// POST route
app.post('/token', (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ error: 'Token not provided!' });
  }

  res.json({ message: 'Token received successfully', token });
});

// har 30 sec me techinword.tech ko hit karna
setInterval(async () => {
  try {
    console.log("Hitting techinword.tech...");
    const response = await axios.get("https://techinword.tech/");
    console.log("Hit success:", response.status);
  } catch (err) {
    console.log("Error hitting site:", err.message);
  }
}, 30000); // 30000 ms = 30 sec

app.listen(3000, () => console.log('Server running on port 3000'));
