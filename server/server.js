const express = require('express');

const path = require('path');

const app = express();

const reviewRoutes = require('./routes/reviewRoutes.js');
const productRoutes = require('./routes/productRoutes.js');

const axios = require('axios');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/reviews', reviewRoutes);

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/products', productRoutes);

app.get('/qa', (req, res) => {
  axios.get('http://localhost:5001/qa')
    .then((response) => {
      console.log(response.data);
      res.send('w/e');
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(error);
    })
})

const port = 8394;

const server = app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = {
  app,
  server,
};
