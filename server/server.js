const express = require('express');

const path = require('path');

const app = express();

const reviewRoutes = require('./routes/reviewRoutes.js');
const questionRoutes = require('./routes/questionRoutes.js');
const answerRoutes = require('./routes/answerRoutes.js');

const axios = require('axios');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/reviews', reviewRoutes);
app.use('/qa/questions', questionRoutes);
app.use('/qa/answers', answerRoutes);

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/products', productRoutes);


const port = 8394;

const server = app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = {
  app,
  server,
};
