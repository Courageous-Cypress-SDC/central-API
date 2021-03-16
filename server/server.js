const express = require('express');

const path = require('path');

const app = express();

const axios = require('axios');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('localhost:3001/products', (req, res) => {
  axios.get('http://localhost:3001/products')
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
})

app.get('/reviews', (req, res) => {
  axios.get('http://localhost:4001/reviews')
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
})

app.get('localhost:5001/qa', (req, res) => {
  axios.get('http://localhost:5001/qa')
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
})

const port = 8394;

const server = app.listen(port, () => {
  console.log(`listening on port ${port}`);
});