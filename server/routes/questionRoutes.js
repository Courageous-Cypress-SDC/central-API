const express = require('express');
const router = express.Router();

const qaURL = 'http://localhost:5001/';

router.get('/:product_id/:page/:count', (req, res) => {
  axios.get(qaURL)
  .then((response) => {
    console.log(response.data);
    res.send(response.data);
  })
  .catch((error) => {
    console.log(error);
    res.status(400).send(error);
  })
});

router.get('/*/answers', (req, res) => {
  axios.get(`${qaURL}${req.url}`)
  .then((response) => {
    console.log(response.data);
    res.send(response.data);
  })
  .catch((error) => {
    console.log(error);
    res.status(400).send(error);
  })
});


router.post('/', (req, res) => {
  axios.post(`${qaURL}${req.url}`)
  .then((response) => {
    console.log(response.data);
    res.send(response.data);
  })
  .catch((error) => {
    console.log(error);
    res.status(400).send(error);
  })
});

router.post('/*/answers', (req, res) => {
  axios.post(`${qaURL}${req.url}`)
  .then((response) => {
    console.log(response.data);
    res.send(response.data);
  })
  .catch((error) => {
    console.log(error);
    res.status(400).send(error);
  })
});

router.put('/*/helpful', (req, res) => {
  axios.put(`${qaURL}${req.url}`)
  .then((response) => {
    console.log(response.data);
    res.send(response.data);
  })
  .catch((error) => {
    console.log(error);
    res.status(400).send(error);
  })
});

router.put('/*/report', (req, res) => {
  axios.put(`${qaURL}${req.url}`)
  .then((response) => {
    console.log(response.data);
    res.send(response.data);
  })
  .catch((error) => {
    console.log(error);
    res.status(400).send(error);
  })
});


module.exports = router;