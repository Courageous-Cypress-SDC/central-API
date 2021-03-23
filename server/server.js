const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();
const app1 = express();

const reviewRoutes = require('./routes/reviewRoutes.js');
const questionRoutes = require('./routes/questionRoutes.js');
const answerRoutes = require('./routes/answerRoutes.js');
const productRoutes = require('./routes/productRoutes.js');
const styleRoutes = require('./routes/styleRoutes.js');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/reviews', reviewRoutes);
app.use('/qa/questions', questionRoutes);
app.use('/qa/answers', answerRoutes);
app.use('/products', productRoutes);
app.use('/styles', styleRoutes);
app1.use('/styles', styleRoutes);

const port = 8394;

const server = app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = {
  app,
  server,
};
