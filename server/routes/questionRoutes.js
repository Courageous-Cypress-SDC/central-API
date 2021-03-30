const express = require('express');
const axios = require('axios');
const router = express.Router();

const qaURL = 'http://ec2-54-219-4-157.us-west-1.compute.amazonaws.com/';

router.get('/:product_id/:page/:count', (req, res) => {
  axios.get(`${qaURL}${req.url}`)
  .then((response) => {
    res.send(response.data);
  })
  .catch((error) => {
    res.status(400).send(error);
  })
});

router.get('/*/answers', (req, res) => {
  axios.get(`${qaURL}${req.url}`)
  .then((response) => {
    res.send(response.data);
  })
  .catch((error) => {
    res.status(400).send(error);
  })
});


router.post('/', (req, res) => {
  axios.post(`${qaURL}${req.url}`)
  .then((response) => {
    res.send(response.data);
  })
  .catch((error) => {
    res.status(400).send(error);
  })
});

router.post('/*/answers', (req, res) => {
  axios.post(`${qaURL}${req.url}`)
  .then((response) => {
    res.send(response.data);
  })
  .catch((error) => {
    res.status(400).send(error);
  })
});

router.put('/*/helpful', (req, res) => {
  axios.put(`${qaURL}${req.url}`)
  .then((response) => {
    res.send(response.data);
  })
  .catch((error) => {
    res.status(400).send(error);
  })
});

router.put('/*/report', (req, res) => {
  axios.put(`${qaURL}${req.url}`)
  .then((response) => {
    res.send(response.data);
  })
  .catch((error) => {
    res.status(400).send(error);
  })
});


module.exports = router;