const express = require('express');
const router = express.Router();

const qaURL = 'http://localhost:5001/';

router.get('/questions', (req, res) => {
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

router.get('/questions/*/answers', (req, res) => {
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


router.post('/questions', (req, res) => {
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

router.post('/questions/*/answers', (req, res) => {
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

router.put('/questions/*/helpful', (req, res) => {
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

router.put('/questions/*/report', (req, res) => {
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

router.put('/answers/*/helpful', (req, res) => {
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

router.put('/answers/*/report', (req, res) => {
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