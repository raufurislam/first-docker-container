import express from 'express';

import connectToDatabase from './helpers.mjs';

const app = express();

app.get('/', (req, res) => {
  res.send('<h2>Welcome to Docker!</h2>');
});

await connectToDatabase();

app.listen(5000);
