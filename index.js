const express = require('express');
const app = express();
app.use(express.json());

// POST route to send back token from body
app.post('/token', (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ error: 'Token not provided!' });
  }

  // just sending it back as response
  res.json({ message: 'Token received successfully', token });
});

app.listen(3000, () => console.log('Server running on port 3000'));
