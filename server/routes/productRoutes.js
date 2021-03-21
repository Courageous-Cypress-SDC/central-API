const router = require('express').Router();
const axios = require('axios');

const PRODUCT_URL = 'http://localhost:3001/products/';

router.get('/', (err, response) => {
  console.log(err)
  console.log(response)
  console.log('hello from client')
})


// axios.get('http://localhost:3001/products/')
// .then((response) => {
//   console.log(response.data);
//   res.send('w/e');
// })
// .catch((error) => {
//   console.log(error);
//   res.status(500).send(error);
// })