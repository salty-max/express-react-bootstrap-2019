const express = require('express');
const cors = require('cors');

const app = express();

// CORS for react app, assuming port 3000
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.get('/', (req, res) => res.send('Hello client!'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port} 🚀`));

module.exports = app;
